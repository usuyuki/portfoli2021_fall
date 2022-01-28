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

- フォントもマテリアルアイコンも全部自前持ちが早い(Next.js の Head でのフォント最適化や GoogleFonts の遅延を加味しても、それよりも早い)
- 画像は Image で読み込む。(next.config.js に API のドメイン設定必要)

### PageSpeed Insights での結果

| 名前                       | sp スコア | pc スコア |
| -------------------------- | --------- | --------- |
| 全部外部                   | 68        | 93        |
| マテリアルアイコンのみ自前 | 70        | 98        |
| 全部自前                   | 94        | 99        |

※マテリアルアイコンでない GoogleFonts は最適化されるため、外部読み込みでもそれなりに早い。

main にコミットしないこと！！！！！！
