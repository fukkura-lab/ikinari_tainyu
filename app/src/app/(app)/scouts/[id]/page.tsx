import Image from "next/image";
import Link from "next/link";
import { Icon } from "@/components/icon";

const galleryImages = [
  "https://lh3.googleusercontent.com/aida-public/AB6AXuAn1xoTicAVlpIIswBtqH6kvOZ0qBhu2B2jGQ2ktEw3T66V2vTnq1DWU1uVzNc8dHNgFC4oe4i6cVy1ljE2G1ct1PDs4H7pJx_rUql6O0P-aDhcRNDGk8P2zve_Vja7NX2JoYeF-BaG-WAua7L0eiuuivJyDR0hwnAYycWmPEFngvqlw6yANWlwQXJhj81WmyzV0tw9SKmo_BSi27nr7O1l-cBDNXTb5k4Nen965d5nr4pJepzEiQO0vIJNaa4rsWL6TZKs2pQFN6I",
  "https://lh3.googleusercontent.com/aida-public/AB6AXuBX6UI4YlGVxCBTigPgArJbUJULCJaWgeSz6E9-wdtoF4WUpBXlMg31mb3vhobOSqW54hOBDoHsR1SioraFmg6thy_n2whaPb588gGBQgIRF8T7jTbpwEX3ok-qf7XTBw1SkNMgYQQlbh0-JflkVXwo9BPlNkYseo9yUE9aNeD9ZuLVGSL5BNYrUo9yYZQmPKFvMYW2z2HA2wFc7cdK49YARgJaWMnicOQ4a25SRtIYnwWe3XVSl9pYLrqCSzqSG-ns-EqI2PJKo9w",
];



const conditions = [
  {
    icon: "work",
    title: "働きやすさ",
    primaryTags: ["全額日払いOK"],
    neutralTags: ["週1日〜勤務可", "終電上がり応相談"],
  },
  {
    icon: "groups",
    title: "職場環境",
    primaryTags: ["未経験者歓迎"],
    neutralTags: ["20代中心の職場", "派閥なし"],
  },
  {
    icon: "chair",
    title: "待遇・設備",
    primaryTags: ["送りあり"],
    neutralTags: ["衣装レンタル無料", "個人ロッカー完備"],
  },
];

const reviews = [
  {
    stars: 5,
    text: "初めてでも安心して働けました。スタッフの方がとても優しくて、わからないことも丁寧に教えてくれました。",
    date: "2週間前",
  },
  {
    stars: 4,
    text: "雰囲気がとても良く、楽しく働けます。お給料もしっかりもらえるので安心です。また利用したいです。",
    date: "1ヶ月前",
  },
];

