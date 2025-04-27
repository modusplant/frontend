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
    <div className="flex flex-col gap-10">
      <div className="flex flex-col gap-4">
        <label className="paragraph_medium mb-[-6px]">비밀번호</label>
        <div className="flex flex-col gap-[10px]">
          <Input {...register("password")} type="password" placeholder="비밀번호를 입력해주세요." />
          {!passwordValid && password && (
            <p className="interaction-error text-sm">
              비밀번호는 8자 이상, 영어+숫자+특수문자를 포함해야 합니다.
            </p>
          )}
        </div>
        <div className="flex flex-col gap-[10px]">
          <Input
            {...register("confirmPassword")}
            type="password"
            placeholder="비밀번호를 한번 더 입력해주세요."
          />
          {confirmPassword && !passwordsMatch && (
            <p className="interaction-error text-sm">비밀번호가 서로 일치하지 않습니다.</p>
          )}
          {passwordsMatch && passwordValid && password && (
            <p className="interaction-success text-sm">사용 가능한 비밀번호 입니다.</p>
          )}
        </div>
      </div>
      <div className="flex flex-col gap-[10px]">
        <label className="paragraph_medium">닉네임</label>
        <Input {...register("nickname")} type="text" placeholder="닉네임을 입력해주세요." />
      </div>
    </div>
  );
}

export default AuthPassword;
