/** @format */

import Layout from "../components/layout";
import Link from "next/link";
import WorksCards from "../components/cards/worksCards";

export const getServerSideProps = async () => {
  const data = await fetch(
    "https://usuyuki.net/jsonapi/node/works?sort=-created&include=field_works_thumbnail,field_works_genre&page[limit]=4"
  ).then((r) => r.json());
  return { props: { data } };
};

export default function Home({ data }) {
  let title_prefix = "ホーム";
  let pageTitle = "usuyuki portfolio";

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
        <p className="text-center text-3xl my-12 mx-4">ごあいさつ</p>
        <div className="flex  justify-center">
          <p className="text-xl">
            うすゆきと申します。
            <br />
            最近はキャラメルポップコーンをよく食べます。
          </p>
        </div>
        <p className="text-center text-3xl my-12 mx-4">最近つくったもの</p>
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
