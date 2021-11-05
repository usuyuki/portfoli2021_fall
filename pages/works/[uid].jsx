/** @format */

import Layout from "../../components/layout";
import removeHTMLTag from "../../lib/removeHTMLTag";

export const getServerSideProps = async ({ params }) => {
  //   const router = useRouter();
  const data = await fetch(
    "https://usuyuki.net/jsonapi/node/article/" +
      params.uid +
      "?include=field_works_gallery,field_works_genre,field_works_thumbnail,field_works_scale,field_works_tech"
  ).then((r) => r.json());
  return { props: { data } };
};

export default function WorksIndividual({ data }) {
  let title_prefix = data.data.attributes.title;
  let pageTitle = "works";

  let image_urls = []; //urlとaltの配列
  let genre_names = {}; //[name,id]
  let tech_names = {}; //[name,id]

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
        {data != undefined ? "" : "取得に失敗しました"}
        <h1 className="font-rampart text-center text-4xl">
          {data.data.attributes.title}
        </h1>

        <p>{removeHTMLTag(data.data.attributes.body.value)} </p>
      </Layout>
    </div>
  );
}
