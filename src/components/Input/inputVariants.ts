import { VariantProps, cva } from "class-variance-authority";

export const inputVariants = cva(
  "w-full h-[60px] px-[10px] py-[18px] text-[16px] border rounded-[7px] text-left outline-none transition-all",
  {
    variants: {
      status: {
        regular: "border-neutral-500 text-black hover:border-opacity-60",
        focus: "border-primary-500 hover:border-opacity-60",
        error: "border-interaction-error text-interaction-error hover:border-opacity-60",
        warning: "border-interaction-warning text-interaction-warning hover:border-opacity-60",
        success: "border-interaction-success text-interaction-success hover:border-opacity-60",
        disabled: "border-neutral-600 text-neutral-600 bg-background cursor-not-allowed",
      },
      layout: {
        full: "rounded-[7px]",
        noneTop: "rounded-b-[7px] rounded-t-none",
        noneBottom: "border border-b-0 rounded-t-[7px] rounded-b-none",
      },
    },
    defaultVariants: {
      status: "regular",
      layout: "full",
    },
  },
);

export const messageVariants = cva("", {
  variants: {
    status: {
      regular: "text-neutral-600",
      focus: "text-primary-500",
      error: "text-interaction-error",
      warning: "text-interaction-warning",
      success: "text-interaction-success",
      disabled: "text-neutral-400",
    },
  },
  defaultVariants: {
    status: "regular",
  },
});

export type InputVariantsProps = VariantProps<typeof inputVariants>;
export type MessageVariantsProps = VariantProps<typeof messageVariants>;
