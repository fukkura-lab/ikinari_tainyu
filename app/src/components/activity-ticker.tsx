"use client";

import { useState, useEffect, useCallback } from "react";
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
];

export function ActivityTicker() {
  const [page, setPage] = useState(0);
  const [itemStates, setItemStates] = useState([false, false, false]);

  const showItems = useCallback(() => {
    setItemStates([false, false, false]);

    // 各アイテムを順番にスライドイン
    setTimeout(() => setItemStates((s) => [true, s[1], s[2]]), 100);
    setTimeout(() => setItemStates((s) => [s[0], true, s[2]]), 300);
    setTimeout(() => setItemStates((s) => [s[0], s[1], true]), 500);
  }, []);

  useEffect(() => {
    showItems();
  }, [page, showItems]);

  useEffect(() => {
    const interval = setInterval(() => {
      // 全アイテムを上にスライドアウト
      setItemStates([false, false, false]);
      // 次のページへ切り替え
      setTimeout(() => {
        setPage((p) => (p + 1) % activities.length);
      }, 400);
    }, 4000);

    return () => clearInterval(interval);
  }, []);

  // 3件を現在のページオフセットからローテーション
  const getItem = (index: number) => activities[(page + index) % activities.length];

  return (
    <div className="space-y-3 overflow-hidden">
      {[0, 1, 2].map((i) => {
        const item = getItem(i);
        return (
          <div
            key={`${page}-${i}`}
            className="transition-all duration-500 ease-out"
            style={{
              opacity: itemStates[i] ? 1 : 0,
              transform: itemStates[i]
                ? "translateX(0) translateY(0)"
                : "translateX(40px) translateY(12px)",
            }}
          >
            <div className="bg-surface-container-lowest p-3 rounded-xl shadow-sm border-l-4 border-primary/20">
              <p className="text-[11px] leading-tight">
                <span className="font-bold">{item.text}</span>
                {item.detail}{" "}
                <Icon name={item.icon} className="text-[12px] align-middle" />
              </p>
            </div>
          </div>
        );
      })}
    </div>
  );
}
