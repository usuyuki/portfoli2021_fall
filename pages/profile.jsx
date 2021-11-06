/** @format */

import Layout from "../components/layout";
import Heading1 from "../components/decoration/heading1";
import TimelineLayout from "../components/frames/timelineLayout";
import TechStackLayout from "../components/frames/techStackLayout";

export const getStaticProps = async () => {
  const history = await fetch(
    "https://usuyuki.net/jsonapi/node/history?sort=field_history_date&include=field_history_genre"
  ).then((r) => r.json());
  const tech_stack = await fetch(
    "https://usuyuki.net/jsonapi/node/tech_stack?include=field_tech_stack_genre"
  ).then((r) => r.json());
  return { props: { history, tech_stack }, revalidate: 120 };
};

export default function Home({ history, tech_stack }) {
  let title_prefix = "プロフィール";
  let pageTitle = "Profile";

  let history_genre_names = {}; //[ジャンルid]=ジャンル名
  let tech_stack_genre_names = {}; //[ジャンルid]=ジャンル名
  let value_sortedBy_genreHI = {}; //[ジャンルid]=ジャンル名
  let value_sortedBy_genreTS = {}; //[ジャンルid]=ジャンル名
  //連想配列の初期化をしておく
  value_sortedBy_genreHI["その他"] = [];
  value_sortedBy_genreHI["仕事"] = [];
  value_sortedBy_genreHI["団体"] = [];
  value_sortedBy_genreHI["学業"] = [];
  value_sortedBy_genreHI["資格"] = [];

  value_sortedBy_genreTS["CMS"] = [];
  value_sortedBy_genreTS["ソフトウェア"] = [];
  value_sortedBy_genreTS["フレームワーク"] = [];
  value_sortedBy_genreTS["プログラミング言語"] = [];
  value_sortedBy_genreTS["環境"] = [];

  /**
   * ジャンル取得
   */
  history.included.forEach((element) => {
    history_genre_names[element.id] = element.attributes.name;
  });
  tech_stack.included.forEach((element) => {
    tech_stack_genre_names[element.id] = element.attributes.name;
  });

  /**
   * ジャンルごとに分ける
   */

  history.data.forEach((value) => {
    switch (
      history_genre_names[value.relationships.field_history_genre.data[0].id]
    ) {
      case "その他":
        value_sortedBy_genreHI["その他"].push([
          value.attributes.field_history_date,
          value.attributes.title,
          value.attributes.body != null ? value.attributes.body.value : "",
          history_genre_names[
            value.relationships.field_history_genre.data[0].id
          ],
        ]);
        break;
      case "アルバイト":
      case "仕事":
        value_sortedBy_genreHI["仕事"].push([
          value.attributes.field_history_date,
          value.attributes.title,
          value.attributes.body != null ? value.attributes.body.value : "",
          history_genre_names[
            value.relationships.field_history_genre.data[0].id
          ],
        ]);
        break;
      case "団体":
        value_sortedBy_genreHI["団体"].push([
          value.attributes.field_history_date,
          value.attributes.title,
          value.attributes.body != null ? value.attributes.body.value : "",
          history_genre_names[
            value.relationships.field_history_genre.data[0].id
          ],
        ]);
        break;
      case "資格":
        value_sortedBy_genreHI["資格"].push([
          value.attributes.field_history_date,
          value.attributes.title,
          value.attributes.body != null ? value.attributes.body.value : "",
          history_genre_names[
            value.relationships.field_history_genre.data[0].id
          ],
        ]);
        break;
      case "学業":
        value_sortedBy_genreHI["学業"].push([
          value.attributes.field_history_date,
          value.attributes.title,
          value.attributes.body != null ? value.attributes.body.value : "",
          history_genre_names[
            value.relationships.field_history_genre.data[0].id
          ],
        ]);
        break;
      default:
        console.log("抜け漏れあり");
    }
  });

  /**
   * ジャンルごとに分ける
   */
  tech_stack.data.forEach((value) => {
    switch (
      tech_stack_genre_names[value.relationships.field_tech_stack_genre.data.id]
    ) {
      case "CMS":
        value_sortedBy_genreTS["CMS"].push([
          value.attributes.title,
          value.attributes.field_tech_stack_maturity,
          value.attributes.field_tech_stack_logo_large.processed,
        ]);
        break;
      case "ソフトウェア":
        value_sortedBy_genreTS["ソフトウェア"].push([
          value.attributes.title,
          value.attributes.field_tech_stack_maturity,
          value.attributes.field_tech_stack_logo_large.processed,
        ]);
        break;
      case "フレームワーク":
        value_sortedBy_genreTS["フレームワーク"].push([
          value.attributes.title,
          value.attributes.field_tech_stack_maturity,
          value.attributes.field_tech_stack_logo_large.processed,
        ]);
        break;
      case "環境":
        value_sortedBy_genreTS["環境"].push([
          value.attributes.title,
          value.attributes.field_tech_stack_maturity,
          value.attributes.field_tech_stack_logo_large.processed,
        ]);
        break;
      case "プログラミング言語":
        value_sortedBy_genreTS["プログラミング言語"].push([
          value.attributes.title,
          value.attributes.field_tech_stack_maturity,
          value.attributes.field_tech_stack_logo_large.processed,
        ]);
        break;
      default:
        console.log("抜け漏れあり");
    }
  });

  //出力
  return (
    <div>
      <Layout title_prefix={title_prefix} pageTitle={pageTitle}>
        <div>
          <h2 className="text-center my-4 mx-4 text-3xl">うすゆき</h2>
          <div className="flex justify-center">
            <div className="w-full md:w-1/2">
              <p className="">Age:19</p>
            </div>
            <div className="w-full md:w-1/2">
              <span className=" material-icons text-center inline-block">
                cottage
              </span>
              <p className="">Birthplace:Tottori Prefecture</p>
              <p className="">Hometown:Shimane Prefecture</p>
              <p className="">Residence:Tochigi Prefecture</p>
            </div>
          </div>
        </div>
        <div className="">
          <article>
            <Heading1 title={"学業"} />
            <TimelineLayout content={value_sortedBy_genreHI["学業"]} />
          </article>
          <article>
            <Heading1 title={"仕事"} />
            <TimelineLayout content={value_sortedBy_genreHI["仕事"]} />
          </article>
          <article>
            <Heading1 title={"資格"} />
            <TimelineLayout content={value_sortedBy_genreHI["資格"]} />
          </article>
          <article>
            <Heading1 title={"団体"} />
            <TimelineLayout content={value_sortedBy_genreHI["団体"]} />
          </article>
        </div>
        <div className="">
          <article>
            <Heading1 title={"プログラミング言語"} />
            <TechStackLayout
              content={value_sortedBy_genreTS["プログラミング言語"]}
            />
          </article>
          <article>
            <Heading1 title={"フレームワーク"} />
            <TechStackLayout
              content={value_sortedBy_genreTS["フレームワーク"]}
            />
          </article>
          <article>
            <Heading1 title={"CMS"} />
            <TechStackLayout content={value_sortedBy_genreTS["CMS"]} />
          </article>
          <article>
            <Heading1 title={"ソフトウェア"} />
            <TechStackLayout content={value_sortedBy_genreTS["ソフトウェア"]} />
          </article>
          <article>
            <Heading1 title={"環境"} />
            <TechStackLayout content={value_sortedBy_genreTS["環境"]} />
          </article>
        </div>
      </Layout>
    </div>
  );
}
