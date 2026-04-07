import Image from "next/image";
import Link from "next/link";
import { Icon } from "@/components/icon";

const SAVED_SCOUTS = [
  {
    id: "1",
    shopName: "CLUB ELEGANCE",
    category: "Club・北新地",
    dailyRate: "¥40,000",
    tags: ["本日OK", "終電上がりOK"],
    timeLeft: "残り12時間",
    expired: false,
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuB39U05hVPTIkeCeK5X-H8jykKHKKX39rAE7_0gXFdQk3jaALEzTjK5snW99FBPcaq0bOSCtKNEIkZdDAZsdk7xuT9Z4DNjqdYO14tPkBhQqqlN1xaR44vqRiPBRPkLs_YOsTxinjf450NnbqykpSn5Kfkgrz7NY6EY26Vyzr9BcgA2Y2fz3d_WGQpirm0B_pY7gow5gbmm--9AaqaUd9lw8XEX9VNIV3AS1H0ufFsVZF3LBYqKVGMioATZqD7DW4_bgyVNU7henNE",
  },
  {
    id: "2",
    shopName: "LOUNGE AMOUR",
    category: "Lounge・北新地",
    dailyRate: "¥32,500",
    tags: ["体験入店歓迎", "送りあり"],
    timeLeft: "残り5時間",
    expired: false,
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuA6v8sVWNqKbgd0BGForrCUkNQRBqQMo4LqceduSjih4FxM6c2xz7RxIsdTxQ6uOhsLtdj0e_fE_othJ1irVdsvKEsL45k0mIQK72ncqh0YKoet6fLy0K2xJlXZYE0QSzd1s8y-b1rZTtySL_5P9iacrQAobRLzWMc3vS-DFkInsBrXvDeNCMf_AHV60uXmXag754hQHia2c8ZbwCt5x8J2dlmdrtK5Mj9JwFHDPGoI63kBGaWHQQmlU3WcLJ1Rg35t9Dj9qHhZQzQ",
  },
  {
    id: "3",
    shopName: "CLUB CRYSTAL",
    category: "Club・北新地",
    dailyRate: "¥45,000",
    tags: ["未経験OK"],
    timeLeft: "期限切れ",
    expired: true,
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuBVI7-FOvxhfUefmWr1ZGNLiDG_TM_30icTKA_18eipCg_TKI9NXHTlrBhELdVueE41kErM0Zd3KsNRHT7138FIP-EYqNh2HJgaI-5ucFCsl8y6nSaMJJt8Jmqq5yiyQxgP2LVM6Tf4DVfyOF0dLjqgDmarWv1crTXkHCIFHdCt8cECvyapCeWZILToJq7BmSru8MYIk3YEEXq047MtmXmuAYmtVh8pU1FxPnYsrbwTq8DrKrUwsNzoSls4LyuLJPVH9Kwg1FKZwJc",
  },
];

export default function FavoritesPage() {
  return (
    <div className="-mt-20 -mb-32">
      {/* Header */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-surface-container-low/90 backdrop-blur-md border-b border-outline-variant/10">
        <div className="flex items-center justify-between px-4 h-14">
          <Link
            href="/dashboard"
            className="flex items-center justify-center w-10 h-10 rounded-full hover:bg-surface-container"
          >
            <Icon name="chevron_left" className="text-on-surface" />
          </Link>
          <h1 className="text-base font-semibold text-on-surface">
            お気に入り
          </h1>
          <div className="w-10" />
        </div>
      </header>

      <div className="pt-20 pb-32 px-4 max-w-2xl mx-auto">
        {/* List header */}
        <div className="flex items-center justify-between mb-6 px-2">
          <p className="text-sm text-on-surface-variant font-medium">
            {SAVED_SCOUTS.length}件の保存済みスカウト
          </p>
          <Icon name="tune" className="text-on-surface-variant" />
        </div>

        {/* Cards */}
        <div className="space-y-4">
          {SAVED_SCOUTS.map((scout) => (
            <Link
              href={`/scouts/${scout.id}`}
              key={scout.id}
              className="block"
            >
              <div
                className={`bg-surface-container-lowest rounded-lg p-5 shadow-[0_8px_24px_rgba(170,44,50,0.04)] overflow-hidden active:scale-[0.98] transition-all duration-200 ${
                  scout.expired ? "opacity-60" : ""
                }`}
              >
                <div className="flex gap-4">
                  {/* Shop Image */}
                  <div
                    className={`w-24 h-24 flex-shrink-0 rounded-lg overflow-hidden ${
                      scout.expired ? "grayscale" : ""
                    }`}
                  >
                    <Image
                      src={scout.image}
                      alt={scout.shopName}
                      width={96}
                      height={96}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  {/* Content */}
                  <div className="flex-1 flex flex-col justify-between">
                    <div>
                      <div className="flex justify-between items-start">
                        <span className="text-[10px] bg-surface-container text-on-surface-variant px-2 py-0.5 rounded-full mb-1">
                          {scout.category}
                        </span>
                        <Icon
                          name="favorite"
                          filled
                          className="text-primary"
                          size="20px"
                        />
                      </div>
                      <h3 className="text-base font-bold text-on-surface leading-tight mt-0.5">
                        {scout.shopName}
                      </h3>
                    </div>
                    <div className="flex items-baseline gap-1 mt-2">
                      <span className="text-primary font-black text-2xl">
                        {scout.dailyRate}
                      </span>
                      <span className="text-xs text-primary font-bold">
                        /日当
                      </span>
                    </div>
                  </div>
                </div>

                {/* Badges Row */}
                <div className="flex flex-wrap gap-2 mt-4 pt-4 border-t border-surface-container-low">
                  {scout.tags.map((tag) => (
                    <span
                      key={tag}
                      className={`text-[11px] font-bold px-3 py-1 rounded-full ${
                        tag === "本日OK"
                          ? "text-primary bg-on-primary"
                          : "text-on-surface-variant bg-surface-container"
                      }`}
                    >
                      {tag}
                    </span>
                  ))}
                  <div className="ml-auto flex items-center gap-1">
                    <Icon
                      name={scout.expired ? "history" : "schedule"}
                      className={
                        scout.expired
                          ? "text-on-surface-variant"
                          : "text-error"
                      }
                      size="14px"
                    />
                    <span
                      className={`text-[11px] font-medium ${
                        scout.expired
                          ? "text-on-surface-variant"
                          : "text-error"
                      }`}
                    >
                      {scout.timeLeft}
                    </span>
                  </div>
                </div>

                {/* CTA Button */}
                {!scout.expired && (
                  <button className="w-full mt-4 bg-inverse-primary text-white font-bold py-3 rounded-full shadow-lg shadow-primary/10 active:scale-[0.98] transition-all flex items-center justify-center gap-2">
                    <span className="text-lg">{scout.dailyRate}</span>
                    <span>お店に決める</span>
                  </button>
                )}
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
