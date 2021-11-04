/** @format */

import Layout from "../components/layout";
import Heading1 from "../components/decoration/heading1";
import TimelineLayout from "../components/timelineLayout";

export const getServerSideProps = async () => {
  const history = await fetch(
    "https://usuyuki.net/jsonapi/node/history?sort=field_history_date&include=field_history_genre"
  ).then((r) => r.json());
  return { props: { history } };
};

export default function Home({ history }) {
  let title_prefix = "プロフィール";
  let pageTitle = "Profile";

  let history_genre_names = {}; //[ジャンルid]=ジャンル名
  let value_sortedBy_genre = {}; //[ジャンルid]=ジャンル名
  //連想配列の初期化をしておく
  value_sortedBy_genre["その他"] = [];
  value_sortedBy_genre["仕事"] = [];
  value_sortedBy_genre["団体"] = [];
  value_sortedBy_genre["学業"] = [];
  value_sortedBy_genre["資格"] = [];

  //ジャンル取得
  history.included.forEach((element) => {
    history_genre_names[element.id] = element.attributes.name;
  });
  //ジャンルごとに分ける
  history.data.forEach((value) => {
    switch (
      history_genre_names[value.relationships.field_history_genre.data[0].id]
    ) {
      case "その他":
        value_sortedBy_genre["その他"].push([
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
        value_sortedBy_genre["仕事"].push([
          value.attributes.field_history_date,
          value.attributes.title,
          value.attributes.body != null ? value.attributes.body.value : "",
          history_genre_names[
            value.relationships.field_history_genre.data[0].id
          ],
        ]);
        break;
      case "団体":
        value_sortedBy_genre["団体"].push([
          value.attributes.field_history_date,
          value.attributes.title,
          value.attributes.body != null ? value.attributes.body.value : "",
          history_genre_names[
            value.relationships.field_history_genre.data[0].id
          ],
        ]);
        break;
      case "資格":
        value_sortedBy_genre["資格"].push([
          value.attributes.field_history_date,
          value.attributes.title,
          value.attributes.body != null ? value.attributes.body.value : "",
          history_genre_names[
            value.relationships.field_history_genre.data[0].id
          ],
        ]);
        break;
      case "学業":
        value_sortedBy_genre["学業"].push([
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

  //出力
  return (
    <div>
      <Layout title_prefix={title_prefix} pageTitle={pageTitle}>
        <div>
          <article>
            <Heading1 title={"学業"} />
            <TimelineLayout content={value_sortedBy_genre["学業"]} />
          </article>

          <article>
            <Heading1 title={"仕事"} />
            <TimelineLayout content={value_sortedBy_genre["仕事"]} />
          </article>

          <article>
            <Heading1 title={"資格"} />
            <TimelineLayout content={value_sortedBy_genre["資格"]} />
          </article>

          <article>
            <Heading1 title={"団体"} />
            <TimelineLayout content={value_sortedBy_genre["団体"]} />
          </article>
        </div>
      </Layout>
    </div>
  );
}
