"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Icon } from "@/components/icon";
import { TopAppBar } from "@/components/top-app-bar";

const SORT_OPTIONS = ["おすすめ順", "新着順", "日当が高い順", "日当が低い順", "締切が近い順"];
const GENRE_OPTIONS = ["すべて", "クラブ", "ラウンジ", "バー", "スナック"];
const RATE_OPTIONS = ["指定なし", "¥25,000〜", "¥30,000〜", "¥35,000〜", "¥40,000〜"];

type DropdownType = "sort" | "genre" | "rate" | null;

export default function ScoutsPage() {
  const [openDropdown, setOpenDropdown] = useState<DropdownType>(null);
  const [sort, setSort] = useState("おすすめ順");
  const [genre, setGenre] = useState("すべて");
  const [rate, setRate] = useState("¥30,000〜");

  const toggle = (type: DropdownType) => {
    setOpenDropdown(openDropdown === type ? null : type);
  };

  const selectOption = (type: DropdownType, value: string) => {
    if (type === "sort") setSort(value);
    if (type === "genre") setGenre(value);
    if (type === "rate") setRate(value);
    setOpenDropdown(null);
  };

  return (
    <>
      <TopAppBar status="active" />

      {/* Backdrop to close dropdowns */}
      {openDropdown && (
        <div
          className="fixed inset-0 z-30"
          onClick={() => setOpenDropdown(null)}
        />
      )}

      <div className="px-6 max-w-md mx-auto flex flex-col gap-6">
        {/* Page Title & Sort */}
        <div className="px-2 mb-3">
          <p className="text-on-surface-variant text-[10px] font-bold mb-1 uppercase tracking-widest">
            Newest Offers
          </p>
          <div className="flex items-center justify-between">
            <h2 className="text-xl font-black whitespace-nowrap">
              届いたスカウト{" "}
              <span className="text-primary text-2xl font-black">12</span>
              <span className="text-xs font-bold text-on-surface-variant ml-0.5">
                件
              </span>
            </h2>
            <div className="relative shrink-0 ml-3">
              <button
                onClick={() => toggle("sort")}
                className="flex items-center gap-1 text-on-surface-variant px-3 py-1.5 bg-white rounded-xl shadow-sm border border-outline-variant/10 active:scale-95 transition-transform"
              >
                <Icon name="tune" className="text-primary" size="14px" />
                <span className="text-[10px] font-black">{sort}</span>
              </button>
              {openDropdown === "sort" && (
                <div className="absolute right-0 top-full mt-1 bg-white rounded-lg shadow-lg border border-outline-variant/10 py-1 z-40 overflow-hidden min-w-[140px] animate-[fade-in-up_0.15s_ease-out]">
                  {SORT_OPTIONS.map((opt) => (
                    <button
                      key={opt}
                      onClick={() => selectOption("sort", opt)}
                      className={`w-full text-left px-4 py-2.5 text-xs font-bold transition-colors ${
                        sort === opt
                          ? "text-primary bg-primary/5"
                          : "text-on-surface hover:bg-surface-container-low"
                      }`}
                    >
                      {opt}
                    </button>
                  ))}
                </div>
              )}
            </div>
          </div>
        </div>

        {/* Filter Chips Section */}
        <section className="space-y-2 mb-4">
          <div className="flex gap-1.5 overflow-x-auto no-scrollbar pb-1">
            <button className="whitespace-nowrap px-3 py-1.5 rounded-full border-2 border-primary bg-primary/5 text-primary font-bold text-xs shadow-sm active:scale-95 transition-transform">
              今日行ける
            </button>
            <button className="whitespace-nowrap px-3 py-1.5 rounded-full border-2 border-outline-variant/20 bg-white text-on-surface-variant font-bold text-xs shadow-sm active:scale-95 transition-transform">
              未経験OK
            </button>
            <button className="whitespace-nowrap px-3 py-1.5 rounded-full border-2 border-outline-variant/20 bg-white text-on-surface-variant font-bold text-xs shadow-sm active:scale-95 transition-transform">
              終電OK
            </button>
          </div>
          <div className="flex gap-1.5">
            {/* Genre dropdown */}
            <div className="relative">
              <button
                onClick={() => toggle("genre")}
                className={`flex items-center gap-0.5 whitespace-nowrap px-3 py-1.5 rounded-xl border text-[10px] font-bold shadow-sm active:scale-95 transition-transform ${
                  genre !== "すべて"
                    ? "bg-primary/5 border-primary/30 text-primary"
                    : "bg-white border-outline-variant/10 text-on-surface-variant"
                }`}
              >
                ジャンル：{genre}
                <Icon
                  name="expand_more"
                  size="12px"
                  className={`transition-transform ${openDropdown === "genre" ? "rotate-180" : ""}`}
                />
              </button>
              {openDropdown === "genre" && (
                <div className="absolute left-0 top-full mt-1 bg-white rounded-lg shadow-lg border border-outline-variant/10 py-1 z-40 overflow-hidden min-w-[120px] animate-[fade-in-up_0.15s_ease-out]">
                  {GENRE_OPTIONS.map((opt) => (
                    <button
                      key={opt}
                      onClick={() => selectOption("genre", opt)}
                      className={`w-full text-left px-4 py-2.5 text-xs font-bold transition-colors ${
                        genre === opt
                          ? "text-primary bg-primary/5"
                          : "text-on-surface hover:bg-surface-container-low"
                      }`}
                    >
                      {opt}
                    </button>
                  ))}
                </div>
              )}
            </div>

            {/* Rate dropdown */}
            <div className="relative">
              <button
                onClick={() => toggle("rate")}
                className={`flex items-center gap-0.5 whitespace-nowrap px-3 py-1.5 rounded-xl border text-[10px] font-bold shadow-sm active:scale-95 transition-transform ${
                  rate !== "指定なし"
                    ? "bg-primary/5 border-primary/30 text-primary"
                    : "bg-white border-outline-variant/10 text-on-surface-variant"
                }`}
              >
                日当：{rate}
                <Icon
                  name="expand_more"
                  size="12px"
                  className={`transition-transform ${openDropdown === "rate" ? "rotate-180" : ""}`}
                />
              </button>
              {openDropdown === "rate" && (
                <div className="absolute left-0 top-full mt-1 bg-white rounded-lg shadow-lg border border-outline-variant/10 py-1 z-40 overflow-hidden min-w-[120px] animate-[fade-in-up_0.15s_ease-out]">
                  {RATE_OPTIONS.map((opt) => (
                    <button
                      key={opt}
                      onClick={() => selectOption("rate", opt)}
                      className={`w-full text-left px-4 py-2.5 text-xs font-bold transition-colors ${
                        rate === opt
                          ? "text-primary bg-primary/5"
                          : "text-on-surface hover:bg-surface-container-low"
                      }`}
                    >
                      {opt}
                    </button>
                  ))}
                </div>
              )}
            </div>
          </div>
        </section>

        {/* Scout Card List */}
        <div className="space-y-6">
          {/* High Value Card */}
          <Link href="/scouts/1" className="block">
            <article className="relative bg-white rounded-3xl overflow-hidden border-2 border-primary p-6 shadow-[0_10px_30px_rgba(170,44,50,0.1)] transition-transform active:scale-[0.98]">
              <div className="absolute top-0 left-0 bg-primary text-white text-[10px] px-4 py-1.5 rounded-br-2xl font-black tracking-wider">
                NEW
              </div>
              <div className="absolute top-0 right-0 bg-primary/10 text-primary text-[10px] px-4 py-1.5 rounded-bl-2xl font-black animate-pulse">
                本日あと2枠
              </div>

              <div className="flex justify-between items-start mb-4 mt-4">
                <div className="space-y-1">
                  <div className="flex items-center gap-2">
                    <span className="text-4xl font-black text-primary tracking-tighter">
                      ¥40,000
                    </span>
                    <span className="text-[10px] font-black bg-primary/10 text-primary px-2 py-1 rounded-lg">
                      本日OK
                    </span>
                  </div>
                  <div className="flex gap-1.5">
                    <span className="text-[10px] font-black text-on-surface-variant px-3 py-1.5 bg-surface-container rounded-full">
                      終電OK
                    </span>
                    <span className="text-[10px] font-black text-on-surface-variant px-3 py-1.5 bg-surface-container rounded-full">
                      送迎あり
                    </span>
                  </div>
                </div>
                <div className="w-16 h-16 rounded-2xl overflow-hidden shadow-md border-2 border-white">
                  <Image
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuBNFeepQGAwL-NX42nqnimMIFvcS3yEruxjVIvK8CVXmx4aCKpezqHdXEwALA7O2C1_ZlaiYi3srX59CaiKSE0b-TAlDcbog9ragagog1wo6kqfxTYkA3NmoqIFAGLLeYJUj3IYjbIfaeg3Yj2KtQXqIz8PH4DRctA9e5rq0ir9F_jupl6qC1pzwVXlnRbIi0P2c-LFl495huuf96CAo7nrLiEnnnAHLBkuuSb91w-E_DbnDvexW3SyCWw43xXgHjpLirCoxCEZQ7Y"
                    alt="CLUB Luminous"
                    width={64}
                    height={64}
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>

              <div className="space-y-2 mb-6">
                <h3 className="text-lg font-black leading-tight">
                  CLUB Luminous
                </h3>
                <p className="text-sm text-on-surface-variant font-bold leading-relaxed">
                  今夜は団体様のご予約があるため、急遽追加メンバーを募集中です！
                  <br />
                  未経験の方も大歓迎。まずは体入からOK ✨
                </p>
              </div>

              <button className="w-full py-4 bg-primary text-white rounded-2xl font-black text-base shadow-lg shadow-primary/20 flex items-center justify-center gap-2 active:scale-[0.98] transition-transform">
                詳細を見る・返信する
                <Icon name="chevron_right" size="18px" />
              </button>
            </article>
          </Link>

          {/* Regular Cards */}
          {[
            {
              shop: "Lounge Fleur",
              rate: "¥32,500",
              tags: ["衣装貸出", "私服OK"],
              time: "4時間前",
              image:
                "https://lh3.googleusercontent.com/aida-public/AB6AXuC6kus5oDiXnBo726B4tr9bS0uahb5j7mLv1fTeydBi-32_1v66SA7Vzm5ISga9F5BaoP6iVMBPeHdqoBzKbFP9N4cqp-EWSmUJhG-HjcJJAdEr2coe7-taGRF7A47Urs288WofA69pJoTI-2wj3_B2s8bGN6liyGSGSwMiG-cEFlewE2OmzUaztVxKvCGCNUOMmkhlwHay5grxZzae6e2dFudXvAPBvS0VqIYPuvZ2eOnlNxxMIt535wgTKW8NRBFVNU1A6lxkdDc",
            },
            {
              shop: "Bar & Lounge EMERALD",
              rate: "¥35,000",
              tags: ["ノルマなし", "全額日払い"],
              time: "昨日",
              image:
                "https://lh3.googleusercontent.com/aida-public/AB6AXuDYkzw55AqQW7a6MaKfl6Y1fTiKrjDbEAq68tBSgtPk7znhwGJwZvb_YKwvAl0bWP7xxChtXZJZ62661j7AakXANy22iqz4M-_xWH6mzcUH_Uj2Z4LbfihlFOlWHr10cGdCT5MKwO-U_z2y_ovMW08inXwzyp09n0NcHIFFxTVxFJcPUtSNwpekkEEXTuuYjAZMeZaTBcLZBrnFlzASofthiCMB6p5zAESo4A9e3Snbp_TIyNJyd7aDv8dlqAG0NKfLEZIxZ83b57c",
            },
          ].map((scout) => (
            <Link href="/scouts/1" key={scout.shop} className="block">
              <article className="bg-white rounded-3xl p-5 shadow-sm border border-outline-variant/10 flex gap-4 transition-transform active:scale-[0.98]">
                <div className="w-20 h-20 rounded-2xl bg-surface-container overflow-hidden shadow-inner flex-shrink-0">
                  <Image
                    src={scout.image}
                    alt={scout.shop}
                    width={80}
                    height={80}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="flex-1">
                  <div className="flex justify-between items-start mb-1">
                    <h3 className="font-black text-base">{scout.shop}</h3>
                    <span className="text-[10px] text-on-surface-variant font-bold">
                      {scout.time}
                    </span>
                  </div>
                  <div className="flex items-baseline gap-1 mb-2">
                    <span className="text-xl font-black text-primary">
                      {scout.rate}
                    </span>
                    <span className="text-[10px] font-bold text-on-surface-variant">
                      〜
                    </span>
                  </div>
                  <div className="flex gap-1.5">
                    {scout.tags.map((tag) => (
                      <span
                        key={tag}
                        className="text-[9px] font-black text-secondary bg-secondary/5 px-2 py-1 rounded-md"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </article>
            </Link>
          ))}
        </div>
      </div>
    </>
  );
}
