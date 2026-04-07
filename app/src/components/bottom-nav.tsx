"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Icon } from "./icon";

const navItems = [
  { href: "/dashboard", icon: "home", label: "ホーム" },
  { href: "/scouts", icon: "mail", label: "スカウト" },
  { href: "/messages", icon: "chat_bubble", label: "メッセージ" },
  { href: "/mypage", icon: "person", label: "マイページ" },
];

export function BottomNav() {
  const pathname = usePathname();

  return (
    <nav className="fixed bottom-0 left-0 w-full flex justify-around items-center px-4 pt-2 pb-8 bg-surface/80 glass-header rounded-t-[2.5rem] z-50 shadow-[0_-12px_32px_rgba(170,44,50,0.06)] border-t border-outline-variant/10">
      {navItems.map((item) => {
        const isActive = pathname.startsWith(item.href);
        return (
          <Link
            key={item.href}
            href={item.href}
            className={`relative flex flex-col items-center justify-center p-2 transition-all duration-300 ease-out active:scale-90 ${
              isActive
                ? "text-primary scale-110"
                : "text-stone-400 hover:text-primary"
            }`}
          >
            {/* Active background pill */}
            <span
              className={`absolute inset-0 rounded-2xl bg-white/50 transition-all duration-300 ease-out ${
                isActive
                  ? "opacity-100 scale-100"
                  : "opacity-0 scale-75"
              }`}
            />
            {/* Icon with bounce on active */}
            <span
              className={`relative z-10 transition-transform duration-300 ${
                isActive ? "animate-[nav-bounce_0.4s_ease-out]" : ""
              }`}
            >
              <Icon
                name={item.icon}
                filled={isActive}
                className="text-2xl"
              />
            </span>
            <span
              className={`relative z-10 font-headline text-[10px] font-bold mt-1 transition-all duration-300 ${
                isActive ? "opacity-100" : "opacity-70"
              }`}
            >
              {item.label}
            </span>
          </Link>
        );
      })}
    </nav>
  );
}
