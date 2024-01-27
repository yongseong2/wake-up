import { ButtonHTMLAttributes } from "react";
import * as Icons from "@/app/_asset/icons/iconIndex";
import Icon from "./Icon";

interface IconButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  name: keyof typeof Icons;
  size?: number;
  color?: string;
  className?: string;
}
export default function IconButton({
  name,
  size = 24,
  color = "#666666",
  className = "",
  ...rest
}: IconButtonProps) {
  return (
    <button
      className={`hover:opacity-60 transition-opacity duration-300 ${className}`}
      {...rest}
    >
      <Icon name={name} size={size} color={color} />
    </button>
  );
}
