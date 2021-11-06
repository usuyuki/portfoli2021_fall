/** @format */

import Layout from "../components/layout";
import WorksCards from "../components/cards/worksCards";

// レンダリング前に実行される
export const getStaticProps = async () => {
  const data = await fetch(
    "https://usuyuki.net/jsonapi/node/works?sort=-field_works_deploy_start&include=field_works_thumbnail,field_works_genre"
  ).then((r) => r.json());
  return { props: { data }, revalidate: 120 };
};

export default function Works({ data }) {
  let title_prefix = "作品";
  let pageTitle = "Works";

  let image_urls = []; //urlの配列
  let genre_names = {}; //[ジャンルid]=ジャンル名

  data.included.forEach((element) => {
    if (element.type == "file--file") {
      image_urls.push("https://usuyuki.net/" + element.attributes.uri.url);
    } else if (element.type == "taxonomy_term--works_genre") {
      genre_names[element.id] = element.attributes.name;
    }
  });

  return (
    <div>
      <Layout title_prefix={title_prefix} pageTitle={pageTitle}>
        <div className="">
          <WorksCards
            content={data}
            image_urls={image_urls}
            genre_names={genre_names}
          />
        </div>
      </Layout>
    </div>
  );
}
