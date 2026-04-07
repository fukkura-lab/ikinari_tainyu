# サイトマップ & リンク構造

## ページ一覧

| パス | ページ名 | ファイル |
|------|---------|---------|
| `/` | トップページ（キャスト向け） | `app/src/app/page.tsx` |
| `/dashboard` | ダッシュボード（ホーム） | `app/src/app/(app)/dashboard/page.tsx` |
| `/scouts` | スカウト一覧 | `app/src/app/(app)/scouts/page.tsx` |
| `/scouts/[id]` | スカウト詳細 | `app/src/app/(app)/scouts/[id]/page.tsx` |
| `/messages` | メッセージ | `app/src/app/(app)/messages/page.tsx` |
| `/favorites` | お気に入り | `app/src/app/(app)/favorites/page.tsx` |
| `/mypage` | マイページ | `app/src/app/(app)/mypage/page.tsx` |

## ナビゲーション構造

```
トップページ - キャスト向け (/)
├── ログイン → /dashboard
├── スカウトを受け取る(CTA x3) → /dashboard
└── フッターリンク(未実装)
    ├── 店舗様向けページ → #
    ├── 運営会社について → #
    ├── 利用規約 → #
    └── プライバシーポリシー → #

ダッシュボード (/dashboard)
└── お気に入り → /favorites

スカウト一覧 (/scouts)
└── スカウト詳細 → /scouts/[id]

スカウト詳細 (/scouts/[id])
└── 戻る → /scouts

お気に入り (/favorites)
├── 戻る → /dashboard
└── スカウト詳細 → /scouts/[id]

マイページ (/mypage)
└── ログアウト → /
```

## 共通ナビゲーション

### ボトムナビ (`app/src/components/bottom-nav.tsx`)
アプリ内ページ共通で表示される固定ナビゲーション:

| アイコン | ラベル | リンク先 |
|---------|--------|---------|
| home | ホーム | `/dashboard` |
| mail | スカウト | `/scouts` |
| chat_bubble | メッセージ | `/messages` |
| person | マイページ | `/mypage` |

## 注意事項

- フッターリンク4件は `href="#"` で未実装
- スカウト一覧の一部カードが `/scouts/1` にハードコードされている（動的IDにすべき）
- 外部リンクは現時点でなし
