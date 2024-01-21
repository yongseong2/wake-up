"use client";
import Image from "next/image";
import { LoginButton } from "./_components/LoginButton";

export default function Login() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between py-64 bg-gold">
      <Image
        src="/icons/icon-192x192.png"
        width={192}
        height={192}
        alt="LOGO"
        placeholder="blur"
        blurDataURL={"/icons/icon-192x192.png"}
      />
      <LoginButton href="/main" />
    </main>
  );
}
