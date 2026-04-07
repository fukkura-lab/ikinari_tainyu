import Link from "next/link";
import { Icon } from "@/components/icon";
import { ActivityTicker } from "@/components/activity-ticker";

export default function Page() {
  return (
    <div className="bg-background text-on-background min-h-screen overflow-x-hidden">
      {/* Fixed Login Button */}
      <div className="fixed top-4 right-4 z-50">
        <Link
          href="/dashboard"
          className="bg-primary text-on-primary px-6 py-2 rounded-full text-sm font-bold shadow-lg active:scale-95 transition-transform inline-block"
        >
          ログイン
        </Link>
      </div>

      {/* Hero Section with Background */}
      <div
        className="bg-cover bg-center"
        style={{
          backgroundImage: `linear-gradient(rgba(254,245,238,0.85), rgba(254,245,238,0.85)), url(https://lh3.googleusercontent.com/aida-public/AB6AXuA0d9mq3nuMbawxBSthuTgpyyHmM2Jg2G7KDWZFrSDPwC15PyeVaMswpnIZdnfm5W-8cfhTjvdngE8cOhPSlQXYCbYCbiQvM4MAZPFLfknbouFtJak68sE_Ip-szKhQ4SwX02yNZl33EVUEKzBfk9fVvvbnbCYcD3bex8QtfEpBhOpAMA42tKtR2YgGczLlAWKqhdbreQzJtc4mEsBqrCPgOo97uVJQFg8jngnlzXanM6Y0iDg2fELugHh04jCV1qLc-wO-6FIBRy8)`,
        }}
      >
        <header className="pt-8 px-6 lg:max-w-6xl lg:mx-auto">
          <div className="max-w-md mx-auto flex items-center justify-start lg:max-w-none">
            <span className="text-2xl font-bold text-[#322e2a] font-headline">
              いきなり体入<span className="text-primary">くん</span>
            </span>
          </div>
        </header>

        <header className="pt-12 pb-12 px-6 relative lg:pt-24 lg:pb-24 lg:max-w-6xl lg:mx-auto">
          <div className="max-w-md mx-auto text-center lg:max-w-none lg:grid lg:grid-cols-2 lg:gap-12 lg:text-left lg:items-center">
            {/* Left Column: Text & CTA */}
            <div>
              <div className="inline-flex items-center gap-1.5 px-4 py-1 bg-primary/10 text-primary rounded-full text-xs font-bold mb-4">
                北新地エリア限定{" "}
                <Icon name="location_on" className="text-[14px]" />
              </div>

              <h1 className="text-[2.25rem] font-bold leading-tight mb-4 tracking-tight">
                わたしにも
                <br className="lg:hidden" />
                スカウト来るかな？
              </h1>

              <p className="text-on-surface-variant text-base leading-relaxed mb-8">
                自撮り1枚で、今夜の北新地から
                <br className="lg:hidden" />
                スカウトが届く{" "}
                <Icon
                  name="photo_camera"
                  className="text-[18px] align-middle"
                />
              </p>

              <div className="relative group max-w-xs mx-auto mb-12 lg:mx-0">
                <div className="absolute -inset-1 bg-gradient-to-r from-primary to-primary-container rounded-full blur opacity-25 group-hover:opacity-50 transition duration-1000"></div>
                <Link
                  href="/dashboard"
                  className="relative w-full py-5 bg-gradient-to-r from-primary to-primary-dim text-white rounded-full text-lg font-bold shadow-xl flex items-center justify-center gap-2 active:scale-[0.98] transition-transform"
                >
                  スカウトを受け取る{" "}
                  <Icon name="arrow_forward" className="text-xl" />
                </Link>
              </div>
            </div>

            {/* Right Column: Bento Grid */}
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-surface-container-lowest/80 backdrop-blur-sm p-5 rounded-lg shadow-sm border border-white/50">
                <div className="flex items-center justify-center gap-1 mb-1">
                  <p className="text-xs text-on-surface-variant">
                    本日の利用者
                  </p>
                  <Icon
                    name="groups"
                    className="text-xs text-on-surface-variant"
                  />
                </div>
                <div className="flex items-baseline justify-center gap-1">
                  <span className="text-2xl font-bold text-primary">124</span>
                  <span className="text-[10px] text-on-surface-variant">
                    人
                  </span>
                </div>
              </div>

              <div className="bg-surface-container-lowest/80 backdrop-blur-sm p-5 rounded-lg shadow-sm border border-white/50">
                <div className="flex items-center justify-center gap-1 mb-1">
                  <p className="text-xs text-on-surface-variant">
                    最高提示日当
                  </p>
                  <Icon
                    name="diamond"
                    className="text-xs text-on-surface-variant"
                  />
                </div>
                <div className="flex items-baseline justify-center gap-1">
                  <span className="text-2xl font-bold text-primary">40,000</span>
                  <span className="text-[10px] text-on-surface-variant">
                    円〜
                  </span>
                </div>
              </div>

              <div className="bg-surface-container-lowest/80 backdrop-blur-sm p-5 rounded-lg shadow-sm border border-white/50">
                <div className="flex items-center justify-center gap-1 mb-1">
                  <p className="text-xs text-on-surface-variant">
                    平均スカウト数
                  </p>
                  <Icon
                    name="trending_up"
                    className="text-xs text-on-surface-variant"
                  />
                </div>
                <div className="flex items-baseline justify-center gap-1">
                  <span className="text-2xl font-bold text-primary">4.2</span>
                  <span className="text-[10px] text-on-surface-variant">
                    件
                  </span>
                </div>
              </div>

              <div className="bg-surface-container-lowest/80 backdrop-blur-sm p-5 rounded-lg shadow-sm border border-white/50">
                <div className="flex items-center justify-center gap-1 mb-1">
                  <p className="text-xs text-on-surface-variant">
                    募集中の店舗
                  </p>
                  <Icon
                    name="apartment"
                    className="text-xs text-on-surface-variant"
                  />
                </div>
                <div className="flex items-baseline justify-center gap-1">
                  <span className="text-2xl font-bold text-primary">85</span>
                  <span className="text-[10px] text-on-surface-variant">
                    店
                  </span>
                </div>
              </div>
            </div>
          </div>
        </header>
      </div>

      {/* 3-Step Guide */}
      <section className="px-6 mb-12 mt-12 md:max-w-6xl md:mx-auto">
        <h2 className="text-xl font-bold mb-6 flex items-center gap-2">
          使いかたは3ステップ{" "}
          <Icon name="auto_awesome" className="text-primary" />
        </h2>
        <div className="space-y-6 md:space-y-0 md:grid md:grid-cols-3 md:gap-8">
          <div className="bg-surface-container-low p-5 rounded-full flex items-center gap-6 shadow-sm border border-white/40">
            <div className="w-16 h-16 shrink-0 rounded-full bg-white flex items-center justify-center shadow-inner">
              <Icon name="add_a_photo" className="text-primary text-3xl" />
            </div>
            <div>
              <h3 className="font-bold text-base mb-0.5 flex items-center gap-1.5">
                自撮りをアップロード{" "}
                <Icon name="photo_camera" className="text-sm" />
              </h3>
              <p className="text-xs text-on-surface-variant">
                審査なし、まずは1枚撮るだけ
              </p>
            </div>
          </div>

          <div className="bg-surface-container-low p-5 rounded-full flex items-center gap-6 shadow-sm border border-white/40">
            <div className="w-16 h-16 shrink-0 rounded-full bg-white flex items-center justify-center shadow-inner">
              <Icon
                name="notifications_active"
                className="text-primary text-3xl"
              />
            </div>
            <div>
              <h3 className="font-bold text-base mb-0.5 flex items-center gap-1.5">
                お店からスカウトが届く{" "}
                <Icon name="mail" className="text-sm" />
              </h3>
              <p className="text-xs text-on-surface-variant">
                あなたの希望条件に合うお店から
              </p>
            </div>
          </div>

          <div className="bg-surface-container-low p-5 rounded-full flex items-center gap-6 shadow-sm border border-white/40">
            <div className="w-16 h-16 shrink-0 rounded-full bg-white flex items-center justify-center shadow-inner">
              <Icon name="local_bar" className="text-primary text-3xl" />
            </div>
            <div>
              <h3 className="font-bold text-base mb-0.5 flex items-center gap-1.5">
                今夜そのまま体入へ{" "}
                <Icon name="liquor" className="text-sm" />
              </h3>
              <p className="text-xs text-on-surface-variant">
                北新地の人気店で即お仕事体験
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Activity Feed */}
      <section className="mb-12 relative overflow-hidden px-6 md:max-w-6xl md:mx-auto">
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-sm font-bold text-on-surface-variant uppercase tracking-wider">
            Realtime Activity
          </h2>
          <div className="flex items-center gap-1">
            <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></span>
            <span className="text-[10px] font-bold text-green-600">LIVE</span>
          </div>
        </div>
        <ActivityTicker />
      </section>

      {/* Testimonials */}
      <section className="px-6 mb-12 md:max-w-6xl md:mx-auto">
        <h2 className="text-xl font-bold mb-6 flex items-center gap-2">
          利用者のこえ <Icon name="chat" className="text-primary" />
        </h2>
        <div className="flex gap-4 overflow-x-auto no-scrollbar pb-4 snap-x md:grid md:grid-cols-2 md:overflow-visible">
          <div className="min-w-[280px] snap-center bg-surface-container-lowest p-6 rounded-2xl shadow-sm border border-surface-container">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                <Icon name="person" className="text-primary/40 text-2xl" />
              </div>
              <div>
                <p className="font-bold text-sm">Aさん (22歳)</p>
                <p className="text-[10px] text-on-surface-variant">
                  未経験 / スカウトまで1日
                </p>
              </div>
            </div>
            <p className="text-xs leading-relaxed text-on-surface-variant">
              「ナイトワークは初めてでしたが、お店の雰囲気が事前にわかって安心でした。自撮り1枚で本当にお誘いが来てびっくり！」
            </p>
          </div>

          <div className="min-w-[280px] snap-center bg-surface-container-lowest p-6 rounded-2xl shadow-sm border border-surface-container">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                <Icon name="person" className="text-primary/40 text-2xl" />
              </div>
              <div>
                <p className="font-bold text-sm">Mさん (25歳)</p>
                <p className="text-[10px] text-on-surface-variant">
                  経験あり / スカウトまで3時間
                </p>
              </div>
            </div>
            <p className="text-xs leading-relaxed text-on-surface-variant">
              「以前の店より日当アップできました！条件を細かく設定できるから、ミスマッチがなくて効率的です」
            </p>
          </div>
        </div>
      </section>

      {/* Trust/Safety */}
      <section className="px-6 mb-12 md:max-w-6xl md:mx-auto">
        <div className="bg-surface-container p-8 rounded-3xl">
          <h2 className="text-lg font-bold mb-8 text-center flex items-center justify-center gap-2">
            安心・安全へのこだわり{" "}
            <Icon name="shield" className="text-primary" />
          </h2>
          <div className="space-y-10 md:grid md:grid-cols-2 md:space-y-0 md:gap-x-12 md:gap-y-10">
            <div className="flex gap-5 items-start">
              <div className="w-10 h-10 shrink-0 bg-primary/10 rounded-lg flex items-center justify-center">
                <Icon
                  name="verified_user"
                  filled
                  className="text-primary font-bold"
                />
              </div>
              <div>
                <h3 className="text-sm font-bold mb-1">
                  厳選された優良店のみ
                </h3>
                <p className="text-[11px] text-on-surface-variant leading-relaxed">
                  スタッフが実際に訪問し、審査を通過した店舗のみ掲載しています。
                </p>
              </div>
            </div>

            <div className="flex gap-5 items-start">
              <div className="w-10 h-10 shrink-0 bg-primary/10 rounded-lg flex items-center justify-center">
                <Icon
                  name="visibility_off"
                  filled
                  className="text-primary font-bold"
                />
              </div>
              <div>
                <h3 className="text-sm font-bold mb-1">
                  本名は公開されません
                </h3>
                <p className="text-[11px] text-on-surface-variant leading-relaxed">
                  お店にはニックネームのみ表示。プライバシーを第一に守ります。
                </p>
              </div>
            </div>

            <div className="flex gap-5 items-start">
              <div className="w-10 h-10 shrink-0 bg-primary/10 rounded-lg flex items-center justify-center">
                <Icon
                  name="no_photography"
                  filled
                  className="text-primary font-bold"
                />
              </div>
              <div>
                <h3 className="text-sm font-bold mb-1">写真の悪用防止</h3>
                <p className="text-[11px] text-on-surface-variant leading-relaxed">
                  保存不可設定やウォーターマークにより、写真を徹底的に保護します。
                </p>
              </div>
            </div>

            <div className="flex gap-5 items-start">
              <div className="w-10 h-10 shrink-0 bg-primary/10 rounded-lg flex items-center justify-center">
                <Icon
                  name="delete_forever"
                  filled
                  className="text-primary font-bold"
                />
              </div>
              <div>
                <h3 className="text-sm font-bold mb-1">
                  退会時は全データを削除
                </h3>
                <p className="text-[11px] text-on-surface-variant leading-relaxed">
                  退会手続き完了後、サーバーからすべての履歴・写真を完全に消去します。
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Expansion */}
      <section className="px-6 mb-12 md:max-w-3xl md:mx-auto">
        <div className="bg-surface-container-low p-5 rounded-2xl border-2 border-dashed border-outline-variant/30 flex items-center justify-between">
          <div className="flex-1">
            <p className="font-bold text-sm mb-1 flex items-center gap-1.5">
              ミナミエリア拡大準備中!{" "}
              <Icon
                name="rocket_launch"
                className="text-primary text-sm"
              />
            </p>
            <p className="text-[11px] text-on-surface-variant">
              LINE登録で最新情報をお届けします
            </p>
          </div>
          <button className="bg-[#06C755] text-white px-4 py-2 rounded-full text-xs font-bold shadow-sm">
            LINE登録
          </button>
        </div>
      </section>

      {/* Final CTA */}
      <section className="px-6 mb-16 text-center md:max-w-xl md:mx-auto">
        <h2 className="text-xl font-bold mb-6 flex items-center justify-center gap-2">
          まずは1分でスタート{" "}
          <Icon name="auto_awesome" className="text-primary" />
        </h2>
        <Link
          href="/dashboard"
          className="block w-full py-5 bg-gradient-to-r from-primary to-primary-dim text-white rounded-full text-lg font-bold shadow-xl active:scale-[0.98] transition-transform mb-4 text-center"
        >
          スカウトを受け取る
        </Link>
        <p className="text-xs text-on-surface-variant">
          登録は完全無料。解約もいつでも可能です。
        </p>
      </section>

      {/* Footer */}
      <footer className="bg-surface-container-highest/30 pt-12 pb-24 px-6 text-center">
        <div className="mb-8">
          <p className="text-lg font-bold mb-4">いきなり体入くん</p>
          <div className="flex flex-col gap-3 text-xs text-on-surface-variant">
            <a href="#">店舗様向けページ</a>
            <a href="#">運営会社について</a>
            <a href="#">利用規約</a>
            <a href="#">プライバシーポリシー</a>
          </div>
        </div>
        <p className="text-[10px] text-outline">
          &copy; 2024 Ikinari Tainyu-kun. All rights reserved.
        </p>
      </footer>

      {/* Fixed Bottom CTA */}
      <div className="fixed bottom-0 left-0 w-full p-4 pb-6 z-50 md:bottom-8 md:right-8 md:left-auto md:w-auto md:p-0">
        <div className="max-w-md mx-auto md:max-w-none">
          <Link
            href="/dashboard"
            className="w-full py-4 bg-gradient-to-r from-primary to-primary-dim text-white rounded-full text-lg font-bold shadow-xl flex items-center justify-center gap-2 active:scale-[0.98] transition-transform md:w-auto md:px-8 md:py-4 hover:shadow-2xl hover:-translate-y-1"
          >
            スカウトを受け取る{" "}
            <Icon name="arrow_forward" className="text-xl" />
          </Link>
        </div>
      </div>
    </div>
  );
}
