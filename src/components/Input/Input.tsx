"use client";

import { cn } from "@/utils/className";
import Image from "next/image";
import { forwardRef, useState } from "react";

import { InputVariantsProps, inputVariants, messageVariants } from "./inputVariants";

type Status = "error" | "warning" | "success" | undefined;

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  layout?: InputVariantsProps["layout"];
  status?: Status;
  label?: string;
  message?: string;
}

const Input = forwardRef<HTMLInputElement, InputProps>(function Input(
  { layout = "full", status, className, type, disabled, label, message, ...props },
  ref,
) {
  const [isFocused, setIsFocused] = useState(false);
  const [showPassword, setShowPassword] = useState(false);

  const effectiveType = type === "password" ? (showPassword ? "text" : "password") : type;

  const derivedStatus: InputVariantsProps["status"] = disabled
    ? "disabled"
    : (status ?? (isFocused ? "focus" : "regular"));

  return (
    <div className={cn("flex w-full flex-col gap-3")}>
      {label && (
        <label htmlFor={label} className="label_field -mb-[2px]">
          {label}
        </label>
      )}
      <div className="relative">
        <input
          ref={ref}
          type={effectiveType}
          className={cn(inputVariants({ status: derivedStatus, layout }), className)}
          disabled={disabled}
          onFocus={() => setIsFocused(true)}
          onBlur={() => setIsFocused(false)}
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
      {message && (
        <p className={cn("text-sm", messageVariants({ status: derivedStatus }))}>{message}</p>
      )}
    </div>
  );
});

export default Input;
