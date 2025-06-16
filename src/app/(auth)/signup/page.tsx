"use client";

import AuthEmail from "@/app/(auth)/signup/_components/AuthEmail";
import AuthPassword from "@/app/(auth)/signup/_components/AuthPassword";
import TermsAgreement from "@/app/(auth)/signup/_components/TermsAgreement";
import Button from "@/components/Button/Button";
import { FormValues } from "@/types/signup";
import { validateNickname, validatePassword } from "@/utils/Validation";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import { FormProvider, useForm } from "react-hook-form";

function SignupForm() {
  const methods = useForm<FormValues>({ mode: "onChange" });
  const { register, handleSubmit, watch, setValue } = methods;

  const [email, setEmail] = useState("");
  const [isVerified, setIsVerified] = useState(false);
  const [showHelp, setShowHelp] = useState(false);
  const helpRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (helpRef.current && !helpRef.current.contains(e.target as Node)) {
        setShowHelp(false);
      }
    };

    if (showHelp) {
      document.addEventListener("mousedown", handleClickOutside);
    } else {
      document.removeEventListener("mousedown", handleClickOutside);
    }

    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [showHelp]);
  const onSubmit = (data: FormValues) => {
    console.log("회원가입 정보:", data);
  };

  const password = watch("password");
  const confirmPassword = watch("confirmPassword");
  const nickname = watch("nickname");
  const agree1 = watch("agree1");
  const agree2 = watch("agree2");

  const toggleAll = (checked: boolean) => {
    setValue("agreeAll", checked);
    setValue("agree1", checked);
    setValue("agree2", checked);
    setValue("agreeMarketing", checked);
  };

  const requiredAgreed = agree1 && agree2;
  const passwordValid = validatePassword(String(password));
  const nicknameValid = validateNickname(String(nickname));

  const canSubmit = isVerified && requiredAgreed && passwordValid && nicknameValid;

  return (
    <FormProvider {...methods}>
      <div className="mx-auto flex max-w-[535px] flex-col justify-center gap-[60px] px-5 py-20">
        <div className="flex items-center justify-between">
          <Image src="/img/modus_plant_logo.png" width={233} height={100} alt="모두의식물 로고" />
          <div ref={helpRef} className="relative">
            <div
              className="flex cursor-pointer items-center gap-[5px]"
              onClick={() => setShowHelp(prev => !prev)}
            >
              <Image src="/icons/question.svg" width={15} height={15} alt="question" />
              <p className="paragraph_medium text-neutral-600">인증이 안되시나요?</p>
            </div>

            {showHelp && (
              <div className="absolute -right-2 top-full z-10 mt-5 flex h-[320px] w-[290px] flex-col gap-[15px] rounded-[17px] border border-b-neutral-300 bg-neutral-200 p-[30px]">
                <div className="flex h-[15px] items-center justify-between">
                  <p className="text-base font-semibold text-neutral-800">도움말</p>
                  <Image
                    alt="닫기"
                    src="/icons/close.svg"
                    width={15}
                    height={15}
                    onClick={() => setShowHelp(false)}
                  />
                </div>
                <hr className="mb-[5px] bg-neutral-300" />
                <ul className="flex flex-col gap-[30px] text-[14px] text-neutral-700">
                  <li className="flex h-[30px] justify-between gap-[17px] leading-none tracking-[0.005em]">
                    <span className="flex h-[18px] w-[18px] items-center justify-center rounded-full bg-primary-500 text-white">
                      1
                    </span>
                    <span className="w-[190px]">
                      <b>스팸 메일함 또는 프로모션함</b>을 <br /> 확인해 주세요.
                    </span>
                  </li>
                  <li className="flex h-[30px] justify-between gap-[17px] leading-none tracking-[0.005em]">
                    <span className="flex h-[18px] w-[18px] items-center justify-center rounded-full bg-primary-500 text-white">
                      2
                    </span>
                    <span className="w-[190px]">
                      <b>이메일 주소</b>가 정확한지 다시 한 번 확인해 주세요.
                    </span>
                  </li>
                  <li className="flex h-[30px] justify-between gap-[17px] leading-none tracking-[0.005em]">
                    <span className="flex h-[18px] w-[18px] items-center justify-center rounded-full bg-primary-500 text-white">
                      3
                    </span>
                    <span className="w-[190px]">
                      인증 메일은 전송까지 <b>최대 1분 정도 소요</b>될 수 있어요.
                    </span>
                  </li>
                  <li className="flex h-[30px] justify-between gap-[17px] leading-none tracking-[0.005em]">
                    <span className="flex h-[18px] w-[18px] items-center justify-center rounded-full bg-primary-500 text-white">
                      4
                    </span>
                    <span className="w-[190px]">
                      그래도 도착하지 않았다면, <b>‘재요청’ 버튼</b>을 눌러 다시 받아보세요.
                    </span>
                  </li>
                </ul>
              </div>
            )}
          </div>
        </div>
        <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-10">
          <AuthEmail
            email={email}
            onEmailChange={setEmail}
            register={register}
            onVerifySuccess={() => setIsVerified(true)}
          />

          <AuthPassword />
          <TermsAgreement registerAction={register} toggleAllAction={toggleAll} />

          <Button type="submit" variant={canSubmit ? "fill" : "disabled"} size="large">
            완료
          </Button>
        </form>
      </div>
    </FormProvider>
  );
}

export default SignupForm;
