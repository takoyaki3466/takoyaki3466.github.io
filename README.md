# Portfolio Website

白を基調とした、ビルド不要の静的ポートフォリオサイトです。GitHub Pages で公開できます。

## ページ

- `/index.html` — ホーム（制作物一覧）
- `/projects/mojibattleex/index.html` — MojiBattleEX
- `/projects/curriculum/index.html` — CurriculumManager
- `/projects/manaitamtk/index.html` — ManaitaMTK
- `/projects/manaitapp/index.html` — Manaita++
- `/projects/peaaevolution/index.html` — PEAA-Evolution
- `/projects/simpleitemedit/index.html` — SimpleItemEdit

## ローカルで確認

`index.html` をブラウザで開いてください。外部のフォントを使用していますが、ネットワーク接続がない場合はシステムフォントにフォールバックします。

## GitHub Pages で公開

1. GitHub に `ユーザー名.github.io` という名前の公開リポジトリを作成します。
2. このフォルダの **中身** をリポジトリのルートにアップロードします（`index.html` がルートにある状態にしてください）。
3. リポジトリの **Settings → Pages** で **Deploy from a branch** を選択し、ブランチ `main`、フォルダ `/(root)` を指定して保存します。
4. `https://ユーザー名.github.io/` にアクセスします。反映に時間がかかる場合があります。

## 作品の追加方法

1. `projects/作品ID/index.html` を追加します。共通の `assets/css/projects/common.css` を利用できます。
2. トップページ `index.html` の `.project-grid` 内に `.project-card` を追加し、リンクを新しい作品ページに変更します。
3. ホームの共通デザインは `assets/css/style.css`、詳細ページは `assets/css/projects/common.css` で管理します。

## 翻訳

共通の翻訳ローダーは `assets/js/i18n.js`、日本語辞書は `assets/lang/ja_jp.json` です。翻訳取得に失敗した場合もHTML内の日本語フォールバックを表示します。ページ固有の長文は、画像なしで直接開いた場合にも内容が読めるよう現状はHTML側へ残しています。

## アニメーションライブラリ

| ページ | ライブラリ | バージョン | 公式URL |
|---|---|---:|---|
| MojiBattleEX | Animate.css | 4.1.1 | https://animate.style/ |
| CurriculumManager | AOS | 2.3.4 | https://michalsnik.github.io/aos/ |
| ManaitaMTK | GSAP + ScrollTrigger | 3.13.0 | https://gsap.com/ |
| Manaita++ | ScrollReveal | 4.0.9 | https://scrollrevealjs.org/ |
| PEAA-Evolution | Anime.js | 3.2.2 | https://animejs.com/ |
| SimpleItemEdit | Motion | 12.23.24 | https://motion.dev/ |

各ライブラリは固定バージョンのCDNを参照します。読み込みに失敗しても本文と操作要素は通常のHTMLとして閲覧できます。`prefers-reduced-motion` が有効な場合はページ固有の動きを停止します。

## ディレクトリ

```text
index.html
projects/
  mojibattleex/
    index.html
assets/
  css/
    style.css
    projects/
  images/
    placeholders/
  js/
    main.js
    i18n.js
    animations/
  lang/
    ja_jp.json
README.md
```

サーバーサイド処理やビルドツールは使用していません。サイト内のリンクは相対パスなので、ユーザーサイトだけでなくプロジェクトサイトのサブパスでも利用できます。
