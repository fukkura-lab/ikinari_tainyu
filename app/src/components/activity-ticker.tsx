"use client";

import { useState, useEffect, useCallback, useRef } from "react";
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

type Phase = "entering" | "visible" | "exiting";

export function ActivityTicker() {
  const [page, setPage] = useState(0);
  const [phase, setPhase] = useState<Phase>("entering");
  const [itemStates, setItemStates] = useState([false, false, false]);
  const timerRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  const showItems = useCallback(() => {
    setPhase("entering");
    setItemStates([false, false, false]);

    setTimeout(() => setItemStates((s) => [true, s[1], s[2]]), 100);
    setTimeout(() => setItemStates((s) => [s[0], true, s[2]]), 300);
    setTimeout(() => {
      setItemStates((s) => [s[0], s[1], true]);
      setPhase("visible");
    }, 500);
  }, []);

  useEffect(() => {
    showItems();
  }, [page, showItems]);

  useEffect(() => {
    const interval = setInterval(() => {
      // 上にフェードアウト開始
      setPhase("exiting");
      setItemStates([false, false, false]);

      timerRef.current = setTimeout(() => {
        setPage((p) => (p + 1) % activities.length);
      }, 500);
    }, 4000);

    return () => {
      clearInterval(interval);
      if (timerRef.current) clearTimeout(timerRef.current);
    };
  }, []);

  const getItem = (index: number) => activities[(page + index) % activities.length];

  const getStyle = (visible: boolean): React.CSSProperties => {
    if (visible) {
      return { opacity: 1, transform: "translateX(0) translateY(0)" };
    }
    if (phase === "exiting") {
      // 上にスライド+フェードアウト
      return { opacity: 0, transform: "translateX(0) translateY(-20px)" };
    }
    // 右からスライドイン待ち
    return { opacity: 0, transform: "translateX(40px) translateY(12px)" };
  };

  return (
    <div className="space-y-3">
      {[0, 1, 2].map((i) => {
        const item = getItem(i);
        return (
          <div
            key={`${page}-${i}`}
            className="transition-all duration-500 ease-out"
            style={getStyle(itemStates[i])}
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
