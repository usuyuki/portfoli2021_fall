<!-- @format -->

# 4 代目うすゆきポートフォリオ

https://pf.usuyuki.net/

## フロントエンド

Next.js

## バックエンド API

Drupal

## よく使う command 置き場

ローカルサーバー

```
npm run dev
```

package.json で使用していない package を消す

```
npx depcheck
```

更新

```
npm update
```

## 最適化

- フォントはディレクトリで保持より Google Font 呼び出しのほうが早い(Next.js の最適化も Head 内だとされる)
- マテリアルアイコンは外部呼び出しよりディレクトリで保持の方が早い
- 画像は Image で読み込む。
