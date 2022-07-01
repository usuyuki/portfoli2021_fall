/** @format */
import Layout from "../../../components/layout";
import WorksCards from "../../../components/cards/worksCards";
import Link from "next/link";
// レンダリング前に実行される
export const getStaticProps = async ({ params }) => {
  const data = await fetch(
    "https://pfapi.usuyuki.net/jsonapi/node/works?sort=-field_works_deploy_start&include=field_works_thumbnail,field_works_genre&filter[field_works_tech.id]=" +
      params.techId
  ).then((r) => r.json());
  return { props: { data }, revalidate: 120 };
};

export async function getStaticPaths() {
  const data = await fetch("https://pfapi.usuyuki.net/jsonapi/node/works").then(
    (r) => r.json()
  );
  let idList = data.data.map((value) => {
    return value.relationships.field_works_tech.data.map((tech) => {
      return tech.id.toString();
    });
  });

  let lawIds = [];
  idList.forEach((value) => value.forEach((valueV) => lawIds.push(valueV)));
  const paths = lawIds.map((value) => ({
    params: { techId: value },
  }));

  return { paths, fallback: true };
}

export default function Works({ data }) {
  let title_prefix = "使用技術別";
  let pageTitle = "Works/tech";
  let image_urls = []; //urlの配列
  let genre_names = {}; //[ジャンルid]=ジャンル名

  data.included.forEach((element) => {
    if (element.type == "file--file") {
      image_urls.push(
        "https://pfapi.usuyuki.net/" + element.attributes.uri.url
      );
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
