"use client";

import { TermsAgreementProps } from "@/types/signup";

export default function TermsAgreement({ registerAction, toggleAllAction }: TermsAgreementProps) {
  return (
    <div className="mt-4 space-y-2">
      <label className="flex items-center pb-4">
        <input
          type="checkbox"
          {...registerAction("agreeAll")}
          onChange={e => toggleAllAction(e.target.checked)}
          className="mr-2 h-6 w-6"
        />
        <span className="font-semibold">모든 약관 및 정책에 동의합니다.</span>
      </label>
      <hr />
      <label className="flex items-center justify-between pt-[22.5px]">
        <span className="flex items-center">
          <input type="checkbox" {...registerAction("agree1")} className="mr-2 h-6 w-6" />
          <p className="paragraph_medium text-neutral-600">
            [필수] 이용약관을 확인했으며, 동의합니다.
          </p>
        </span>
        <span className="text-gray-600">{">"}</span>
      </label>
      <label className="flex items-center justify-between">
        <span className="flex items-center">
          <input type="checkbox" {...registerAction("agree2")} className="mr-2 h-6 w-6" />
          <p className="paragraph_medium text-neutral-600">
            [필수] 이용약관을 확인했으며, 동의합니다.
          </p>
        </span>
        <span className="text-gray-600">{">"}</span>
      </label>
      <label className="flex items-center justify-between">
        <span className="flex items-center">
          <input type="checkbox" {...registerAction("agreeMarketing")} className="mr-2 h-6 w-6" />
          <p className="paragraph_medium text-neutral-600">[선택] 마케팅 정보 수신에 동의합니다.</p>
        </span>
        <span className="text-gray-600">{">"}</span>
      </label>
    </div>
  );
}
