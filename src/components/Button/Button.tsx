import { buttonStyles } from "@/components/Button/ButtonVariants";
import { cn } from "@/utils/className";
import { VariantProps } from "class-variance-authority";

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonStyles> {
  children?: React.ReactNode;
}

const Button = ({ className, variant, size, ...props }: ButtonProps) => {
  const buttonClass = cn(className, buttonStyles({ variant: variant, size: size }));

  return <button className={buttonClass} disabled={variant === "disabled"} {...props} />;
};

export default Button;
