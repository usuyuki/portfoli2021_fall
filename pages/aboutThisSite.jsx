/** @format */

import Layout from "../components/layout";
import Hr from "../components/decoration/hr";

// レンダリング前に実行される

export default function Credit() {
  let title_prefix = "このサイトについて";
  let pageTitle = "aboutThisSite";
  // const { data, error } = useSWR("https://usuyuki.net/jsonapi/node/link");
  // const [data, setData] = useState({ message: "", data: [] })

  return (
    <div>
      <Layout title_prefix={title_prefix} pageTitle={pageTitle}>
        <p className="text-center mx-2 my-12 text-xl">
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://github.com/Usuyuki/portfoli2021_fall"
            className="text-center"
          >
            GitHubリポジトリ
          </a>
        </p>
        <Hr />
        <div className="my-12 flex justify-center ">
          <p className="mx-8 md:w-1/2 ">
            本サイトでは「GoogleAnalytics」を利用しています。
            このGoogleAnalyticsはトラフィックデータの収集のためにクッキー（Cookie）を使用しております。
            トラフィックデータは匿名で収集されており、個人を特定するものではありません。
            この機能はCookieを無効にすることで収集を拒否することが出来ますので、お使いのブラウザの設定をご確認ください。
          </p>
        </div>
        <p className="text-center mx-8 my-12 text-sm">
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://policies.google.com/technologies/partner-sites?hl=ja"
            className="text-center"
          >
            Googleのサービスを使用するサイトやアプリから収集した情報のGoogleによる使用
          </a>
        </p>
        <Hr />
      </Layout>
    </div>
  );
}
