// src/components/inputVariants.ts
import { VariantProps, cva } from "class-variance-authority";

export const inputVariants = cva(
  "w-full h-[47px] px-[18px] py-[17px] text-left text-[18px]  rounded-md border-[2px] outline-none transition-all " +
    "tablet:max-w-full tablet:h-[45px] tablet:px-[18px] tablet:py-[16px]  tablet:text-[18px] " +
    "desktop:h-[44px] desktop:px-[18px] desktop:py-[16px] desktop:text-[16px]",
  {
    variants: {
      status: {
        regular: "border-neutral-900 text-black hover:border-opacity-60",
        active:
          "border-primary-600 shadow-[2px_2px_6px_0px_rgba(67,178,137,0.3)] hover:border-opacity-60",
        error:
          "border-interaction-error text-interaction-error shadow-[2px_2px_6px_0px_rgba(221,66,88,0.3)] hover:border-opacity-60",
        warning: "border-interaction-warning text-interaction-warning hover:border-opacity-60",
        valid:
          "border-interaction-success shadow-[2px_2px_6px_0px_rgba(114,200,59,0.3)] hover:border-opacity-60",
        disabled:
          "border-neutral-600 text-neutral-600 bg-background cursor-not-allowed hover:border-opacity-60",
      },
    },
    defaultVariants: {
      status: "regular",
    },
  },
);

export type InputVariantsProps = VariantProps<typeof inputVariants>;
