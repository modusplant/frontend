"use client";

import { cn } from "@/utils/className";
import Image from "next/image";
import { useState } from "react";

import { InputVariantsProps, inputVariants } from "./inputVariants";

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  status?: InputVariantsProps["status"];
  layout?: InputVariantsProps["layout"];
}

export const Input = ({
  status = "regular",
  layout = "full",
  className,
  type,
  disabled,
  ...props
}: InputProps) => {
  const [showPassword, setShowPassword] = useState(false);

  const effectiveType = type === "password" ? (showPassword ? "text" : "password") : type;

  return (
    <div className={cn("relative flex w-full flex-col gap-[2px]")}>
      <input
        type={effectiveType}
        className={cn(inputVariants({ status, layout }), className)}
        disabled={disabled}
        {...props}
      />

      {type === "password" && (
        <button
          className="absolute right-4 top-1/2 -translate-y-1/2"
          type="button"
          onClick={() => setShowPassword(prev => !prev)}
        >
          <Image
            width={24}
            height={24}
            src={showPassword ? "/icons/visibility_on.svg" : "/icons/visibility_off.svg"}
            alt="비밀번호 보기 토글 아이콘"
          />
        </button>
      )}
    </div>
  );
};
