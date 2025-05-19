import { cva } from "class-variance-authority";

export const buttonStyles = cva(
  "h-[60px] rounded-[7px] flex justify-center items-center transition-color duration-300 ease-in-out",
  {
    variants: {
      variant: {
        fill: "bg-primary-500 text-white hover:bg-primary-500/80 active:bg-accent-200",
        outline:
          "bg-white border-2 border-primary-500 text-primary-500 hover:border-primary-300 active:border-accent-200 active:text-accent-200",
        ghost: "bg-neutral-400/40 text-primary-400 hover:bg-neutral-400/70 active:text-accent-200",
        disabled: "bg-neutral-500 text-neutral-700 cursor-not-allowed",
      },
      size: {
        default: "w-[120px] px-[14px] label_button_default",
        small: "w-[100px] px-[10px] label_button_small",
        large: "w-full px-5 label_button_large",
      },
    },
    defaultVariants: {
      variant: "fill",
      size: "default",
    },
  },
);
