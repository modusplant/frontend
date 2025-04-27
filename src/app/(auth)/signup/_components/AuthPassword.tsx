"use client";

import { Input } from "@/components/Input/Input";
import { FormValues } from "@/types/signup";
import { validateNickname, validatePassword } from "@/utils/Validation";
import { useFormContext, useWatch } from "react-hook-form";

function AuthPassword() {
  const { register } = useFormContext<FormValues>();

  const password = useWatch<FormValues>({ name: "password" });
  const confirmPassword = useWatch<FormValues>({ name: "confirmPassword" });
  const nickname = useWatch<FormValues>({ name: "nickname" });

  const passwordValid = validatePassword(String(password));
  const passwordsMatch = password === confirmPassword;
  const nicknameValid = validateNickname(String(nickname));

  return (
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
  );
}

export default AuthPassword;
