/** @format */

import Layout from "../components/layout";
import Link from "next/link";
// レンダリング前に実行される
export const getServerSideProps = async () => {
  const data = await fetch(
    "https://usuyuki.net/jsonapi/node/works?sort=-field_works_deploy_start&include=field_works_thumbnail,field_works_genre"
  ).then((r) => r.json());
  return { props: { data } };
};

export default function Works({ data }) {
  let title_prefix = "作品";
  let pageTitle = "Works";
  let counter_for_meta = 0;
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
        <div className="flex justify-center flex-wrap">
          {data != undefined
            ? data.data.map((value, key) => (
                <Link href={"/works/" + value.id} key={key}>
                  <a>
                    <div
                      className="cursor-pointer link-item m-12"
                      key={(counter_for_meta += 1)}
                    >
                      <img
                        className="top-image "
                        src={image_urls[counter_for_meta]}
                      />
                      <p> {value.attributes.title}</p>
                      <p className="genre-tag">
                        {
                          genre_names[
                            value.relationships.field_works_genre.data[0].id
                          ]
                        }
                      </p>
                    </div>
                  </a>
                </Link>
              ))
            : "取得に失敗しました"}
        </div>
      </Layout>
    </div>
  );
}
