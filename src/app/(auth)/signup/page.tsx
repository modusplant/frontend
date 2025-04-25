"use client";

import AuthEmail from "@/app/(auth)/signup/_components/AuthEmail";
import TermsAgreement from "@/app/(auth)/signup/_components/TermsAgreement";
import { Input } from "@/components/Input/Input";
import { FormValues } from "@/types/signup";
import { validateNickname, validatePassword } from "@/utils/Validation";
import { useState } from "react";
import { useForm } from "react-hook-form";

function SignupForm() {
  const {
    register,
    handleSubmit,
    watch,
    setValue,
    formState: { errors },
  } = useForm<FormValues>({ mode: "onChange" });

  const [email, setEmail] = useState("");
  const [isVerified, setIsVerified] = useState(false);

  const onSubmit = (data: FormValues) => {
    console.log("회원가입 정보:", data);
  };

  const agreeAll = watch("agreeAll");
  const agree1 = watch("agree1");
  const agree2 = watch("agree2");

  const password = watch("password");
  const confirmPassword = watch("confirmPassword");
  const nickname = watch("nickname");

  const toggleAll = (checked: boolean) => {
    setValue("agreeAll", checked);
    setValue("agree1", checked);
    setValue("agree2", checked);
    setValue("agreeMarketing", checked);
  };

  const requiredAgreed = agree1 && agree2;
  const passwordsMatch = password === confirmPassword;
  const passwordValid = validatePassword(password ?? "");
  const nicknameValid = validateNickname(nickname ?? "");

  const canSubmit =
    isVerified && requiredAgreed && passwordsMatch && passwordValid && nicknameValid;

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-5 px-6 py-8">
      <AuthEmail
        email={email}
        onEmailChange={setEmail}
        register={register}
        onVerifySuccess={() => setIsVerified(true)}
      />

      <div className="space-y-3">
        <label className="block">
          <Input {...register("password")} type="password" placeholder="비밀번호를 입력해주세요." />
          {!passwordValid && password && (
            <p className="text-sm text-red-500">
              비밀번호는 8자 이상, 영어+숫자+특수문자를 포함해야 합니다.
            </p>
          )}
        </label>

        <label className="block">
          <Input
            {...register("confirmPassword")}
            type="password"
            placeholder="비밀번호를 한번 더 입력해주세요."
          />
          {confirmPassword && !passwordsMatch && (
            <p className="text-sm text-red-500">비밀번호가 일치하지 않습니다.</p>
          )}
        </label>

        <label className="block">
          <Input {...register("nickname")} type="text" placeholder="닉네임을 입력해주세요." />
          {!nicknameValid && nickname && (
            <p className="text-sm text-red-500">닉네임은 2자 이상 10자 이하여야 합니다.</p>
          )}
        </label>
      </div>

      <TermsAgreement registerAction={register} toggleAllAction={toggleAll} />

      <button
        type="submit"
        className={`w-full rounded py-3 ${canSubmit ? "bg-black text-white" : "bg-gray-300 text-white"}`}
        disabled={!canSubmit}
      >
        완료
      </button>
    </form>
  );
}

export default SignupForm;
