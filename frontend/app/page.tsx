"use client";
import Image from "next/image";
import { LoginButton } from "./_components/LoginButton";
import { useRouter } from "next/navigation";
import { useAppSelector } from "./_store/store";
import { useEffect } from "react";

export default function Login() {
  const router = useRouter();
  const isLogined = useAppSelector(state => state.user.isLogined);

  useEffect(() => {
    if (isLogined) {
      router.push("/main");
    }
  }, [isLogined, router]);

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
      <div className="flex flex-wrap justify-center gap-2">
        <LoginButton password="1234" href="/main" profile="성용" />
        <LoginButton password="1234" href="/main" profile="다정" />
        <LoginButton password="1234" href="/main" profile="승윤" />
        <LoginButton password="1234" href="/main" profile="연우" />
        <LoginButton password="1234" href="/main" profile="동현" />
        <LoginButton password="1234" href="/main" profile="예지" />
      </div>
    </main>
  );
}
