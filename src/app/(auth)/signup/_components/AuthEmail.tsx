"use client";

import Button from "@/components/Button/Button";
import Input from "@/components/Input/Input";
import { EmailSectionProps } from "@/types/signup";
import { validateEmail, validateVerificationCode } from "@/utils/Validation";
import { useEffect, useState } from "react";

function AuthEmail({ email, onEmailChange, register, onVerifySuccess }: EmailSectionProps) {
  const [sent, setSent] = useState(false);
  const [code, setCode] = useState("");
  const [timeLeft, setTimeLeft] = useState(180);
  const [verified, setVerified] = useState(false);

  const [emailError, setEmailError] = useState("");
  const [codeError, setCodeError] = useState("");

  const handleSendCode = async () => {
    if (!email || emailError) return;
    try {
      console.log("인증요청!");
      setSent(true);
      setTimeLeft(180);
    } catch (e) {
      alert("이메일 인증 요청 실패");
    }
  };

  const handleVerifyCode = async () => {
    if (codeError) return;
    console.log("인증성공");
    setVerified(true);
    onVerifySuccess();
  };

  useEffect(() => {
    if (sent && timeLeft > 0) {
      const timer = setInterval(() => {
        setTimeLeft(prev => prev - 1);
      }, 1000);
      return () => clearInterval(timer);
    }
  }, [sent, timeLeft]);

  const formatTime = (seconds: number) => {
    const m = Math.floor(seconds / 60);
    const s = seconds % 60;
    return `${m}:${s < 10 ? `0${s}` : s}`;
  };

  const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    onEmailChange(value);

    if (!value) {
      setEmailError("이메일을 입력해주세요.");
    } else if (!validateEmail(value)) {
      setEmailError("올바른 이메일 형식이 아닙니다.");
    } else {
      setEmailError("");
    }
  };

  const handleCodeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    if (/^\d*$/.test(value) && value.length <= 6) {
      setCode(value);

      if (!value) {
        setCodeError("인증 코드를 입력해주세요.");
      } else if (!validateVerificationCode(value)) {
        setCodeError("6자리 숫자 코드를 입력해주세요.");
      } else {
        setCodeError("");
      }
    }
  };

  return (
    <div className="label_button_default flex w-full flex-col gap-4">
      <div className="flex w-full flex-col gap-[10px]">
        <label className="paragraph_medium">이메일</label>
        <div className="flex w-full gap-[15px]">
          <div className="flex-grow">
            <Input
              {...register("email")}
              type="email"
              placeholder="이메일을 입력해주세요."
              onChange={handleEmailChange}
              disabled={verified}
            />
          </div>
          <Button
            size="medium"
            variant={emailError || !email ? "disabled" : "fill"}
            onClick={handleSendCode}
            disabled={verified || !!emailError}
          >
            인증요청
          </Button>
        </div>
      </div>

      {sent && (
        <div>
          <div className="flex w-full gap-[15px]">
            <div className="flex-grow">
              <Input
                type="text"
                placeholder="인증 코드를 입력해주세요."
                value={code}
                onChange={handleCodeChange}
                disabled={verified}
              />
            </div>
            <Button
              size="medium"
              variant={emailError || !codeError ? "disabled" : "fill"}
              onClick={handleVerifyCode}
              disabled={!!codeError}
            >
              확인
            </Button>
          </div>
          {sent && !verified && (
            <p className="text-sm text-gray-500">요청 시간 {formatTime(timeLeft)}</p>
          )}
        </div>
      )}
      {emailError && <p className="interaction-error text-sm">{emailError}</p>}
      {codeError && <p className="interaction-error text-sm">{codeError}</p>}
      {verified && <p className="interaction-success text-sm">✔ 인증이 완료되었습니다.</p>}
    </div>
  );
}

export default AuthEmail;
