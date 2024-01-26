import { ReactNode } from "react";
import { BottomNavBar } from "./BottomNavBar";
import { TopNavBar } from "./TopNavBar";

interface Props {
  children: ReactNode;
  style?: string;
}

export function Wrapper({
  style = "justify-between py-20 px-10",
  children,
}: Props) {
  const navBarHeight = "16vh";
  return (
    <>
      <TopNavBar />
      <div
        className={`flex flex-col items-center ${style}`}
        style={{ minHeight: `calc(100vh - ${navBarHeight})` }}
      >
        {children}
      </div>
      <BottomNavBar />
    </>
  );
}
