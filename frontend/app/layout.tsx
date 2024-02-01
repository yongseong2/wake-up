import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ReduxProvider } from "./_store/provider";
import Script from "next/script";
const inter = Inter({ subsets: ["latin"] });

declare global {
  interface Window {
    Kakao: any;
  }
}

export const metadata: Metadata = {
  title: "Wake Up",
  description: "기상 벌금 내기 어플리케이션입니다",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko">
      <link rel="manifest" href="/manifest.json" />
      <body className={inter.className}>
        <ReduxProvider>{children}</ReduxProvider>
      </body>
      <Script src="https://developers.kakao.com/sdk/js/kakao.js" />
    </html>
  );
}
