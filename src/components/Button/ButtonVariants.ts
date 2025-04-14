import { cva } from "class-variance-authority";

export const buttonStyles = cva(
  "h-[40px] rounded-[5px] flex justify-center items-center text-base font-medium transition-color px-[8px] duration-300 ease-in-out",
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
        default: "w-full",
        small: "w-[67px]",
        medium: "w-[120px]",
        large: "w-[160px]",
      },
    },
    defaultVariants: {
      variant: "fill",
      size: "default",
    },
  },
);
