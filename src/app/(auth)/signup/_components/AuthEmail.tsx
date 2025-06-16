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

  const [emailError, setEmailError] = useState<string | undefined>(undefined);
  const [codeError, setCodeError] = useState<string | undefined>(undefined);

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
    if (sent && timeLeft > 0 && !verified) {
      const timer = setInterval(() => {
        setTimeLeft(prev => prev - 1);
      }, 1000);
      return () => clearInterval(timer);
    }
  }, [sent, timeLeft, verified]);

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
      setEmailError(undefined);
    }
  };

  const handleCodeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value.toUpperCase();

    if (/^[A-Z0-9]*$/.test(value) && value.length <= 6) {
      setCode(value);

      if (!value || !validateVerificationCode(value)) {
        setCodeError("6자리 영문+숫자 코드를 입력해주세요.");
      } else {
        setCodeError(undefined);
      }
    }
  };

  const bottomMessage = (() => {
    if (!sent && emailError)
      return <p className="mt-1 text-sm text-interaction-error">{emailError}</p>;
    if (codeError) return <p className="mt-1 text-sm text-interaction-error">{codeError}</p>;
    if (!verified && sent && !code)
      return <p className="mt-1 text-sm text-gray-500">요청 시간 {formatTime(timeLeft)}</p>;
    if (verified)
      return (
        <p className="mt-1 pl-[14px] text-sm text-interaction-success">인증이 완료되었습니다.</p>
      );
    return null;
  })();

  const emailStatus = emailError ? "error" : verified ? "success" : undefined;
  const codeStatus = codeError ? "error" : verified ? "success" : undefined;

  return (
    <div className="flex w-full flex-col gap-3">
      <div className="mb-1 flex w-full gap-[15px]">
        <div className="flex-grow">
          <Input
            {...register("email")}
            label="이메일"
            type="email"
            placeholder="이메일을 입력해주세요."
            onChange={handleEmailChange}
            disabled={verified}
            status={emailStatus}
          />
        </div>
        <Button
          size="small"
          variant={
            verified ? "disabled" : emailError || !email ? "disabled" : sent ? "outline" : "fill"
          }
          onClick={handleSendCode}
          disabled={verified || !!emailError}
          className="mt-[32px]"
        >
          {sent ? "재요청" : "인증요청"}
        </Button>
      </div>

      {sent && (
        <div className="flex flex-col gap-[10px]">
          <div className="flex w-full gap-[15px]">
            <div className="flex-grow">
              <Input
                type="text"
                placeholder="인증 코드를 입력해주세요."
                value={code}
                onChange={handleCodeChange}
                disabled={verified}
                status={codeStatus}
              />
            </div>
            <Button
              size="small"
              variant={!codeError && code && !verified ? "fill" : "disabled"}
              onClick={handleVerifyCode}
              disabled={!!codeError || !code || verified}
            >
              확인
            </Button>
          </div>
        </div>
      )}
      <div className="pl-1">{bottomMessage}</div>
    </div>
  );
}

export default AuthEmail;
