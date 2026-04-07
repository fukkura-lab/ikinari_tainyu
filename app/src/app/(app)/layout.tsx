import { BottomNav } from "@/components/bottom-nav";

export default function AppLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <main className="pt-20 pb-32 min-h-screen">{children}</main>
      <BottomNav />
    </>
  );
}
