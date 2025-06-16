"use client";

import React from "react";

interface CheckBoxProps {
  checked: boolean;
  onChange: () => void;
  label: string;
  bold?: boolean;
}

export default function CheckBox({ checked, onChange, label, bold }: CheckBoxProps) {
  return (
    <label className="flex cursor-pointer select-none items-center gap-3" onClick={onChange}>
      <div
        className={`flex h-6 w-6 items-center justify-center rounded-md border-2 transition-colors ${checked ? "border-green-500 bg-green-500" : "border-neutral-300 bg-white"}`}
      >
        {checked && (
          <svg
            className="h-4 w-4 text-white"
            fill="none"
            stroke="currentColor"
            strokeWidth="3"
            viewBox="0 0 24 24"
          >
            <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
          </svg>
        )}
      </div>
      <span className={`${bold ? "font-bold text-neutral-900" : "text-neutral-700"}`}>{label}</span>
    </label>
  );
}
