import type { Metadata } from "next";
import { Plus_Jakarta_Sans, Zen_Maru_Gothic } from "next/font/google";
import { MaterialSymbolsLink } from "@/components/material-symbols";
import "./globals.css";

const jakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
  variable: "--font-jakarta",
  display: "swap",
});

const zenMaru = Zen_Maru_Gothic({
  subsets: ["latin"],
  weight: ["400", "500", "700"],
  variable: "--font-zen-maru",
  display: "swap",
});

export const metadata: Metadata = {
  title: "いきなり体入くん｜北新地限定・逆スカウト型マッチング",
  description:
    "自撮り1枚で、今夜の北新地からオファーが届く。北新地エリア限定の逆スカウト型マッチングアプリ。",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ja" className={`${jakarta.variable} ${zenMaru.variable}`}>
      <head>
        <MaterialSymbolsLink />
      </head>
      <body className="font-sans antialiased">{children}</body>
    </html>
  );
}
