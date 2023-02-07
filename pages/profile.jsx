/** @format */

import Layout from "../components/layout";
import Heading1 from "../components/decoration/heading1";
import AboutMeFrame from "../components/frames/aboutMeFrame";
import TimelineLayout from "../components/frames/timelineLayout";
import TechStackLayout from "../components/frames/techStackLayout";
import HobbyLayout from "../components/frames/hobbyLayout";

export const getStaticProps = async () => {
  const history = await fetch(
    "https://pfapi.usuyuki.net/jsonapi/node/history?sort=field_history_date&include=field_history_genre"
  ).then((r) => r.json());
  const tech_stack = await fetch(
    "https://pfapi.usuyuki.net/jsonapi/node/tech_stack?include=field_tech_stack_genre"
  ).then((r) => r.json());
  const hobby = await fetch(
    "https://pfapi.usuyuki.net/jsonapi/node/hobby?include=field_hobby_rate"
  ).then((r) => r.json());
  return { props: { history, tech_stack, hobby }, revalidate: 120 };
};

export default function Home({ history, tech_stack, hobby }) {
  let title_prefix = "プロフィール";
  let pageTitle = "Profile";

  let history_genre_names = {}; //[ジャンルid]=ジャンル名
  let tech_stack_genre_names = {}; //[ジャンルid]=ジャンル名
  let hobby_stack_hobby_rate = {}; //[ジャンルid]=ジャンル名
  let value_sortedBy_genreHI = {}; //[ジャンルid]=ジャンル名
  let value_sortedBy_genreTS = {}; //[ジャンルid]=ジャンル名
  let value_sortedBy_genreHY = {}; //[ジャンルid]=ジャンル名
  //連想配列の初期化をしておく
  value_sortedBy_genreHI["その他"] = [];
  value_sortedBy_genreHI["仕事"] = [];
  value_sortedBy_genreHI["団体"] = [];
  value_sortedBy_genreHI["学業"] = [];
  value_sortedBy_genreHI["資格"] = [];
  value_sortedBy_genreHI["コンテスト"] = [];

  value_sortedBy_genreTS["CMS"] = [];
  value_sortedBy_genreTS["ソフトウェア"] = [];
  value_sortedBy_genreTS["フレームワーク"] = [];
  value_sortedBy_genreTS["プログラミング言語"] = [];
  value_sortedBy_genreTS["環境"] = [];

  value_sortedBy_genreHY["active"] = [];
  value_sortedBy_genreHY["passive"] = [];
  // value_sortedBy_genreHY["★★★"] = [];
  // value_sortedBy_genreHY["★★★★"] = [];
  // value_sortedBy_genreHY["★★★★★"] = [];

  /**
   * ジャンル取得
   */
  history.included.forEach((element) => {
    history_genre_names[element.id] = element.attributes.name;
  });
  tech_stack.included.forEach((element) => {
    tech_stack_genre_names[element.id] = element.attributes.name;
  });
  hobby.included.forEach((element) => {
    hobby_stack_hobby_rate[element.id] = element.attributes.name;
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
          value.attributes.field_history_end_date,
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
          value.attributes.field_history_end_date,
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
          value.attributes.field_history_end_date,
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
          value.attributes.field_history_end_date,
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
          value.attributes.field_history_end_date,
          value.attributes.title,
          value.attributes.body != null ? value.attributes.body.value : "",
          history_genre_names[
            value.relationships.field_history_genre.data[0].id
          ],
        ]);
        break;
      case "コンテスト":
        value_sortedBy_genreHI["コンテスト"].push([
          value.attributes.field_history_date,
          value.attributes.field_history_end_date,
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

  /**
   * レートごとに分ける
   */
  hobby.data.forEach((value) => {
    switch (value.attributes.field_hobby_active) {
      case "active":
        value_sortedBy_genreHY["active"].push([
          value.attributes.title,
          hobby_stack_hobby_rate[value.relationships.field_hobby_rate.data.id],
          value.attributes.body.value,
        ]);
        break;
      case "passive":
        value_sortedBy_genreHY["passive"].push([
          value.attributes.title,
          hobby_stack_hobby_rate[value.relationships.field_hobby_rate.data.id],
          value.attributes.body.value,
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
        <div id="info">
          <div className="flex justify-center">
            <h2 className="text-center py-2 px-4 mt-12 md:mt-24  text-4xl border-2 inline-block border-u_c_4 rounded-xl">
              <span className="material-icons">info</span>
              <span className="ml-2">基本情報</span>
            </h2>
          </div>
          <h2 className="text-center my-4 mx-4 text-3xl">うすゆき</h2>
          <AboutMeFrame icon="face">
            <p className="my-4 md:my-0">Age:21</p>
            <p className="my-4 md:my-0">Utsunomiya University</p>
            <p className="my-4 md:my-0">Grade:B3</p>
            <p className="my-4 md:my-0">Major:Information science</p>
          </AboutMeFrame>
          <AboutMeFrame icon="home">
            <p className="my-4 md:my-0">Birthplace:Tottori Prefecture</p>
            <p className="my-4 md:my-0">Hometown:Shimane Prefecture</p>
            <p className="my-4 md:my-0">Residence:Tochigi Prefecture</p>
          </AboutMeFrame>
        </div>
        <div id="like">
          <div className="flex justify-center">
            <h2 className="text-center py-2 px-4 mt-12 md:mt-24  text-4xl border-2 inline-block border-u_c_4 rounded-xl">
              <span className="material-icons">favorite</span>
              <span className="ml-2">好み</span>
            </h2>
          </div>
          <AboutMeFrame icon="favorite">
            <p className="my-4 md:my-0">好きなアニメ:たまこまーけっと</p>
            <p className="my-4 md:my-0">
              好きな食べ物:コンペイトウ、ポップコーン
            </p>
            <p className="my-4 md:my-0">好きな飲み物:コーヒー</p>
            <p className="my-4 md:my-0">好きなキーバインド:Vim</p>
            <p className="my-4 md:my-0">好きなSNS:Misskey</p>
            <p className="my-4 md:my-0">推し:しぐれうい</p>
          </AboutMeFrame>
        </div>
        <div className="" id="history">
          <div className="flex justify-center">
            <h2 className="text-center py-2 px-4 mt-12 md:mt-24  text-4xl border-2 inline-block border-u_c_4 rounded-xl">
              <span className="material-icons">history_edu</span>
              <span className="ml-2">経歴</span>
            </h2>
          </div>
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
          <article>
            <Heading1 title={"コンテスト"} />
            <TimelineLayout content={value_sortedBy_genreHI["コンテスト"]} />
          </article>
        </div>
        <div className="" id="tech">
          <div className="flex justify-center">
            <h2 className="text-center py-2 px-4 mt-12 md:mt-24  text-4xl border-2 inline-block border-u_c_4 rounded-xl">
              <span className="material-icons">extension</span>
              <span className="ml-2">技術スタック</span>
            </h2>
          </div>
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
        <div className="" id="hobby">
          <div className="flex justify-center">
            <h2 className="text-center py-2 px-4 mt-12 md:mt-24  text-4xl border-2 inline-block border-u_c_4 rounded-xl">
              <span className="material-icons">golf_course</span>
              <span className="ml-2">趣味</span>
            </h2>
          </div>
          <article>
            <HobbyLayout content={value_sortedBy_genreHY["active"]} />
          </article>
          <article>
            <Heading1 title={"かつての趣味"} />
            <HobbyLayout content={value_sortedBy_genreHY["passive"]} />
          </article>
        </div>
      </Layout>
    </div>
  );
}
