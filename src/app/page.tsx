"use client";

import Footer from "@/components/Footer/Footer";
import { Input } from "@/components/Input/Input";
import { inputVariants } from "@/components/Input/inputVariants";
import clsx from "clsx";
import React, { useState } from "react";
import { twMerge } from "tailwind-merge";

const isValidEmail = (email: string) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);

export default function Home() {
  const [value, setValue] = useState("");
  const [isFocused, setIsFocused] = useState(false);
  const [isHovered, setIsHovered] = useState(false);

  // 🔍 상태 자동 판단
  const determineStatus = (): StatusType => {
    if (isFocused) return "active";
    if (!isFocused && isHovered) return "hover";
    if (value === "") return "regular";
    return isValidEmail(value) ? "valid" : "error";
  };

  type StatusType = "regular" | "hover" | "active" | "error" | "valid";

  const status = determineStatus();

  return (
    <div className="mx-auto flex w-full max-w-[500px] flex-col gap-[6px] px-5">
      <h1>메인페이지</h1>
      <div>
        <Input
          value={value}
          onChange={e => setValue(e.target.value)}
          onFocus={() => setIsFocused(true)}
          onBlur={() => setIsFocused(false)}
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
          placeholder="이메일을 입력하세요"
          className={twMerge(clsx(inputVariants({ status })))}
          type="password"
        />
      </div>

      {/* Hint or Message */}
      {status === "error" && <p className="text-sm text-red-500">올바른 이메일 형식이 아닙니다</p>}
      <Footer />
    </div>
  );
}