export default function ScoutDetailPage() {
  return (
    <div className="-mt-20 -mb-32">
      {/* Custom Header */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-surface-container-low/90 backdrop-blur-md border-b border-outline-variant/10">
        <div className="flex items-center justify-between px-4 h-14">
          <Link
            href="/scouts"
            className="flex items-center justify-center w-10 h-10 rounded-full hover:bg-surface-container"
          >
            <Icon name="chevron_left" className="text-on-surface" />
          </Link>
          <h1 className="text-base font-semibold text-on-surface">
            北新地ラウンジ A
          </h1>
          <div className="flex items-center gap-1">
            <button className="flex items-center justify-center w-10 h-10 rounded-full hover:bg-surface-container active:scale-90 transition-transform">
              <Icon name="favorite" className="text-primary" size="22px" />
            </button>
            <button className="flex items-center justify-center w-10 h-10 rounded-full hover:bg-surface-container">
              <Icon name="more_horiz" className="text-on-surface" />
            </button>
          </div>
        </div>
      </header>

      {/* Spacer for fixed header */}
      <div className="h-14" />

      {/* Photo Gallery */}
      <section className="relative h-[353px]">
        <div className="flex overflow-x-auto snap-x snap-mandatory h-full scrollbar-hide">
          {galleryImages.map((src, i) => (
            <div key={i} className="snap-center shrink-0 w-full h-full relative">
              <Image
                src={src}
                alt={`Shop photo ${i + 1}`}
                fill
                className="object-cover"
                sizes="100vw"
                priority={i === 0}
              />
            </div>
          ))}
        </div>
        {/* Dot indicators */}
        <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
          {galleryImages.map((_, i) => (
            <div
              key={i}
              className={`w-2 h-2 rounded-full ${
                i === 0 ? "bg-white" : "bg-white/50"
              }`}
            />
          ))}
        </div>
      </section>

      {/* Immediate Info */}
      <section className="px-5 pt-6 pb-4">
        <div className="flex gap-2 mb-3">
          <span className="inline-flex items-center px-2.5 py-1 rounded-full text-xs font-semibold bg-green-500/15 text-green-600">
            本日OK
          </span>
          <span className="inline-flex items-center px-2.5 py-1 rounded-full text-xs font-semibold bg-primary/10 text-primary">
            本日あと2枠
          </span>
        </div>

        <p className="text-3xl font-black text-primary mb-1">
          ¥40,000{" "}
          <span className="text-base font-medium text-on-surface-variant">
            /日当
          </span>
        </p>

        <h2 className="text-2xl font-black text-on-surface mt-2">
          北新地ラウンジ A
        </h2>

        <div className="flex items-center gap-1.5 mt-1 text-on-surface-variant">
          <Icon name="nightlife" size="18px" className="text-on-surface-variant" />
          <span className="text-sm">クラブ / ラウンジ</span>
        </div>
      </section>

      {/* Shop Message */}
      <section className="px-5 pb-4">
        <div className="bg-tertiary-container/20 border-l-4 border-tertiary/40 rounded-r-lg p-4">
          <div className="mb-2">
            <span className="text-sm font-semibold text-on-surface">
              採用担当者からのメッセージ
            </span>
          </div>
          <p className="text-sm text-on-surface-variant leading-relaxed">
            当店は未経験の方でも安心して働けるお店です。体験入店も大歓迎！アットホームな雰囲気の中、先輩スタッフが丁寧にサポートいたします。まずは気軽にお越しください。
          </p>
        </div>
      </section>

      {/* Conditions */}
      <section className="px-5 pb-6">
        <div className="bg-surface-container-low rounded-lg p-4 space-y-5">
          {conditions.map((condition, i) => (
            <div key={condition.title}>
              {i > 0 && <div className="border-t border-outline-variant/20 mb-5" />}
              <div className="flex items-center gap-2 mb-3">
                <Icon
                  name={condition.icon}
                  className="text-primary"
                  size="20px"
                />
                <span className="text-sm font-semibold text-on-surface">
                  {condition.title}
                </span>
              </div>
              <div className="flex flex-wrap gap-2">
                {condition.primaryTags.map((tag) => (
                  <span
                    key={tag}
                    className="px-2.5 py-1 rounded-full text-xs font-medium bg-primary/10 text-primary"
                  >
                    {tag}
                  </span>
                ))}
                {condition.neutralTags.map((tag) => (
                  <span
                    key={tag}
                    className="px-2.5 py-1 rounded-full text-xs font-medium bg-surface-container-high text-on-surface-variant"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          ))}
          <button className="text-xs font-medium text-primary mt-2">
            もっと見る
          </button>
        </div>
      </section>

      {/* Trial Day Info */}
      <section className="px-5 pb-6">
        <h3 className="text-lg font-bold text-on-surface mb-4">
          体験入店について
        </h3>

        <div className="space-y-4 mb-5">
          <div className="flex gap-3">
            <Icon
              name="check_circle"
              filled
              className="text-primary shrink-0 mt-0.5"
              size="20px"
            />
            <div>
              <p className="text-sm font-semibold text-on-surface">
                持ち物チェックリスト
              </p>
              <p className="text-sm text-on-surface-variant mt-0.5">
                身分証、パンプス（あれば）、メイク道具
              </p>
            </div>
          </div>
          <div className="flex gap-3">
            <Icon
              name="check_circle"
              filled
              className="text-primary shrink-0 mt-0.5"
              size="20px"
            />
            <div>
              <p className="text-sm font-semibold text-on-surface">
                服装について
              </p>
              <p className="text-sm text-on-surface-variant mt-0.5">
                清潔感のあるワンピースやスカートスタイル
              </p>
            </div>
          </div>
        </div>

        {/* Location */}
        <div>
          <div className="flex items-center gap-2 mb-2">
            <Icon name="location_on" filled className="text-primary" size="20px" />
            <p className="text-sm font-semibold text-on-surface">
              大阪府大阪市北区曽根崎新地1丁目
            </p>
          </div>
          <div className="overflow-hidden h-48 rounded-none">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3280.5!2d135.4966!3d34.6967!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6000e6e04fba7b2d%3A0x5c29309f9fa7b75!2z5YyX5paw5Zyw!5e0!3m2!1sja!2sjp!4v1"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="店舗所在地"
            />
          </div>
        </div>
      </section>

      {/* Reviews */}
      <section className="px-5 pb-40">
        <div className="flex items-center justify-between mb-4">
          <h3 className="text-lg font-bold text-on-surface">口コミ</h3>
          <span className="text-sm text-on-surface-variant">
            4.8（124件）
          </span>
        </div>

        <div className="space-y-3">
          {reviews.map((review, i) => (
            <div
              key={i}
              className="bg-surface-container-low rounded-lg p-4"
            >
              <div className="flex items-center gap-1 mb-2">
                {Array.from({ length: 5 }).map((_, s) => (
                  <Icon
                    key={s}
                    name="star"
                    filled={s < review.stars}
                    className={
                      s < review.stars
                        ? "text-amber-400"
                        : "text-outline-variant"
                    }
                    size="16px"
                  />
                ))}
                <span className="text-xs text-on-surface-variant ml-2">
                  {review.date}
                </span>
              </div>
              <p className="text-sm text-on-surface-variant leading-relaxed">
                {review.text}
              </p>
              <p className="text-xs text-on-surface-variant/60 mt-2">
                匿名
              </p>
            </div>
          ))}
        </div>

        <button className="w-full mt-3 py-2.5 text-sm font-medium text-primary rounded-lg border border-outline-variant">
          もっと見る
        </button>
      </section>

      {/* Fixed Bottom Action Bar — above BottomNav */}
      <div className="fixed bottom-24 inset-x-0 z-40 px-4 py-4 pointer-events-none">
        <div className="max-w-md mx-auto pointer-events-auto">
          <button className="w-full flex items-center justify-center gap-2 px-5 py-3.5 rounded-full bg-gradient-to-r from-primary to-primary-dim text-on-primary font-semibold text-sm shadow-lg active:scale-[0.98] transition-transform">
            <Icon name="check_circle" filled size="20px" />
            <span>¥40,000 このお店に決める</span>
          </button>
        </div>
      </div>
    </div>
  );
}
