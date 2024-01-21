"use client";

import { useRouter } from "next/navigation";

interface Props {
  href: string;
}

export function LoginButton({ href }: Props) {
  const router = useRouter();
  return (
    <button
      onClick={() => {
        router.push(href);
      }}
      className="font-bold bg-yellow-400 text-black border border-black border-solid px-4 py-2 rounded"
    >
      로그인
    </button>
  );
}
