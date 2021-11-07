/** @format */

import Layout from "../components/layout";
import Image from "next/image";
import WorksCards from "../components/cards/worksCards";
import SocialIcons from "../components/decoration/socialIcons";
import NormalButton from "../components/button/normalButton";
import BlogCards from "../components/cards/blogCards";
import Hr from "../components/decoration/hr";
import { getBlogsSortedPostsData } from "../lib/WPBlogs";

export const getStaticProps = async () => {
  const [response1, response2] = await Promise.all([
    fetch(
      "https://usuyuki.net/jsonapi/node/works?sort=-created&include=field_works_thumbnail,field_works_genre&page[limit]=5"
    ).then((r) => r.json()),
    getBlogsSortedPostsData(),
  ]);

  const data = response1;
  const allBlogsData = response2;
  return { props: { data, allBlogsData }, revalidate: 120 };
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
        <div className="md:mx-auto my-12 px-4 text-center">
          <Image
            width={870}
            height={155}
            src="https://grass-graph.appspot.com/images/Usuyuki.png"
          />
        </div>
        <div className="flex justify-center flex-wrap">
          <div className="px-6 md:px-6 my-4 ">
            <Image
              width={340}
              height={200}
              src="https://raw.githubusercontent.com/Usuyuki/Usuyuki/master/profile-summary-card-output/solarized/2-most-commit-language.svg"
            />
          </div>
          <div className="px-6 md:px-6 my-4 ">
            <Image
              width={340}
              height={200}
              src="https://raw.githubusercontent.com/Usuyuki/Usuyuki/master/profile-summary-card-output/solarized/1-repos-per-language.svg"
            />
          </div>
        </div>

        <SocialIcons />
        <Hr />
        <h3 className="text-center text-3xl mb-12 mx-4">最近つくったもの</h3>
        <div className="">
          <WorksCards
            content={data}
            image_urls={image_urls}
            genre_names={genre_names}
          />
        </div>
        <NormalButton href="works" title="もっと見る" />
        <Hr />
        <h3 className="text-center text-3xl  mb-12 mx-4">最近かいた記事</h3>
        <div className="">
          <BlogCards content={allBlogsData} />
        </div>
        <NormalButton
          href="https://blog.usuyuki.net/"
          title="もっと見る(ブログサイトへ)"
        />
        {/* <Hr /> */}
      </Layout>
    </div>
  );
}
