import { cva } from "class-variance-authority";

export const buttonStyles = cva(
  "w-full max-h-[40px] rounded-[5px] flex justify-center items-center py-[8px] text-base font-medium transition-color duration-300 ease-in-out",
  {
    variants: {
      variant: {
        fill: "bg-primary-500 text-white hover:bg-primary-500/80 active:bg-accent-100",
        outline:
          "bg-white border-2 border-primary-500 text-primary-400 hover:border-primary-300 active:border-accent-100 active:text-accent-100",
        ghost: "bg-neutral-400/40 text-primary-400 hover:bg-neutral-400/70 active:text-accent-100",
        disabled: "bg-neutral-400 text-neutral-700 cursor-not-allowed",
      },
      size: {
        small: "w-[67px] h-[27px]",
        medium: "w-[120px] h-[40px]",
        large: "w-[160px] h-[40px]",
      },
    },
    defaultVariants: {
      variant: "fill",
      size: "medium",
    },
  },
);
