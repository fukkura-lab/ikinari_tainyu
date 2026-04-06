import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Home, 
  Mail, 
  MessageCircle, 
  User, 
  Flame, 
  Star, 
  ChevronRight, 
  History, 
  TrendingUp, 
  Sparkles,
  MapPin,
  Clock,
  CheckCircle2,
  AlertCircle,
  SlidersHorizontal,
  MousePointerClick
} from 'lucide-react';

// --- Types ---
type AppState = 'landing' | 'home' | 'active';

// --- Landing View Component ---
const LandingView = ({ onLogin }: { onLogin: () => void }) => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1 }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  };

  return (
    <motion.div 
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      className="bg-surface min-h-screen pb-24 overflow-x-hidden"
    >
      {/* Fixed Login Button */}
      <div className="fixed top-4 right-6 z-50">
        <motion.button 
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={onLogin}
          className="bg-primary text-white px-6 py-2 rounded-full text-sm font-bold shadow-lg active:scale-95 transition-transform"
        >
          ログイン
        </motion.button>
      </div>

      {/* Hero Section */}
      <div className="relative pt-8 px-6 bg-gradient-to-b from-primary/10 to-transparent">
        <motion.header variants={itemVariants} className="mb-12">
          <div className="max-w-md mx-auto flex items-center justify-start">
            <span className="text-2xl font-bold text-on-surface font-headline">いきなり体入<span className="text-primary">くん</span></span>
          </div>
        </motion.header>

        <div className="max-w-md mx-auto text-center">
          <motion.div 
            variants={itemVariants}
            className="inline-flex items-center gap-1.5 px-4 py-1 bg-primary/10 text-primary rounded-full text-xs font-bold mb-4"
          >
            北新地エリア限定 <MapPin size={14} />
          </motion.div>
          
          <motion.h1 
            variants={itemVariants}
            className="text-[2.5rem] font-extrabold leading-tight mb-4 tracking-tight text-on-surface"
          >
            わたしにも<br />オファー来るかな？
          </motion.h1>
          
          <motion.p 
            variants={itemVariants}
            className="text-on-surface-variant text-base leading-relaxed mb-8"
          >
            自撮り1枚で、今夜の北新地から<br />オファーが届く <Sparkles size={18} className="inline align-middle text-primary animate-pulse" />
          </motion.p>

          <motion.div 
            variants={itemVariants}
            className="relative group max-w-xs mx-auto mb-12"
          >
            <motion.div 
              animate={{ 
                scale: [1, 1.05, 1],
                opacity: [0.2, 0.4, 0.2]
              }}
              transition={{ repeat: Infinity, duration: 3 }}
              className="absolute -inset-4 bg-primary rounded-full blur-2xl"
            ></motion.div>
            <motion.button 
              whileHover={{ scale: 1.02, y: -2 }}
              whileTap={{ scale: 0.98 }}
              onClick={onLogin}
              className="relative w-full py-5 bg-gradient-to-r from-primary to-primary-dim text-white rounded-full text-lg font-bold shadow-[0_10px_30px_rgba(170,44,50,0.3)] flex items-center justify-center gap-2"
            >
              オファーを受け取る
              <ChevronRight size={20} />
            </motion.button>
          </motion.div>

          {/* Bento Grid Stats */}
          <motion.div variants={itemVariants} className="grid grid-cols-2 gap-4 mb-16">
            {[
              { label: '今日受け取った人', value: '124', unit: '人', icon: User },
              { label: '最高提示時給', value: '8,000', unit: '円〜', icon: Star },
              { label: '平均オファー数', value: '4.2', unit: '件', icon: TrendingUp },
              { label: '募集中の店舗', value: '85', unit: '店', icon: History }
            ].map((stat, i) => (
              <motion.div 
                key={i} 
                whileHover={{ y: -5 }}
                className="bg-white/80 backdrop-blur-sm p-5 rounded-2xl shadow-sm border border-white/50"
              >
                <div className="flex items-center justify-center gap-1 mb-1">
                  <p className="text-[10px] text-on-surface-variant font-bold">{stat.label}</p>
                  <stat.icon size={10} className="text-primary" />
                </div>
                <div className="flex items-baseline justify-center gap-1">
                  <span className="text-2xl font-black text-primary">{stat.value}</span>
                  <span className="text-[10px] text-on-surface-variant font-bold">{stat.unit}</span>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>

      {/* 3-Step Guide */}
      <section className="px-6 mb-16">
        <motion.h2 
          variants={itemVariants}
          className="text-xl font-bold mb-8 flex items-center gap-2"
        >
          使いかたは3ステップ <Sparkles size={20} className="text-primary" />
        </motion.h2>
        <div className="space-y-6">
          {[
            { icon: Sparkles, title: '自撮りをアップロード', desc: '審査なし、まずは1枚撮るだけ', color: 'bg-pink-50' },
            { icon: Mail, title: 'お店からオファーが届く', desc: 'あなたの希望条件に合うお店から', color: 'bg-purple-50' },
            { icon: Clock, title: '今夜そのまま体入へ', desc: '北新地の人気店で即お仕事体験', color: 'bg-blue-50' }
          ].map((step, i) => (
            <motion.div 
              key={i} 
              variants={itemVariants}
              whileHover={{ x: 10 }}
              className={`${step.color} p-5 rounded-3xl flex items-center gap-6 shadow-sm border border-white/40`}
            >
              <div className="w-16 h-16 shrink-0 rounded-2xl bg-white flex items-center justify-center shadow-sm text-primary">
                <step.icon size={32} />
              </div>
              <div>
                <h3 className="font-bold text-base mb-0.5">{step.title}</h3>
                <p className="text-xs text-on-surface-variant font-medium">{step.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Realtime Activity */}
      <section className="mb-16 px-6">
        <motion.div variants={itemVariants} className="flex items-center justify-between mb-6">
          <h2 className="text-sm font-bold text-on-surface-variant uppercase tracking-wider">Realtime Activity</h2>
          <div className="flex items-center gap-1">
            <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></span>
            <span className="text-[10px] font-bold text-green-600">LIVE</span>
          </div>
        </motion.div>
        <div className="space-y-3">
          {[
            { text: "北新地ラウンジが時給7,000円でオファー", delay: 0 },
            { text: "北新地クラブが新しいキャストとオファー成立", delay: 1 }
          ].map((activity, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: activity.delay, duration: 0.5 }}
              className="bg-white p-4 rounded-2xl shadow-sm border-l-4 border-primary/20 flex items-center gap-3"
            >
              <div className="w-2 h-2 rounded-full bg-primary/30"></div>
              <p className="text-[11px] leading-tight font-medium">{activity.text}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Footer CTA */}
      <motion.div 
        initial={{ y: 100 }}
        animate={{ y: 0 }}
        className="fixed bottom-0 left-0 w-full p-4 bg-surface/80 backdrop-blur-md z-50 border-t border-white/20"
      >
        <div className="max-w-md mx-auto">
          <motion.button 
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            onClick={onLogin}
            className="w-full py-4 bg-gradient-to-r from-primary to-primary-dim text-white rounded-full text-lg font-bold shadow-xl flex items-center justify-center gap-2"
          >
            オファーを受け取る
            <ChevronRight size={20} />
          </motion.button>
        </div>
      </motion.div>
    </motion.div>
  );
};

interface Scout {
  id: string;
  shopName: string;
  catchphrase: string;
  hourlyRate: string;
  tags: string[];
  imageUrl: string;
  timeAgo: string;
  isNew?: boolean;
}

// --- Mock Data ---
const SCOUTS: Scout[] = [
  {
    id: '1',
    shopName: 'Club Celeste (セレスト)',
    catchphrase: '「今から3時間、特別時給で募集しています！」',
    hourlyRate: '¥7,000〜',
    tags: ['送迎あり'],
    imageUrl: 'https://lh3.googleusercontent.com/aida-public/AB6AXuB_XqpARMk8tn731TkS6u02hC0PF5VDutUTv6tPlFZ5eip7wFXKcVR3dexwEfbF_igMq--1Vu55eLA3aNNxR02h-dK1Jjunu77b3y4l_nra89-BkKMmvi3FdJNPQ0l3jCS61zG0oZ0xHY7JKMnPNFBt-o7Bw5QExrYTTnUCRODuhGko0YB066cIM9y0ra3q0FTgKMimCp9o33JPy1FWZIHz1Mo3iTZVuXq9VBYsz1vg0p7H6lT5ZjelH810D7qFzDFHzBF5oemesTk',
    timeAgo: '1分前',
    isNew: true
  },
  {
    id: '2',
    shopName: 'Lounge 華月 (Kagetsu)',
    catchphrase: 'プロフィールの雰囲気が素敵ですね。ぜひ一度...',
    hourlyRate: '¥6,500〜',
    tags: ['全額日払いOK'],
    imageUrl: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCvCSWpQT0JFY0EzYhgRtJiykYFlQycvC9XFLd6MwXTpZJI-lWe2Safn5wPEPQEqBKdO710Pn87o_oFnaPW9h5RBIN7-le30cu411uNBxKKGWPBa7TuFTLe1tVS9iUgseyAAC4PLe-QxN1nC8kq6TPO-Li4X5kv1Kn2EJubA7CKCMmsCBmE2S5hGWl6XjKb-1zxuKLf-_vr-J2qGllUWFBub4WI1jThDe-_LkX2uNWm69Dch87Ta0rYWcY5XyMBj1sCzFd-9e5NYoM',
    timeAgo: '2分前'
  },
  {
    id: '3',
    shopName: 'Wine & Bar 凛',
    catchphrase: '体験入店からいかがでしょうか？本日空きあり',
    hourlyRate: '¥5,000〜',
    tags: [],
    imageUrl: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDGUXdW4wt_8AXqhKUPVM1ufsylOCB3Xi7mrsBTwFYIvVA3mkeND23RTGRpEKak9AJpLh2cDCOkh0eomqGYtdn2cX3oahE5pHT64_z2d2T6nByls4hVIu7SfHb5K6Ao9KsCvUrrFhnCPdomq7bXUm4YC9QGp1M2EKhMUSRUZSw5UIfJaja5CR987y5ysMEZapATCXewCvMB41pHauqhhlTJZwwR1B2OyRBUUtFotEaUycIDU6TjHH68LmUmLJwVip6XpNp5ffVB9b8',
    timeAgo: '5分前'
  }
];

// --- Components ---

const TopBar = ({ state }: { state: AppState }) => (
  <header className="fixed top-0 w-full z-50 glass-nav border-b border-outline-variant/10 h-16">
    <div className="max-w-md mx-auto h-full flex justify-between items-center px-6">
      <div className="flex items-center gap-3">
        <div className="w-10 h-10 rounded-full overflow-hidden bg-surface-container shadow-sm border-2 border-white">
          <img 
            alt="User" 
            className="w-full h-full object-cover" 
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuB98E94HgaEs2sTAcUS11qZq9fixmPgPsEEkxcEyJ1QikaYObGCxFBILatu8mMC7rL88Q-CIRbgRKTuYgU0IynEC3AZaiq_MQgjCnJ1EZGSE4KUk1308UiwAMwi_bdVUfi5AkaWg6IS-wGgb5nIj_7iaf-ogxPpA-cQ1VMPMYCQLVg2FZSe55iWZUq176WFGpOVWMpIsuprAUjSDVVP5hhclO0Z5x05QfjQq1d4P__Md3okXSqZ02vsls0bDPY0_UqcgJo2J6Eo9Bs"
            referrerPolicy="no-referrer"
          />
        </div>
        <h1 className="text-xl font-bold text-on-surface font-headline tracking-tight">いきなり体入<span className="text-primary">くん</span></h1>
      </div>
      <div className={`flex items-center gap-2 px-3 py-1.5 rounded-full ${state === 'active' ? 'bg-emerald-50 border-emerald-100' : 'bg-stone-100 border-stone-200'} border shadow-sm`}>
        <span className={`w-2 h-2 rounded-full ${state === 'active' ? 'bg-emerald-500 animate-pulse' : 'bg-stone-400'}`}></span>
        <span className={`text-xs font-bold ${state === 'active' ? 'text-emerald-700' : 'text-stone-500'}`}>
          {state === 'active' ? '受付中' : '停止中'}
        </span>
      </div>
    </div>
  </header>
);

const BottomNav = ({ activeTab, onTabChange }: { activeTab: string, onTabChange: (tab: string) => void }) => (
  <nav className="fixed bottom-0 left-0 w-full flex justify-around items-center px-4 pt-2 pb-8 glass-nav rounded-t-[2.5rem] z-50 shadow-[0_-12px_32px_rgba(170,44,50,0.06)]">
    {[
      { id: 'home', icon: Home, label: 'ホーム' },
      { id: 'scout', icon: Mail, label: 'スカウト' },
      { id: 'message', icon: MessageCircle, label: 'メッセージ' },
      { id: 'mypage', icon: User, label: 'マイページ' }
    ].map((tab) => (
      <button
        key={tab.id}
        onClick={() => onTabChange(tab.id)}
        className={`flex flex-col items-center justify-center p-2 transition-all ${
          activeTab === tab.id 
            ? 'text-primary scale-110 bg-white/50 rounded-2xl' 
            : 'text-stone-400 hover:text-primary'
        }`}
      >
        <tab.icon size={24} fill={activeTab === tab.id ? 'currentColor' : 'none'} />
        <span className="text-[10px] font-bold mt-1">{tab.label}</span>
      </button>
    ))}
  </nav>
);

const HomeView = ({ onActivate }: { onActivate: () => void }) => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1 }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  };

  return (
    <motion.div 
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      className="flex flex-col items-center justify-center pt-8"
    >
      <motion.div variants={itemVariants} className="text-center mb-12">
        <h2 className="text-2xl font-bold mb-2">おかえりなさい ✨</h2>
        <p className="text-on-surface-variant text-sm font-medium">今日はどんなお仕事を探しますか？</p>
      </motion.div>

      <div className="relative w-full max-w-sm flex flex-col items-center">
        {/* Floating Badges */}
        <motion.div 
          variants={itemVariants}
          animate={{ 
            y: [0, -5, 0],
            rotate: [-4, -2, -4]
          }}
          transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
          className="absolute -top-12 -left-2 bg-white shadow-md rounded-2xl px-4 py-2 border border-outline-variant/10 z-20"
        >
          <p className="text-xs font-bold text-primary flex items-center gap-1">
            <Flame size={14} fill="currentColor" />
            前回は8件届きました
          </p>
        </motion.div>

        <motion.div 
          variants={itemVariants}
          animate={{ 
            y: [0, 5, 0],
            rotate: [6, 4, 6]
          }}
          transition={{ repeat: Infinity, duration: 5, ease: "easeInOut" }}
          className="absolute -top-6 -right-4 bg-[#ca9cff] text-[#26004a] shadow-md rounded-2xl px-4 py-2 z-20"
        >
          <p className="text-xs font-black flex items-center gap-1">
            <Mail size={14} fill="currentColor" />
            未確認スカウト 2件
          </p>
        </motion.div>

        {/* Central Toggle Button */}
        <motion.div variants={itemVariants} className="group relative w-64 h-64 flex items-center justify-center">
          <motion.div 
            animate={{ 
              scale: [1, 1.1, 1],
              opacity: [0.1, 0.3, 0.1]
            }}
            transition={{ repeat: Infinity, duration: 4 }}
            className="absolute inset-0 bg-primary rounded-full blur-3xl"
          ></motion.div>
          <motion.button 
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={onActivate}
            className="relative z-10 w-56 h-56 rounded-full bg-primary-container shadow-[0_20px_40px_rgba(170,44,50,0.2)] flex flex-col items-center justify-center border-8 border-white transition-all"
          >
            <motion.div
              animate={{ 
                y: [0, 8, 0],
                scale: [1, 0.9, 1]
              }}
              transition={{ 
                repeat: Infinity, 
                duration: 1, 
                ease: "easeInOut"
              }}
              className="relative"
            >
              <MousePointerClick size={56} className="text-[#4e0009] mb-2" />
              <motion.div
                animate={{ 
                  scale: [0.5, 1.8, 0.5],
                  opacity: [0, 0.4, 0]
                }}
                transition={{ 
                  repeat: Infinity, 
                  duration: 1,
                  ease: "easeOut"
                }}
                className="absolute top-2 left-2 w-10 h-10 bg-primary/30 rounded-full blur-md"
              />
            </motion.div>
            <span className="text-[#4e0009] font-black text-xl leading-tight">今働きたい</span>
            <span className="text-[#4e0009]/70 text-xs font-bold mt-1">タップして開始</span>
          </motion.button>
          
          <motion.div 
            animate={{ scale: [1, 1.2, 1] }}
            transition={{ repeat: Infinity, duration: 2 }}
            className="absolute bottom-4 -left-6 bg-white rounded-full p-2 shadow-md"
          >
            <CheckCircle2 size={20} className="text-primary" />
          </motion.div>
          <motion.div 
            animate={{ y: [0, -10, 0] }}
            transition={{ repeat: Infinity, duration: 3 }}
            className="absolute top-1/2 -right-8 bg-white rounded-full p-2 shadow-md"
          >
            <Star size={20} className="text-amber-400" fill="currentColor" />
          </motion.div>
        </motion.div>

        <motion.div variants={itemVariants} className="mt-12 text-center max-w-[280px]">
          <p className="text-on-surface-variant text-sm font-medium leading-relaxed">
            ボタンをONにすると、あなたのプロフィールがお店に公開され、お誘いが届くようになります。
          </p>
        </motion.div>
      </div>

      {/* Stats Bento */}
      <motion.div variants={itemVariants} className="w-full mt-12 grid grid-cols-2 gap-4">
        <div className="bg-white p-5 rounded-2xl shadow-sm border border-white/50 flex flex-col gap-2">
          <History size={24} className="text-secondary" />
          <div>
            <p className="text-[10px] font-bold text-on-surface-variant uppercase tracking-wider">Last Work</p>
            <p className="text-sm font-black">3日前: クラブ A</p>
          </div>
        </div>
        <div className="bg-white p-5 rounded-2xl shadow-sm border border-white/50 flex flex-col gap-2">
          <TrendingUp size={24} className="text-primary" />
          <div>
            <p className="text-[10px] font-bold text-on-surface-variant uppercase tracking-wider">Tonight's Forecast</p>
            <p className="text-sm font-black">非常に多い</p>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
};

const ActiveView = ({ onDeactivate }: { onDeactivate: () => void }) => {
  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="flex flex-col gap-8"
    >
      {/* Active Status Card */}
      <motion.section 
        animate={{ 
          boxShadow: ["0 0 20px rgba(74, 222, 128, 0.1)", "0 0 40px rgba(74, 222, 128, 0.3)", "0 0 20px rgba(74, 222, 128, 0.1)"]
        }}
        transition={{ repeat: Infinity, duration: 3 }}
        className="relative overflow-hidden bg-gradient-to-br from-emerald-50 to-white rounded-3xl p-8 text-center border border-emerald-100"
      >
        <div className="absolute top-0 left-0 w-full h-1 bg-emerald-400 opacity-20"></div>
        <div className="mb-4">
          <span className="text-on-surface-variant text-sm font-bold">現在、お店にあなたの意欲を公開中です 💌</span>
        </div>
        <div className="flex flex-col items-center gap-2 mb-6">
          <motion.div 
            animate={{ scale: [1, 1.02, 1] }}
            transition={{ repeat: Infinity, duration: 2 }}
            className="text-4xl font-black tracking-tight text-on-surface"
          >
            15分経過
          </motion.div>
          <div className="px-4 py-2 bg-primary/10 rounded-full">
            <span className="text-primary font-black text-sm">届いたスカウト：3件</span>
          </div>
        </div>
        <button 
          onClick={onDeactivate}
          className="text-sm font-bold text-on-surface-variant/70 underline underline-offset-4 hover:text-primary transition-colors"
        >
          受付を止める
        </button>
      </motion.section>

      {/* Scout List */}
      <div className="space-y-4">
        <div className="flex items-center justify-between mb-2 px-1">
          <h2 className="text-lg font-black flex items-center gap-2">
            <Sparkles size={20} className="text-primary animate-pulse" />
            新着スカウト
          </h2>
          <span className="text-xs text-on-surface-variant font-bold">リアルタイム更新中</span>
        </div>

        {SCOUTS.map((scout, i) => (
          <motion.div 
            key={scout.id}
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: i * 0.1 }}
            whileTap={{ scale: 0.98 }}
            className="group bg-white rounded-2xl p-4 shadow-sm border-l-4 border-primary transition-all hover:shadow-md"
          >
            <div className="flex gap-4">
              <div className="w-14 h-14 rounded-xl overflow-hidden flex-shrink-0 shadow-inner">
                <img 
                  src={scout.imageUrl} 
                  alt={scout.shopName} 
                  className="w-full h-full object-cover"
                  referrerPolicy="no-referrer"
                />
              </div>
              <div className="flex-1">
                <div className="flex justify-between items-start mb-1">
                  <h3 className="font-black text-sm">{scout.shopName}</h3>
                  {scout.isNew ? (
                    <motion.span 
                      animate={{ scale: [1, 1.1, 1] }}
                      transition={{ repeat: Infinity, duration: 1.5 }}
                      className="text-[10px] bg-primary text-white px-2 py-0.5 rounded-full font-black"
                    >
                      NEW
                    </motion.span>
                  ) : (
                    <span className="text-[10px] text-on-surface-variant font-bold">{scout.timeAgo}</span>
                  )}
                </div>
                <p className="text-xs text-on-surface-variant mb-2 line-clamp-1 font-medium">{scout.catchphrase}</p>
                <div className="flex gap-2">
                  <span className="text-[10px] font-black text-primary bg-primary/5 px-2 py-0.5 rounded">時給 {scout.hourlyRate}</span>
                  {scout.tags.map(tag => (
                    <span key={tag} className="text-[10px] font-black text-secondary bg-surface-container px-2 py-0.5 rounded">{tag}</span>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Advice Bubble */}
      <motion.div 
        whileHover={{ scale: 1.02 }}
        className="bg-[#f3e8ff] rounded-2xl p-5 relative shadow-sm border border-purple-100"
      >
        <div className="absolute -top-3 left-6 bg-[#7343a9] text-white text-[10px] font-black px-3 py-1 rounded-full shadow-md flex items-center gap-1">
          アドバイス 💡
        </div>
        <p className="text-sm text-[#450e7b] font-bold leading-relaxed pt-1">
          北新地エリアは21時以降にスカウトが活発になります！<br/>「時給交渉可」のフラグを立てると、より好条件なオファーが届きやすくなりますよ。
        </p>
      </motion.div>
    </motion.div>
  );
};

// --- Scout List View Component ---
const ScoutListView = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1 }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  };

  return (
    <motion.div 
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      className="flex flex-col gap-6"
    >
      {/* Page Title & Status */}
      <motion.div variants={itemVariants} className="flex justify-between items-end mb-2 px-2">
        <div>
          <p className="text-on-surface-variant text-xs font-bold mb-1 uppercase tracking-widest">Newest Offers</p>
          <h2 className="text-2xl font-black">届いたスカウト <span className="text-primary text-3xl font-black ml-1">12</span><span className="text-sm font-bold text-on-surface-variant ml-1">件</span></h2>
        </div>
        <motion.button 
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="flex items-center gap-1.5 text-on-surface-variant px-4 py-2 bg-white rounded-2xl shadow-sm border border-outline-variant/10 transition-colors"
        >
          <SlidersHorizontal size={16} className="text-primary" />
          <span className="text-xs font-black">並び替え</span>
        </motion.button>
      </motion.div>

      {/* Filter Chips Section */}
      <motion.section variants={itemVariants} className="space-y-4 mb-4">
        <div className="flex gap-2 overflow-x-auto no-scrollbar pb-1">
          <motion.button whileTap={{ scale: 0.95 }} className="whitespace-nowrap px-5 py-2.5 rounded-full border-2 border-primary bg-primary/5 text-primary font-black text-sm shadow-sm">今日行ける</motion.button>
          <motion.button whileTap={{ scale: 0.95 }} className="whitespace-nowrap px-5 py-2.5 rounded-full border-2 border-outline-variant/20 bg-white text-on-surface-variant font-black text-sm shadow-sm">未経験OK</motion.button>
          <motion.button whileTap={{ scale: 0.95 }} className="whitespace-nowrap px-5 py-2.5 rounded-full border-2 border-outline-variant/20 bg-white text-on-surface-variant font-black text-sm shadow-sm">終電OK</motion.button>
        </div>
        <div className="flex gap-2 overflow-x-auto no-scrollbar">
          <motion.button whileTap={{ scale: 0.95 }} className="flex items-center gap-1 whitespace-nowrap px-4 py-2.5 rounded-2xl bg-white border border-outline-variant/10 text-on-surface-variant text-xs font-black shadow-sm">
            ジャンル：すべて
            <ChevronRight size={14} className="rotate-90" />
          </motion.button>
          <motion.button whileTap={{ scale: 0.95 }} className="flex items-center gap-1 whitespace-nowrap px-4 py-2.5 rounded-2xl bg-white border border-outline-variant/10 text-on-surface-variant text-xs font-black shadow-sm">
            時給帯：¥6,000〜
            <ChevronRight size={14} className="rotate-90" />
          </motion.button>
        </div>
      </motion.section>

      {/* Scout Card List */}
      <div className="space-y-6">
        {/* High Value Card */}
        <motion.article 
          variants={itemVariants}
          whileHover={{ y: -4 }}
          className="relative bg-white rounded-3xl overflow-hidden border-2 border-primary p-6 shadow-[0_10px_30px_rgba(170,44,50,0.1)]"
        >
          <div className="absolute top-0 left-0 bg-primary text-white text-[10px] px-4 py-1.5 rounded-br-2xl font-black tracking-wider">NEW</div>
          <motion.div 
            animate={{ opacity: [0.6, 1, 0.6] }}
            transition={{ repeat: Infinity, duration: 2 }}
            className="absolute top-0 right-0 bg-primary/10 text-primary text-[10px] px-4 py-1.5 rounded-bl-2xl font-black"
          >
            本日あと2枠
          </motion.div>
          
          <div className="flex justify-between items-start mb-4 mt-4">
            <div className="space-y-1">
              <div className="flex items-center gap-2">
                <span className="text-4xl font-black text-primary tracking-tighter">¥8,000</span>
                <span className="text-[10px] font-black bg-primary/10 text-primary px-2 py-1 rounded-lg">本日OK</span>
              </div>
              <div className="flex gap-1.5">
                <span className="text-[10px] font-black text-on-surface-variant px-3 py-1.5 bg-surface-container rounded-full">終電OK</span>
                <span className="text-[10px] font-black text-on-surface-variant px-3 py-1.5 bg-surface-container rounded-full">送迎あり</span>
              </div>
            </div>
            <div className="w-16 h-16 rounded-2xl overflow-hidden shadow-md border-2 border-white">
              <img 
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuDDXAj_9l1Zv-fVJfygcB3bNUBjSNGjfyWFz7A6PyjfOhuLLfbrQpByzzl24JwK32GuT__VepFddvPq6fDMWo42REfQnMPuJQZuFG8x2Jh5PYtyO87t8Y7hGJ6RLtv6Fx0-25xoz9d_utcoVRksoK8aNH8Dr-Vw3F97XpxZ7yRkrNGeavUI0blM9uXWh2EwZ8juHEg49vUGvCbCueKxwlWDzm_4QwIl7JEwjUvRLN4Gs_vFxAawKkRNcZ5x2gUHuDkTa8v_VMXyM6A" 
                alt="Shop" 
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
            </div>
          </div>
          
          <div className="space-y-2 mb-6">
            <h3 className="text-lg font-black leading-tight">北新地ラウンジ A</h3>
            <p className="text-sm text-on-surface-variant font-bold leading-relaxed">
              今夜はキャストが不足しています！<br />
              未経験の方でも時給8,000円保証。21時からの短時間でも大歓迎です ✨
            </p>
          </div>
          
          <motion.button 
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="w-full py-4 bg-primary text-white rounded-2xl font-black text-base shadow-lg shadow-primary/20 flex items-center justify-center gap-2"
          >
            詳細を見る・返信する
            <ChevronRight size={18} />
          </motion.button>
        </motion.article>

        {/* Regular Cards */}
        {[
          { shop: 'クラブ B', rate: '¥7,000', tags: ['ノルマなし', '全額日払い'], time: '1時間前' },
          { shop: 'ラウンジ C', rate: '¥6,500', tags: ['衣装貸出', '送りあり'], time: '3時間前' }
        ].map((scout, i) => (
          <motion.article 
            key={i} 
            variants={itemVariants}
            whileHover={{ x: 5 }}
            className="bg-white rounded-3xl p-5 shadow-sm border border-outline-variant/10 flex gap-4"
          >
            <div className="w-20 h-20 rounded-2xl bg-surface-container overflow-hidden shadow-inner flex-shrink-0">
               <img 
                src={`https://picsum.photos/seed/shop${i}/200/200`} 
                alt="Shop" 
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
            </div>
            <div className="flex-1">
              <div className="flex justify-between items-start mb-1">
                <h3 className="font-black text-base">{scout.shop}</h3>
                <span className="text-[10px] text-on-surface-variant font-bold">{scout.time}</span>
              </div>
              <div className="flex items-baseline gap-1 mb-2">
                <span className="text-xl font-black text-primary">{scout.rate}</span>
                <span className="text-[10px] font-bold text-on-surface-variant">〜</span>
              </div>
              <div className="flex gap-1.5">
                {scout.tags.map(tag => (
                  <span key={tag} className="text-[9px] font-black text-secondary bg-secondary/5 px-2 py-1 rounded-md">{tag}</span>
                ))}
              </div>
            </div>
          </motion.article>
        ))}
      </div>
    </motion.div>
  );
};

export default function App() {
  const [state, setState] = useState<AppState>('landing');
  const [activeTab, setActiveTab] = useState('home');

  // Handle tab change
  const handleTabChange = (tab: string) => {
    setActiveTab(tab);
  };

  const renderContent = () => {
    if (state === 'landing') {
      return (
        <motion.div
          key="landing"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          <LandingView onLogin={() => setState('home')} />
        </motion.div>
      );
    }

    switch (activeTab) {
      case 'home':
        return (
          <AnimatePresence mode="wait">
            {state === 'home' ? (
              <motion.div
                key="home"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.3 }}
              >
                <HomeView onActivate={() => setState('active')} />
              </motion.div>
            ) : (
              <motion.div
                key="active"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.3 }}
              >
                <ActiveView onDeactivate={() => setState('home')} />
              </motion.div>
            )}
          </AnimatePresence>
        );
      case 'scout':
        return (
          <motion.div
            key="scout-list"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            transition={{ duration: 0.3 }}
          >
            <ScoutListView />
          </motion.div>
        );
      case 'message':
        return (
          <motion.div
            key="message"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            transition={{ duration: 0.3 }}
            className="flex flex-col items-center justify-center pt-20 text-center"
          >
            <div className="w-24 h-24 bg-surface-container rounded-full flex items-center justify-center mb-6 text-on-surface-variant/30">
              <MessageCircle size={48} />
            </div>
            <h2 className="text-xl font-black mb-2">メッセージはまだありません</h2>
            <p className="text-on-surface-variant text-sm font-medium px-12">お店からのオファーに返信すると、ここにチャットが表示されます。</p>
          </motion.div>
        );
      case 'mypage':
        return (
          <motion.div
            key="mypage"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            transition={{ duration: 0.3 }}
            className="flex flex-col items-center justify-center pt-20 text-center"
          >
            <div className="w-24 h-24 bg-surface-container rounded-full flex items-center justify-center mb-6 text-on-surface-variant/30">
              <User size={48} />
            </div>
            <h2 className="text-xl font-black mb-2">プロフィール設定</h2>
            <p className="text-on-surface-variant text-sm font-medium px-12">自撮り写真の更新や、希望条件の変更はこちらから行えます。</p>
            <motion.button 
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setState('landing')}
              className="mt-8 text-primary font-black text-sm underline underline-offset-4"
            >
              ログアウト
            </motion.button>
          </motion.div>
        );
      default:
        return null;
    }
  };

  return (
    <div className="bg-surface text-on-surface font-sans min-h-screen selection:bg-primary/20">
      {state !== 'landing' && <TopBar state={state} />}
      
      <main className={`max-w-md mx-auto ${state === 'landing' ? '' : 'pt-24 pb-32 px-6'}`}>
        <AnimatePresence mode="wait">
          {renderContent()}
        </AnimatePresence>
      </main>

      {state !== 'landing' && (
        <BottomNav activeTab={activeTab} onTabChange={handleTabChange} />
      )}
    </div>
  );
}
