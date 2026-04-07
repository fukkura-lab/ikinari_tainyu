"use client";

import { useEffect, useRef } from "react";
import { Icon } from "@/components/icon";

const activities = [
  {
    text: "北新地ラウンジ",
    detail: "が日当35,000円でスカウト",
    icon: "send" as const,
  },
  {
    text: "北新地クラブ",
    detail: "が新しいキャストとマッチ成立",
    icon: "handshake" as const,
  },
  {
    text: "20代・未経験者",
    detail: "が3店舗からスカウト受信",
    icon: "notifications" as const,
  },
  {
    text: "北新地ラウンジ",
    detail: "が日当35,000円でスカウト",
    icon: "send" as const,
  },
  {
    text: "北新地クラブ",
    detail: "が新しいキャストとマッチ成立",
    icon: "handshake" as const,
  },
  {
    text: "20代・未経験者",
    detail: "が3店舗からスカウト受信",
    icon: "notifications" as const,
  },
];

export function ActivityTicker() {
  const containerRef = useRef<HTMLDivElement>(null);
  const innerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = containerRef.current;
    const inner = innerRef.current;
    if (!container || !inner) return;

    const halfHeight = inner.scrollHeight / 2;
    let y = 0;
    let animationId: number;

    const tick = () => {
      y += 0.5;
      if (y >= halfHeight) y = 0;
      inner.style.transform = `translateY(-${y}px)`;
      animationId = requestAnimationFrame(tick);
    };

    animationId = requestAnimationFrame(tick);

    const pause = () => cancelAnimationFrame(animationId);
    const resume = () => {
      animationId = requestAnimationFrame(tick);
    };

    container.addEventListener("mouseenter", pause);
    container.addEventListener("mouseleave", resume);

    return () => {
      cancelAnimationFrame(animationId);
      container.removeEventListener("mouseenter", pause);
      container.removeEventListener("mouseleave", resume);
    };
  }, []);

  return (
    <div
      ref={containerRef}
      className="h-[140px] overflow-hidden relative"
    >
      <div className="absolute top-0 left-0 right-0 h-6 bg-gradient-to-b from-background to-transparent z-10 pointer-events-none" />
      <div className="absolute bottom-0 left-0 right-0 h-6 bg-gradient-to-t from-background to-transparent z-10 pointer-events-none" />
      <div ref={innerRef}>
        {activities.map((item, i) => (
          <div
            key={i}
            className="bg-surface-container-lowest p-3 rounded-xl shadow-sm border-l-4 border-primary/20 mb-3"
          >
            <p className="text-[11px] leading-tight">
              <span className="font-bold">{item.text}</span>
              {item.detail}{" "}
              <Icon name={item.icon} className="text-[12px] align-middle" />
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}
