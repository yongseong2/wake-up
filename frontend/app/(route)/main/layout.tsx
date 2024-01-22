"use client";
import { ReactNode } from "react";

interface Props {
  children: ReactNode;
}

export default function MainLayout({ children }: Props) {
  return <div className="bg-gray-100">{children}</div>;
}
