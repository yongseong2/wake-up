import { ReactNode } from "react";

interface Props {
  children: ReactNode;
}

export function Wrapper({ children }: Props) {
  return (
    <div className="flex min-h-screen flex-col items-center justify-between py-20 px-10">
      {children}
    </div>
  );
}
