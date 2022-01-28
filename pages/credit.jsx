/** @format */

import Layout from "../components/layout";
import Heading1 from "../components/decoration/heading1";
import CreditFrame from "../components/frames/creditFrame";
// レンダリング前に実行される

export default function Credit() {
  let title_prefix = "Credit";
  let pageTitle = "Credit";
  // const { data, error } = useSWR("https://usuyuki.net/jsonapi/node/link");
  // const [data, setData] = useState({ message: "", data: [] })

  return (
    <div>
      <Layout title_prefix={title_prefix} pageTitle={pageTitle}>
        <h3 className="text-center text-3xl mt-24 pb-12 lg:pb-0 mb-4 mx-4">
          くれじっと
        </h3>
        <p className="text-center text-xl mb-4 mx-4">
          ※ライセンスが不明となっている箇所は、勝手に使用しているのではなく、具体的なライセンスが記載されていないため「不明」としています。
        </p>
        <Heading1 title={"Library"} />
        <CreditFrame
          title="NEXT.js"
          copyright="Copyright (c) 2021 Vercel, Inc."
          license="MIT"
          description="このページを動かしています。"
          licenseLink="https://github.com/vercel/next.js/blob/canary/license.md"
          productLink="https://nextjs.org/"
        />
        <CreditFrame
          title="tailwindcss"
          copyright="Copyright (c) Adam Wathan <adam.wathan@gmail.com>,Copyright (c) Jonathan Reinink <jonathan@reinink.ca>"
          license="MIT"
          description="CSSライブラリとして使用しています。"
          licenseLink="https://github.com/tailwindlabs/tailwindcss/blob/master/LICENSE"
          productLink="https://tailwindcss.com/"
        />
        <CreditFrame
          title="Drupal"
          license="GNU General Public License v2.0"
          copyright=""
          description="Worksを管理するためのAPIとして利用しているCMSです。"
          licenseLink="https://www.drupal.org/about/licensing#drupal-license"
          productLink="https://www.drupal.org/"
        />
        <CreditFrame
          title="react-images-loaded"
          license="MIT"
          copyright="Copyright (c) 2017 Øyvind Hermansen"
          description="画像の遅延読み込み周りで使用しています"
          licenseLink="hhttps://github.com/oyvindhermansen/react-images-loaded/blob/master/LICENSE"
          productLink="https://github.com/oyvindhermansen/react-images-loaded"
        />
        <Heading1 title={"画像"} />
        <CreditFrame
          title="grass-graph"
          license="不明"
          copyright="Copyright © 2016　A-Know / Moshimo-Works All Rights Are Reserved."
          description="トップページでのGitHubの草を表示に使用しています。"
          licenseLink="https://grass-graph.appspot.com/"
          productLink="https://grass-graph.appspot.com/"
        />
        <CreditFrame
          title="github-profile-summary-cards "
          license="MIT"
          copyright="Copyright (c) 2020 VN7"
          description="トップページでのGitHubの言語情報表示に使用しています。"
          licenseLink="https://github.com/vn7n24fzkq/github-profile-summary-cards/blob/master/LICENSE"
          productLink="https://github.com/vn7n24fzkq/github-profile-summary-cards"
        />
        <CreditFrame
          title="ICOOON MONO"
          license="不明"
          copyright="© Copyright TopeconHeroes !"
          description="トップページでの人形ピクトグラムに使用しています。"
          licenseLink="https://icooon-mono.com/license/"
          productLink="https://icooon-mono.com/"
        />
        <CreditFrame
          title="DEVICON"
          license="MIT"
          copyright="Copyright (c) 2015 konpa"
          description="Profileページでの技術スタックアイコンにて使用しています。"
          licenseLink="https://github.com/devicons/devicon/blob/master/LICENSE"
          productLink="https://devicon.dev/"
        />
        <CreditFrame
          title="ICOON MONO"
          license="不明"
          copyright="© Copyright TopeconHeroes ! all right reserved."
          description="Profileページでの技術スタックアイコン(DEVICONに無いものなど)にて使用しています。"
          licenseLink="https://icooon-mono.com/license/"
          productLink="https://icooon-mono.com/"
        />
        <Heading1 title={"CSSアニメーション"} />
        <CreditFrame
          title="css-loaders"
          license="MIT"
          copyright="Copyright (c) 2014 Luke Haas"
          description="ギャラリー画像での画像読み込み時に使用しています。"
          licenseLink="https://github.com/lukehaas/css-loaders/blob/step2/LICENSE"
          productLink="https://projects.lukehaas.me/css-loaders/"
        />
        <Heading1 title={"カラー"} />
        <CreditFrame
          title="和風カラーパレット 10 卯の花"
          license="なし"
          copyright="@neohimeism"
          description="このサイトのカラーパレットとして採用させていただいております。"
          licenseLink="https://twitter.com/neohimeism"
          productLink="https://twitter.com/neohimeism/status/1356211042108497920"
        />
        <Heading1 title={"フォント"} />
        <CreditFrame
          title="キウイ丸"
          license="OFL-1.1 License"
          copyright="Copyright 2020 The Kiwi Maru Project Authors"
          description="このサイトのメインのフォントとして利用しています。"
          licenseLink="https://github.com/Kiwi-KawagotoKajiru/Kiwi-Maru/blob/master/OFL.txt"
          productLink="https://github.com/Kiwi-KawagotoKajiru/Kiwi-Maru"
        />
        <CreditFrame
          title="ランパート One-Regular"
          license="OFL-1.1 License"
          copyright="Copyright 2020 The Rampart Project Authors"
          description="worksページの見出しフォントとして利用しています。"
          licenseLink="https://github.com/fontworks-fonts/Rampart/blob/master/OFL.txt"
          productLink="https://github.com/fontworks-fonts/Rampart/blob/master/README-JP.md"
        />
        <CreditFrame
          title="Material Icons"
          license="Apache License 2.0"
          copyright=""
          description="見出しなどのアイコンで利用しています"
          licenseLink="https://github.com/google/material-design-icons/blob/master/LICENSE"
          productLink="https://fonts.google.com/icons?selected=Material+Icons"
        />
      </Layout>
    </div>
  );
}
