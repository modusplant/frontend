import { ReactNode } from "react";

export default function AuthLayout({ children }: { children: ReactNode }) {
  return <div className="h-dvh w-dvw bg-background">{children}</div>;
}
