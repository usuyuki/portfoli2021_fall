/** @format */

import Layout from "../components/layout";
import Image from "next/image";
import WorksCards from "../components/cards/worksCards";
import FeatureWorksCards from "../components/cards/featureWorksCards";
import BlogCards from "../components/cards/blogCards";
import SocialIcons from "../components/information/socialIcons";
import MyComponent from "../components/information/myComponent";
import NormalButton from "../components/button/normalButton";
import Hr from "../components/decoration/hr";
import { getBlogsSortedPostsData } from "../lib/WPBlogs";

export const getStaticProps = async () => {
  const [response1, response2, response3] = await Promise.all([
    fetch(
      "https://usuyuki.net/jsonapi/node/works?sort=-created&include=field_works_thumbnail,field_works_genre&page[limit]=5"
    ).then((r) => r.json()),
    fetch(
      "https://usuyuki.net/jsonapi/node/works?sort=-changed&include=field_works_thumbnail,field_works_genre&filter[field_works_featured_on_pf]=1"
    ).then((r) => r.json()),
    getBlogsSortedPostsData(),
  ]);

  const latestWorks = response1;
  const featuredWorks = response2;
  const allBlogsData = response3;
  return {
    props: { latestWorks, featuredWorks, allBlogsData },
    revalidate: 120,
  };
};

export default function Home({ latestWorks, featuredWorks, allBlogsData }) {
  let title_prefix = "ホーム";
  let pageTitle = "usuyuki portfolio";

  let image_urls = []; //urlの配列
  let image_urls_featured = []; //urlの配列
  let genre_names = {}; //[ジャンルid]=ジャンル名

  //画像とジャンル取得
  latestWorks.included.forEach((element) => {
    if (element.type == "file--file") {
      image_urls.push("https://usuyuki.net/" + element.attributes.uri.url);
    } else if (element.type == "taxonomy_term--works_genre") {
      genre_names[element.id] = element.attributes.name;
    }
  });

  //画像とジャンル取得
  featuredWorks.included.forEach((element) => {
    if (element.type == "file--file") {
      image_urls_featured.push(
        "https://usuyuki.net/" + element.attributes.uri.url
      );
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
            ポートフォリオってやつです。
          </p>
        </div>
        <MyComponent />
        <div className="lg:mx-auto my-12 px-4 text-center">
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://github.com/Usuyuki"
          >
            <Image
              width={870}
              height={155}
              src="https://grass-graph.appspot.com/images/Usuyuki.png"
            />
          </a>
          <div className="flex items-center mb-4 mx-2 justify-center flex-wrap ">
            <span class="material-icons">grass</span>
            <p className="">GitHubコミット状況</p>
          </div>
        </div>
        <div className="flex justify-center flex-wrap">
          <div className="px-6 lg:px-6 my-4 ">
            <Image
              width={340}
              height={200}
              src="https://raw.githubusercontent.com/Usuyuki/Usuyuki/master/profile-summary-card-output/solarized/2-most-commit-language.svg"
            />
          </div>
          <div className="px-6 lg:px-6 my-4 ">
            <Image
              width={340}
              height={200}
              src="https://raw.githubusercontent.com/Usuyuki/Usuyuki/master/profile-summary-card-output/solarized/1-repos-per-language.svg"
            />
          </div>
        </div>
        <div className="flex items-center mb-4 mx-2 justify-center flex-wrap ">
          <span class="material-icons">signal_cellular_alt</span>
          <p className="">GitHubでの言語グラフ</p>
        </div>

        <SocialIcons />
        <Hr />
        <h3 className="text-center text-3xl mb-12 mx-4">目玉商品</h3>
        <div className="">
          <FeatureWorksCards
            content={featuredWorks}
            image_urls_featured={image_urls_featured}
            genre_names={genre_names}
          />
        </div>
        <Hr />
        <h3 className="text-center text-3xl mb-12 mx-4">最近つくったもの</h3>
        <div className="">
          <WorksCards
            content={latestWorks}
            image_urls={image_urls}
            genre_names={genre_names}
          />
        </div>
        <NormalButton href="/works" title="もっと見る" />
        <Hr />
        <h3 className="text-center text-3xl  mb-12 mx-4">最近書いた記事</h3>
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
