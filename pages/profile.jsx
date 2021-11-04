/** @format */

import Layout from "../components/layout";

export const getServerSideProps = async () => {
  const data = await fetch(
    "https://usuyuki.net/jsonapi/node/history?sort=-created&include=field_history_genre"
  ).then((r) => r.json());
  return { props: { data } };
};

export default function Home({ data }) {
  let title_prefix = "プロフィール";
  let pageTitle = "Profile";

  let history_genre_names = {}; //[ジャンルid]=ジャンル名
  let value_sortedBy_genre = {}; //[ジャンルid]=ジャンル名
  //連想配列の初期化をしておく
  value_sortedBy_genre["その他"] = [];
  value_sortedBy_genre["仕事"] = [];
  value_sortedBy_genre["団体"] = [];
  value_sortedBy_genre["学業"] = [];

  //ジャンル取得
  data.included.forEach((element) => {
    history_genre_names[element.id] = element.attributes.name;
  });
  //ジャンルごとに分ける
  data.data.forEach((value) => {
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
  console.log(value_sortedBy_genre);

  //出力
  return (
    <div>
      <Layout title_prefix={title_prefix} pageTitle={pageTitle}>
        <div className="flex justify-center ">
          {value_sortedBy_genre["学業"].map((value, key) => {
            {
              console.log(value[0]);
            }
            return (
              <div className="m-12" key={key}>
                <p> {value[0]}</p>
                <p> {value[1]}</p>
                <p> {value[2]}</p>
                <p> {value[3]}</p>
              </div>
            );
          })}
        </div>
      </Layout>
    </div>
  );
}
