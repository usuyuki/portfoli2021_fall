/** @format */

import Layout from "../components/layout";
import SiteExplainCard from "../components/cards/siteExplainCard";
import Heading2 from "../components/decoration/heading2";
export default function Blogs({}) {
  let title_prefix = "ブログ";
  let pageTitle = "Blogs";

  return (
    <div>
      <Layout title_prefix={title_prefix} pageTitle={pageTitle}>
        <h2 className="mx-2 mt-10 mb-2 text-center">
          書き物のリンク置き場です。
          <br />
          時と気分で書く場所を別けてしまった負債です……
        </h2>
        <Heading2 title="セルフホストしてる置き場" icon="dns" />
        <div className="flex justify-center flex-wrap ">
          <SiteExplainCard
            title="うすゆきブログ"
            url="https://blog.usuyuki.net"
            description="雑多な書き物置き場"
          />
          <SiteExplainCard
            title="neo.usuyuki.net"
            url="https://neo.usuyuki.net"
            description="シンプルで洒落たエッセイを目指した書き物"
          />
        </div>
        <Heading2 title="技術情報共有サービス系" icon="language" />
        <div className="flex justify-center flex-wrap">
          <SiteExplainCard
            title="Zenn"
            url="https://zenn.dev/usuyuki"
            description="Zennの素敵なUIに任せて、書き残した技術系？の書き物"
          />
          <SiteExplainCard
            title="Qiita"
            url="https://qiita.com/Usuyuki"
            description="備忘録中心"
          />
        </div>
        <Heading2 title="いにしえ" icon="topic" />
        <div className="flex justify-center flex-wrap">
          <SiteExplainCard
            title="Note"
            url="https://note.com/usuyuki26"
            description="大学1年生の時の自ブログを始める前の書き物"
          />
          <SiteExplainCard
            title="Amebaブログ"
            url="https://ameblo.jp/usuyuki92/entrylist.html"
            description="現存する高校生の時に残していた書き物"
          />
        </div>
      </Layout>
    </div>
  );
}
