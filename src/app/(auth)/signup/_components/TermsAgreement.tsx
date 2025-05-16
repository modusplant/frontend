"use client";

import CheckBox from "@/components/CheckBox/CheckBox";
import { TermsAgreementProps } from "@/types/signup";
import { Controller, useFormContext } from "react-hook-form";

interface SingleCheckProps {
  name: "agree1" | "agree2" | "agreeMarketing";
  label: string;
}

function AgreementCheckItem({ name, label }: SingleCheckProps) {
  const { control } = useFormContext();
  return (
    <div className="flex items-center justify-between">
      <Controller
        name={name}
        control={control}
        render={({ field }) => (
          <CheckBox
            checked={field.value}
            onChange={() => field.onChange(!field.value)}
            label={label}
          />
        )}
      />
      <span className="text-gray-600">{">"}</span>
    </div>
  );
}

export default function TermsAgreement({ toggleAllAction }: TermsAgreementProps) {
  const { control } = useFormContext();

  return (
    <div className="flex flex-col gap-4">
      <Controller
        name="agreeAll"
        control={control}
        render={({ field }) => (
          <CheckBox
            checked={field.value}
            onChange={() => {
              field.onChange(!field.value);
              toggleAllAction(!field.value);
            }}
            label="모든 약관 및 정책에 동의합니다."
            bold
          />
        )}
      />

      <hr />

      <div className="flex flex-col gap-4 pt-[5px]">
        <AgreementCheckItem name="agree1" label="[필수] 이용약관을 확인했으며, 동의합니다." />
        <AgreementCheckItem
          name="agree2"
          label="[필수] 개인정보 처리방침을 확인했으며, 동의합니다."
        />
        <AgreementCheckItem name="agreeMarketing" label="[선택] 마케팅 정보 수신에 동의합니다." />
      </div>
    </div>
  );
}
