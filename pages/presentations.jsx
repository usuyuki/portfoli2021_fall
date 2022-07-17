/** @format */

import Layout from "../components/layout";
import PresentationsCard from "../components/cards/presentationsCard";

// レンダリング前に実行される
export const getStaticProps = async () => {
  const data = await fetch(
    "https://pfapi.usuyuki.net/jsonapi/node/presentation?sort=-field_presentation_date&include=field_slide_thumbnail,field_presentation_genre"
  ).then((r) => r.json());
  return { props: { data }, revalidate: 120 };
};

export default function Presentations({ data }) {
  let title_prefix = "登壇資料";
  let pageTitle = "Slides";

  let image_urls = []; //urlの配列
  let genre_names = {}; //[ジャンルid]=ジャンル名
  data.included.forEach((element) => {
    if (element.type == "file--file") {
      image_urls.push(
        "https://pfapi.usuyuki.net/" + element.attributes.uri.url
      );
    } else if (element.type == "taxonomy_term--presentation_genre") {
      genre_names[element.id] = element.attributes.name;
    }
  });

  return (
    <div>
      <Layout title_prefix={title_prefix} pageTitle={pageTitle}>
        <div className="">
          <PresentationsCard
            content={data}
            image_urls={image_urls}
            genre_names={genre_names}
          />
        </div>
      </Layout>
    </div>
  );
}
