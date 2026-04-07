"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Icon } from "@/components/icon";
import { TopAppBar } from "@/components/top-app-bar";

const SCOUTS = [
  {
    id: "1",
    shopName: "Club Celeste (セレスト)",
    catchphrase: "「今から3時間、特別日当で募集しています！」",
    dailyRate: "¥35,000〜",
    tags: ["送迎あり"],
    imageUrl:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuB_XqpARMk8tn731TkS6u02hC0PF5VDutUTv6tPlFZ5eip7wFXKcVR3dexwEfbF_igMq--1Vu55eLA3aNNxR02h-dK1Jjunu77b3y4l_nra89-BkKMmvi3FdJNPQ0l3jCS61zG0oZ0xHY7JKMnPNFBt-o7Bw5QExrYTTnUCRODuhGko0YB066cIM9y0ra3q0FTgKMimCp9o33JPy1FWZIHz1Mo3iTZVuXq9VBYsz1vg0p7H6lT5ZjelH810D7qFzDFHzBF5oemesTk",
    timeAgo: "1分前",
    isNew: true,
  },
  {
    id: "2",
    shopName: "Lounge 華月 (Kagetsu)",
    catchphrase: "プロフィールの雰囲気が素敵ですね。ぜひ一度...",
    dailyRate: "¥32,500〜",
    tags: ["全額日払いOK"],
    imageUrl:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuCvCSWpQT0JFY0EzYhgRtJiykYFlQycvC9XFLd6MwXTpZJI-lWe2Safn5wPEPQEqBKdO710Pn87o_oFnaPW9h5RBIN7-le30cu411uNBxKKGWPBa7TuFTLe1tVS9iUgseyAAC4PLe-QxN1nC8kq6TPO-Li4X5kv1Kn2EJubA7CKCMmsCBmE2S5hGWl6XjKb-1zxuKLf-_vr-J2qGllUWFBub4WI1jThDe-_LkX2uNWm69Dch87Ta0rYWcY5XyMBj1sCzFd-9e5NYoM",
    timeAgo: "2分前",
    isNew: false,
  },
  {
    id: "3",
    shopName: "Wine & Bar 凛",
    catchphrase: "体験入店からいかがでしょうか？本日空きあり",
    dailyRate: "¥25,000〜",
    tags: [],
    imageUrl:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuDGUXdW4wt_8AXqhKUPVM1ufsylOCB3Xi7mrsBTwFYIvVA3mkeND23RTGRpEKak9AJpLh2cDCOkh0eomqGYtdn2cX3oahE5pHT64_z2d2T6nByls4hVIu7SfHb5K6Ao9KsCvUrrFhnCPdomq7bXUm4YC9QGp1M2EKhMUSRUZSw5UIfJaja5CR987y5ysMEZapATCXewCvMB41pHauqhhlTJZwwR1B2OyRBUUtFotEaUycIDU6TjHH68LmUmLJwVip6XpNp5ffVB9b8",
    timeAgo: "5分前",
    isNew: false,
  },
];

