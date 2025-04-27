import { VariantProps, cva } from "class-variance-authority";

export const inputVariants = cva(
  " w-full h-[60px] px-[18px] py-[17px] text-left text-[18px] border-[2px] outline-none transition-all " +
    "tablet:tablet:px-[18px] tablet:py-[16px] tablet:text-[18px] " +
    "desktop:desktop:px-[18px] desktop:py-[16px] desktop:text-[16px]",
  {
    variants: {
      status: {
        regular: "border-neutral-500 text-black hover:border-opacity-60",
        focus: "border-primary-500 hover:border-opacity-60",
        error: "border-interaction-error text-interaction-error hover:border-opacity-60",
        disabled: "border-neutral-600 text-neutral-600 bg-background cursor-not-allowed",
      },
      layout: {
        full: "rounded-md ",
        noneTop: "rounded-b-md rounded-t-none",
        noneBottom: "rounded-t-md rounded-b-none",
      },
    },
    defaultVariants: {
      status: "regular",
      layout: "full",
    },
  },
);

export type InputVariantsProps = VariantProps<typeof inputVariants>;
