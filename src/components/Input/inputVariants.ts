// src/components/inputVariants.ts
import { VariantProps, cva } from "class-variance-authority";

export const inputVariants = cva(
  "w-full max-w-[90%] h-[47px] px-[18px] py-[17px] text-left text-[18px] mb-[16px] rounded-md border outline-none transition-all " +
    "tablet:max-w-full tablet:h-[45px] tablet:px-[18px] tablet:py-[16px] tablet:mb-[12px] tablet:text-[18px] " +
    "desktop:h-[44px] desktop:px-[18px] desktop:py-[16px] desktop:mb-[10px] desktop:text-[16px]",
  {
    variants: {
      status: {
        regular: "border-gray-400 text-black",
        active: "border-green-500 ring-1 ring-green-200",
        hover: "border-green-500",
        error: "border-red-400 text-red-600",
        warning: "border-yellow-400 text-yellow-700",
        valid: "border-green-500 text-green-700",
        disabled: "border-gray-300 text-gray-400 bg-gray-100 cursor-not-allowed",
      },
    },
    defaultVariants: {
      status: "regular",
    },
  },
);

export type InputVariantsProps = VariantProps<typeof inputVariants>;
