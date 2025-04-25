"use client";

import Button from "@/components/Button/Button";
import Image from "next/image";
import { useForm } from "react-hook-form";

interface FormData {
  email: string;
  password: string;
}

function SigninForm() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>();

  const handleSubmitSignin = (values: FormData) => {
    console.log(values);
  };

  return (
    <form onSubmit={handleSubmit(handleSubmitSignin)} className="flex w-full flex-col gap-5">
      <div className="mt-10">
        <input
          {...register("email")}
          className="border-netural-200 paragraph_medium w-full rounded-t-[7px] border px-[18px] py-5 outline-none"
          placeholder="아이디를 입력해주세요."
        />
        <input
          type="password"
          {...register("password")}
          className="border-netural-200 paragraph_medium w-full rounded-b-[7px] border-b border-l border-r px-[18px] py-5 outline-none"
          placeholder="비밀번호를 입력해주세요."
        />
      </div>

      <label className="flex cursor-pointer select-none items-center gap-[10px] text-lg font-normal">
        <input type="checkbox" className="peer hidden" />
        <div className="relative size-6 rounded-[5px] border-2 border-neutral-500 peer-checked:border-primary-500 peer-checked:bg-primary-500">
          <Image src="/icons/check.svg" width={20} height={20} alt="체크 아이콘" />
        </div>
        아이디 저장
      </label>

      <div className="flex flex-col gap-[10px]">
        <Button type="submit" variant="fill" className="py-4">
          <span className="heading4">로그인</span>
        </Button>
        <Button type="button" variant="outline" className="py-4">
          <span className="heading4">회원가입</span>
        </Button>
      </div>
    </form>
  );
}

export default SigninForm;
