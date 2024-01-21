"use client";
import { ButtonHTMLAttributes, ReactNode } from "react";

interface Props extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
  color: "gold" | "emerald" | "cream" | "skyblue";
}

export function Button({ children, color, ...props }: Props) {
  return (
    <button
      {...props}
      className={` w-32 font-bold text-white border px-4 py-2 rounded-3xl hover:opacity-60 ${BUTTON_VARIANTS[color]}`}
    >
      {children}
    </button>
  );
}

const BUTTON_VARIANTS = {
  gold: "bg-yellow-400",
  emerald: "bg-emerald",
  cream: "bg-cream",
  skyblue: "bg-skyblue",
};
