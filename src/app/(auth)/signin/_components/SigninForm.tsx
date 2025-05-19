"use client";

import Button from "@/components/Button/Button";
import CheckBox from "@/components/CheckBox/CheckBox";
import Input from "@/components/Input/Input";
import { validateEmail, validatePassword } from "@/utils/Validation";
import { Controller, useForm } from "react-hook-form";

interface FormData {
  email: string;
  password: string;
  agreeAll: boolean;
}

function SigninForm() {
  const {
    register,
    handleSubmit,
    control,
    formState: { errors },
  } = useForm<FormData>({
    mode: "onChange",
  });

  const handleSubmitSignin = (values: FormData) => {
    console.log(values);
  };

  return (
    <form onSubmit={handleSubmit(handleSubmitSignin)} className="mt-10 flex w-full flex-col gap-5">
      <div>
        <Input
          {...register("email", {
            required: "이메일을 입력해주세요.",
            validate: value => validateEmail(value) || "올바른 이메일 형식이 아닙니다.",
          })}
          type="text"
          layout="noneBottom"
          placeholder="이메일을 입력해주세요."
          status={errors.email ? "error" : undefined}
        />

        <Input
          {...register("password", {
            required: "비밀번호를 입력해주세요.",
            validate: value =>
              validatePassword(value) || "영문, 숫자, 특수문자 포함 8자 이상 입력해주세요.",
          })}
          type="password"
          layout="noneTop"
          placeholder="비밀번호를 입력해주세요."
          status={errors.password ? "error" : undefined}
        />
        {errors.email && (
          <p className="mt-3 text-sm text-interaction-error">올바른 이메일 형식이 아닙니다.</p>
        )}
        {!errors.email && errors.password && (
          <p className="mt-3 text-sm text-interaction-error">올바른 비밀번호 형식이 아닙니다.</p>
        )}
      </div>

      <Controller
        name="agreeAll"
        control={control}
        defaultValue={false}
        render={({ field }) => (
          <CheckBox
            checked={field.value}
            onChange={() => field.onChange(!field.value)}
            label="아이디 저장"
            bold
          />
        )}
      />
      <div className="flex flex-col gap-[10px]">
        <Button type="submit" size="large" variant="fill">
          로그인
        </Button>
        <Button type="button" size="large" variant="outline">
          회원가입
        </Button>
      </div>
    </form>
  );
}

export default SigninForm;
