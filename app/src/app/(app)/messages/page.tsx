import { Icon } from "@/components/icon";
import { TopAppBar } from "@/components/top-app-bar";

export default function MessagesPage() {
  return (
    <>
      <TopAppBar status="inactive" />
      <div className="flex flex-col items-center justify-center pt-20 text-center px-6 animate-[fade-in-up_0.3s_ease-out]">
        <div className="w-24 h-24 bg-surface-container rounded-full flex items-center justify-center mb-6 text-on-surface-variant/30">
          <Icon name="chat_bubble" className="text-5xl" />
        </div>
        <h2 className="text-xl font-black mb-2">メッセージはまだありません</h2>
        <p className="text-on-surface-variant text-sm font-medium px-12">
          お店からのオファーに返信すると、ここにチャットが表示されます。
        </p>
      </div>
    </>
  );
}
