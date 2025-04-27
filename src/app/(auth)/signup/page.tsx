"use client";

import AuthEmail from "@/app/(auth)/signup/_components/AuthEmail";
import AuthPassword from "@/app/(auth)/signup/_components/AuthPassword";
import TermsAgreement from "@/app/(auth)/signup/_components/TermsAgreement";
import { Input } from "@/components/Input/Input";
import { FormValues } from "@/types/signup";
import { validateNickname, validatePassword } from "@/utils/Validation";
import { useState } from "react";
import { FormProvider, useForm } from "react-hook-form";

function SignupForm() {
  const methods = useForm<FormValues>({ mode: "onChange" });
  const { register, handleSubmit, watch, setValue } = methods;

  const [email, setEmail] = useState("");
  const [isVerified, setIsVerified] = useState(false);

  const onSubmit = (data: FormValues) => {
    console.log("회원가입 정보:", data);
  };

  const password = watch("password");
  const confirmPassword = watch("confirmPassword");
  const nickname = watch("nickname");
  const agreeAll = watch("agreeAll");
  const agree1 = watch("agree1");
  const agree2 = watch("agree2");

  const toggleAll = (checked: boolean) => {
    setValue("agreeAll", checked);
    setValue("agree1", checked);
    setValue("agree2", checked);
    setValue("agreeMarketing", checked);
  };

  const requiredAgreed = agree1 && agree2;
  const passwordsMatch = password === confirmPassword;
  const passwordValid = validatePassword(String(password));
  const nicknameValid = validateNickname(String(nickname));

  const canSubmit =
    isVerified && requiredAgreed && passwordsMatch && passwordValid && nicknameValid;

  return (
    <FormProvider {...methods}>
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-5 px-6 py-8">
        <AuthEmail
          email={email}
          onEmailChange={setEmail}
          register={register}
          onVerifySuccess={() => setIsVerified(true)}
        />

        <AuthPassword />
        <TermsAgreement registerAction={register} toggleAllAction={toggleAll} />

        <button
          type="submit"
          className={`w-full rounded py-3 ${canSubmit ? "bg-black text-white" : "bg-gray-300 text-white"}`}
          disabled={!canSubmit}
        >
          완료
        </button>
      </form>
    </FormProvider>
  );
}

export default SignupForm;
