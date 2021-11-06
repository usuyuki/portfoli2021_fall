/** @format */

import Layout from "../components/layout";
import Link from "next/link";
import WorksCards from "../components/cards/worksCards";
import BlogCards from "../components/cards/blogCards";
import { Bar } from "react-chartjs-2";
import { getBlogsSortedPostsData } from "../lib/WPBlogs";

export const getServerSideProps = async () => {
  const data = await fetch(
    "https://usuyuki.net/jsonapi/node/works?sort=-created&include=field_works_thumbnail,field_works_genre&page[limit]=5"
  ).then((r) => r.json());
  const allBlogsData = await getBlogsSortedPostsData();
  return { props: { data, allBlogsData } };
};

export default function Home({ data, allBlogsData }) {
  let title_prefix = "ホーム";
  let pageTitle = "usuyuki portfolio";

  let image_urls = []; //urlの配列
  let genre_names = {}; //[ジャンルid]=ジャンル名

  //画像取得
  data.included.forEach((element) => {
    if (element.type == "file--file") {
      image_urls.push("https://usuyuki.net/" + element.attributes.uri.url);
    } else if (element.type == "taxonomy_term--works_genre") {
      genre_names[element.id] = element.attributes.name;
    }
  });

  //チャート
  // 棒グラフ用のコンポーネントをインポート

  // レンダリング

  const chartData = {
    labels: ["Red", "Blue", "Yellow", "Green", "Purple", "Orange"],
    datasets: [
      {
        label: "# of Votes",
        data: [12, 19, 3, 5, 2, 3],
        backgroundColor: [
          "rgba(255, 99, 132, 0.2)",
          "rgba(54, 162, 235, 0.2)",
          "rgba(255, 206, 86, 0.2)",
          "rgba(75, 192, 192, 0.2)",
          "rgba(153, 102, 255, 0.2)",
          "rgba(255, 159, 64, 0.2)",
        ],
        borderColor: [
          "rgba(255, 99, 132, 1)",
          "rgba(54, 162, 235, 1)",
          "rgba(255, 206, 86, 1)",
          "rgba(75, 192, 192, 1)",
          "rgba(153, 102, 255, 1)",
          "rgba(255, 159, 64, 1)",
        ],
        borderWidth: 1,
      },
    ],
  };

  return (
    <div>
      <Layout title_prefix={title_prefix} pageTitle={pageTitle}>
        <p className="text-center text-3xl mt-24 mb-4 mx-4">ごあいさつ</p>
        <div className="flex  justify-center">
          <p className="text-xl mx-4">
            うすゆきと申します。
            <br />
            最近はキャラメルポップコーンをよく食べます。
          </p>
        </div>
        <img
          className="mx-auto my-12"
          src="https://grass-graph.appspot.com/images/Usuyuki.png"
        />
        <div className="flex justify-center">
          <img
            className="mx-6 my-4"
            src="https://raw.githubusercontent.com/Usuyuki/Usuyuki/master/profile-summary-card-output/solarized/2-most-commit-language.svg"
          />
          <img
            className="mx-6 my-4"
            src="https://raw.githubusercontent.com/Usuyuki/Usuyuki/master/profile-summary-card-output/solarized/1-repos-per-language.svg"
          />
        </div>
        {/* <Bar
          data={chartData}
          width={400}
          height={200}
          options={{
            maintainAspectRatio: false,
          }}
        /> */}
        <p className="text-center text-3xl mt-24 mb-4 mx-4">最近つくったもの</p>
        <div className="">
          <WorksCards
            content={data}
            image_urls={image_urls}
            genre_names={genre_names}
          />
        </div>
        <p className="text-center text-3xl mt-24 mb-4 mx-4">最近かいたきじ</p>
        <div className="">
          <BlogCards content={allBlogsData} />
        </div>
      </Layout>
    </div>
  );
}