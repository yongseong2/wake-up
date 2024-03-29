"use client";
import { ButtonHTMLAttributes, ReactNode } from "react";

interface Props extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
  color: "gold" | "emerald" | "cream" | "skyblue";
  className?: string;
}

export function Button({ children, color, className, ...props }: Props) {
  return (
    <button
      {...props}
      className={`w-32 font-bold  border px-4 py-2 rounded-3xl hover:opacity-60 ${BUTTON_VARIANTS[color]} ${className || ""}`}
    >
      {children}
    </button>
  );
}

const BUTTON_VARIANTS = {
  gold: "bg-yellow-400 text-white",
  emerald: "bg-emerald text-white",
  cream: "bg-cream text-black",
  skyblue: "bg-skyblue text-white",
};
