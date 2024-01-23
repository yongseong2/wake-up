import { ReactNode } from "react";

interface Props {
  children: ReactNode;
  style?: string;
}

export function Wrapper({
  style = "justify-between py-20 px-10",
  children,
}: Props) {
  return (
    <div className={`flex min-h-screen flex-col items-center ${style}`}>
      {children}
    </div>
  );
}
