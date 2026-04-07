import Link from "next/link";
import { Icon } from "@/components/icon";
import { TopAppBar } from "@/components/top-app-bar";

export default function MyPage() {
  return (
    <>
      <TopAppBar status="inactive" />
      <div className="flex flex-col items-center justify-center pt-20 text-center px-6 animate-[fade-in-up_0.3s_ease-out]">
        <div className="w-24 h-24 bg-surface-container rounded-full flex items-center justify-center mb-6 text-on-surface-variant/30">
          <Icon name="person" className="text-5xl" />
        </div>
        <h2 className="text-xl font-black mb-2">プロフィール設定</h2>
        <p className="text-on-surface-variant text-sm font-medium px-12">
          自撮り写真の更新や、希望条件の変更はこちらから行えます。
        </p>
        <Link
          href="/"
          className="mt-8 text-primary font-black text-sm underline underline-offset-4 active:scale-95 transition-transform"
        >
          ログアウト
        </Link>
      </div>
    </>
  );
}
