"use client";

import { cn } from "@/utils/className";
import Image from "next/image";
import { useState } from "react";

import { InputVariantsProps, inputVariants } from "./inputVariants";

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  status?: InputVariantsProps["status"];
  hint?: string;
  errorMsg?: string;
}

export const Input = ({
  status = "regular",
  hint,
  errorMsg,
  type,
  className,
  ...props
}: InputProps) => {
  const [showPassword, setShowPassword] = useState(false);

  const handleTogglePassword = () => {
    setShowPassword(!showPassword);
  };

  const effectiveType = type === "password" ? (showPassword ? "text" : "password") : type;

  return (
    <div className="relative mb-[16px] flex flex-col gap-[2px] tablet:mb-[12px] desktop:mb-[10px]">
      <input
        type={effectiveType}
        className={cn(inputVariants({ status }), className)}
        disabled={status === "disabled"}
        {...props}
      />
      {type === "password" && (
        <button
          className="absolute right-4 h-6 w-6 pt-3"
          type="button"
          onClick={handleTogglePassword}
        >
          {showPassword ? (
            <Image
              width={24}
              height={24}
              src="/icons/visibility_on.svg"
              alt="비밀번호 숨김 아이콘"
            />
          ) : (
            <Image
              width={24}
              height={24}
              src="/icons/visibility_off.svg"
              alt="비밀번호 숨김 아이콘"
            />
          )}
        </button>
      )}
      {status === "error" && errorMsg && (
        <p className="flex items-center gap-1 pt-2 text-sm text-red-500">
          <span>⚠</span> {errorMsg}
        </p>
      )}
      {status === "warning" && (
        <p className="flex items-center gap-1 pt-2 text-sm text-green-600">
          {hint && <span className="text-sm text-gray-500">{hint}</span>}
        </p>
      )}
      {status === "valid" && (
        <p className="flex items-center gap-1 pt-2 text-sm text-green-600">
          <span>✅</span> Valid
        </p>
      )}
    </div>
  );
};