export default function DashboardPage() {
  const [isActive, setIsActive] = useState(false);

  return (
    <>
      <TopAppBar status={isActive ? "active" : "inactive"} />

      <div className="px-6 max-w-md mx-auto">
        {!isActive ? (
          /* ── INACTIVE (HOME) STATE ── */
          <div className="flex flex-col items-center justify-center pt-8">
            {/* Welcome */}
            <div className="text-center mb-12">
              <h2 className="text-lg font-bold mb-2">あなたを待っているお店があります</h2>
              <p className="text-on-surface-variant text-sm font-medium">
                受付を開始して、今夜のスカウトを受け取りましょう
              </p>
            </div>

            {/* Central area with floating badges */}
            <div className="relative w-full max-w-sm flex flex-col items-center">
              {/* Floating Badges */}
              <div className="absolute -top-12 -left-2 bg-white shadow-md rounded-2xl px-4 py-2 border border-outline-variant/10 z-20 -rotate-[4deg]">
                <p className="text-xs font-bold text-primary flex items-center gap-1">
                  <Icon name="local_fire_department" filled className="text-[14px]" />
                  前回は8件届きました
                </p>
              </div>

              <div className="absolute -top-6 -right-4 bg-tertiary-container text-on-tertiary-fixed shadow-md rounded-2xl px-4 py-2 z-20 rotate-[6deg]">
                <p className="text-xs font-black flex items-center gap-1">
                  <Icon name="mail" filled className="text-[14px]" />
                  未確認スカウト 2件
                </p>
              </div>

              {/* Central Toggle Button */}
              <div className="group relative w-64 h-64 flex items-center justify-center">
                {/* Static glow */}
                <div className="absolute inset-0 bg-primary rounded-full blur-3xl opacity-10" />

                <button
                  onClick={() => setIsActive(true)}
                  className="relative z-10 w-56 h-56 rounded-full bg-primary-container shadow-[0_20px_40px_rgba(170,44,50,0.2)] flex flex-col items-center justify-center border-8 border-white transition-all active:scale-95"
                >
                  <div className="animate-[tap-bounce_1s_ease-in-out_infinite]">
                    <Icon
                      name="touch_app"
                      filled
                      className="text-on-primary-container mb-2"
                      size="56px"
                    />
                  </div>
                  <span className="text-on-primary-container font-black text-xl leading-tight">
                    今働きたい
                  </span>
                  <span className="text-on-primary-container/70 text-xs font-bold mt-1">
                    タップして開始
                  </span>
                </button>

                {/* Favorites link */}
                <Link
                  href="/favorites"
                  className="absolute bottom-2 -right-4 w-10 h-10 bg-white rounded-full shadow-md flex items-center justify-center active:scale-90 transition-transform"
                >
                  <Icon name="star" filled className="text-amber-400 text-lg" />
                </Link>
              </div>

              {/* Footnote */}
              <div className="mt-12 text-center max-w-[280px]">
                <p className="text-on-surface-variant text-sm font-medium leading-relaxed">
                  ボタンをONにすると、あなたのプロフィールがお店に公開され、お誘いが届くようになります。
                </p>
              </div>
            </div>

            {/* Stats Bento */}
            <div className="w-full mt-12 grid grid-cols-2 gap-4">
              <div className="bg-white p-5 rounded-2xl shadow-sm border border-white/50 flex flex-col gap-2">
                <Icon name="history" className="text-secondary text-2xl" />
                <div>
                  <p className="text-[10px] font-bold text-on-surface-variant uppercase tracking-wider">
                    Last Work
                  </p>
                  <p className="text-sm font-black">3日前: クラブ A</p>
                </div>
              </div>
              <div className="bg-white p-5 rounded-2xl shadow-sm border border-white/50 flex flex-col gap-2">
                <Icon name="trending_up" filled className="text-primary text-2xl" />
                <div>
                  <p className="text-[10px] font-bold text-on-surface-variant uppercase tracking-wider">
                    Tonight&apos;s Forecast
                  </p>
                  <p className="text-sm font-black">非常に多い</p>
                </div>
              </div>
            </div>
          </div>
        ) : (
          /* ── ACTIVE STATE ── */
          <div className="flex flex-col gap-8">
            {/* Active Status Card */}
            <section className="relative overflow-hidden bg-gradient-to-br from-emerald-50 to-white rounded-3xl p-8 text-center border border-emerald-100 shadow-[0_0_30px_rgba(74,222,128,0.2)]">
              <div className="absolute top-0 left-0 w-full h-1 bg-emerald-400 opacity-20" />
              <div className="mb-4">
                <span className="text-on-surface-variant text-sm font-bold">
                  現在、お店にあなたの意欲を公開中です 💌
                </span>
              </div>
              <div className="flex flex-col items-center gap-2 mb-6">
                <div className="text-4xl font-black tracking-tight text-on-surface">
                  15分経過
                </div>
                <div className="px-4 py-2 bg-primary/10 rounded-full">
                  <span className="text-primary font-black text-sm">
                    届いたスカウト：3件
                  </span>
                </div>
              </div>
              <button
                onClick={() => setIsActive(false)}
                className="text-sm font-bold text-on-surface-variant/70 underline underline-offset-4 hover:text-primary transition-colors"
              >
                受付を止める
              </button>
            </section>

            {/* Scout List */}
            <div className="space-y-4">
              <div className="flex items-center justify-between mb-2 px-1">
                <h2 className="text-lg font-black flex items-center gap-2">
                  <Icon name="auto_awesome" className="text-primary animate-pulse" />
                  新着スカウト
                </h2>
                <span className="text-xs text-on-surface-variant font-bold">
                  リアルタイム更新中
                </span>
              </div>

              {SCOUTS.map((scout) => (
                <div
                  key={scout.id}
                  className="group bg-white rounded-2xl p-4 shadow-sm border-l-4 border-primary transition-all hover:shadow-md active:scale-[0.98]"
                >
                  <div className="flex gap-4">
                    <div className="w-14 h-14 rounded-xl overflow-hidden flex-shrink-0 shadow-inner">
                      <Image
                        src={scout.imageUrl}
                        alt={scout.shopName}
                        width={56}
                        height={56}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div className="flex-1">
                      <div className="flex justify-between items-start mb-1">
                        <h3 className="font-black text-sm">{scout.shopName}</h3>
                        {scout.isNew ? (
                          <span className="text-[10px] bg-primary text-white px-2 py-0.5 rounded-full font-black">
                            NEW
                          </span>
                        ) : (
                          <span className="text-[10px] text-on-surface-variant font-bold">
                            {scout.timeAgo}
                          </span>
                        )}
                      </div>
                      <p className="text-xs text-on-surface-variant mb-2 line-clamp-1 font-medium">
                        {scout.catchphrase}
                      </p>
                      <div className="flex gap-2">
                        <span className="text-[10px] font-black text-primary bg-primary/5 px-2 py-0.5 rounded">
                          日当 {scout.dailyRate}
                        </span>
                        {scout.tags.map((tag) => (
                          <span
                            key={tag}
                            className="text-[10px] font-black text-secondary bg-surface-container px-2 py-0.5 rounded"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Advice Bubble */}
            <div className="bg-[#f3e8ff] rounded-2xl p-5 relative shadow-sm border border-purple-100">
              <div className="absolute -top-3 left-6 bg-tertiary text-white text-[10px] font-black px-3 py-1 rounded-full shadow-md flex items-center gap-1">
                アドバイス 💡
              </div>
              <p className="text-sm text-on-tertiary-container font-bold leading-relaxed pt-1">
                北新地エリアは21時以降にスカウトが活発になります！
                <br />
                「日当交渉可」のフラグを立てると、より好条件なオファーが届きやすくなりますよ。
              </p>
            </div>
          </div>
        )}
      </div>
    </>
  );
}
