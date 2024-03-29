import { ButtonHTMLAttributes } from "react";
import * as Icons from "@/app/asset/icons/iconIndex";
import Icon from "./Icon";

interface IconButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  name: keyof typeof Icons;
  size?: number;
  color?: string;
}
export default function IconButton({
  name,
  size = 24,
  color = "#666666",
  ...rest
}: IconButtonProps) {
  return (
    <button
      className="opacity-100 hover:opacity-60 transition-opacity duration-300"
      {...rest}
    >
      <Icon name={name} size={size} color={color} />
    </button>
  );
}
