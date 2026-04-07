type TopAppBarProps = {
  status?: "active" | "inactive";
};

export function TopAppBar({ status = "inactive" }: TopAppBarProps) {
  return (
    <header className="fixed top-0 w-full z-50 bg-surface/80 glass-header flex justify-between items-center px-6 h-16">
      <h1 className="text-lg font-bold text-on-surface font-headline tracking-tight">
        いきなり体入<span className="text-primary">くん</span>
      </h1>
      {status === "active" ? (
        <div className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-emerald-50 border border-emerald-100 shadow-sm">
          <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
          <span className="text-xs font-bold text-emerald-700">受付中</span>
        </div>
      ) : (
        <div className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-surface-container border border-outline-variant/20">
          <span className="w-2 h-2 rounded-full bg-secondary animate-pulse" />
          <span className="text-xs font-bold text-on-surface-variant">
            停止中
          </span>
        </div>
      )}
    </header>
  );
}
