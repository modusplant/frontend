"use client";

import Input from "@/components/Input/Input";
import { FormValues } from "@/types/signup";
import { validateNickname, validatePassword } from "@/utils/Validation";
import { useFormContext, useWatch } from "react-hook-form";

function AuthPassword() {
  const { register } = useFormContext<FormValues>();

  const password = useWatch<FormValues>({ name: "password" });
  const nickname = useWatch<FormValues>({ name: "nickname" });

  return (
    <div className="flex flex-col gap-10">
      <div className="flex flex-col gap-4">
        <Input
          label="비밀번호"
          {...register("password")}
          type="password"
          placeholder="비밀번호를 입력해주세요."
          status={password && !validatePassword(String(password)) ? "error" : undefined}
          message={
            password && !validatePassword(String(password))
              ? "비밀번호는 8자 이상, 영어+숫자+특수문자를 포함해야 합니다."
              : undefined
          }
        />
      </div>
      <Input
        label="닉네임"
        {...register("nickname")}
        type="text"
        placeholder="닉네임을 입력해주세요."
        status={nickname && !validateNickname(String(nickname)) ? "error" : undefined}
        message={
          nickname && !validateNickname(String(nickname))
            ? "닉네임은 2~12자의 한글, 영문, 숫자만 가능합니다."
            : undefined
        }
      />
    </div>
  );
}

export default AuthPassword;
