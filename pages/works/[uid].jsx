/** @format */

import Layout from "../../components/layout";
import removeHTMLTag from "../../lib/removeHTMLTag";
import styles from "../../styles/individualWorks.module.css";
import Heading1 from "../../components/decoration/heading1";
import WorksGenres from "../../components/individual/worksGenres";
import WorksTechs from "../../components/individual/worksTechs";
import WorksGallery from "../../components/individual/worksGallery";
export const getStaticProps = async ({ params }) => {
  //例
  //https://usuyuki.net/jsonapi/node/article/382f0ffe-f2db-416e-bfee-e4b0e3334b35?include=field_works_gallery,field_works_genre,field_works_thumbnail,field_works_scale,field_works_tech
  const data = await fetch(
    "https://usuyuki.net/jsonapi/node/article/" +
      params.uid +
      "?include=field_works_thumbnail,field_works_gallery,field_works_genre,field_works_thumbnail,field_works_scale,field_works_tech"
  ).then((r) => r.json());
  return { props: { data } };
};

export default function WorksIndividual({ data }) {
  let title_prefix = data.data.attributes.title;
  let pageTitle = "works";

  let image_thumbnail = "";
  let work_scale = "";
  let counter_for_thumbnail = 0;
  let image_urls = []; //url
  let genre_names = {}; //id=name
  let tech_names = {}; //id=name

  //日付の区切り
  const date = data.data.attributes.field_works_deploy_start.split("-");
  const year = date[0];
  const month = date[1];
  const day = date[2];

  data.included.forEach((element) => {
    if (element.type == "file--file") {
      //1枚目にサムネが来るので
      if (counter_for_thumbnail == 0) {
        image_thumbnail = "https://usuyuki.net/" + element.attributes.uri.url;
        counter_for_thumbnail += 1;
      }
      //ギャラリー画像
      image_urls.push("https://usuyuki.net/" + element.attributes.uri.url);
    } else if (element.type == "taxonomy_term--works_genre") {
      genre_names[element.id] = element.attributes.name;
    } else if (element.type == "taxonomy_term--works_tech") {
      tech_names[element.id] = element.attributes.name;
    } else if (element.type == "taxonomy_term--work_scale") {
      work_scale = element.attributes.name;
    }
  });

  return (
    <div>
      <Layout title_prefix={title_prefix} pageTitle={pageTitle}>
        <div className="flex justify-center items-center my-24 flex-col md:flex-row">
          <div className="w-full md:w-1/4 order-3 md:order-1">
            {data.data.attributes.field_works_link != null
              ? data.data.attributes.field_works_link.map((value, key) => (
                  <p className={styles.url_bar} key={key}>
                    <a
                      href={value.uri}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      {value.uri}
                    </a>
                  </p>
                ))
              : ""}
          </div>
          <div className="w-full md:w-1/2 order-2">
            <p className="text-center my-2">{work_scale}</p>
            <div className="flex items-center justify-center">
              <h1 className="font-rampart text-6xl mx-4">
                {data.data.attributes.title}
              </h1>
            </div>
            <div className="flex items-center justify-center">
              <div
                className={styles.works_description}
                dangerouslySetInnerHTML={{
                  __html: data.data.attributes.body.value,
                }}
              />
            </div>
          </div>
          <div className="w-full md:w-1/4 order-1 md:order-3">
            <img className={styles.thumbnail} src={image_thumbnail} />
          </div>
        </div>
        <div className="flex justify-center flex-wrap">
          <div className="w-full md:w-1/2 ">
            <div className={styles.releaseWrapper}>
              <p className="text-center mt-4 mb-8 text-xl">Released</p>
              <p className="text-center my-2 text-xl">{year}</p>
              <p className="text-center my-2 text-3xl mb-4">
                {month}/{day}
              </p>
            </div>
          </div>
          <div className="w-full md:w-1/2 ">
            <WorksGenres genre_names={genre_names} />
          </div>
          <div className="w-full md:w-1/2 ">
            <Heading1 title={"画像"} />
            <WorksGallery image_urls={image_urls} />
          </div>
          <div className="w-full md:w-1/2 ">
            <Heading1 title={"技術"} />
            <WorksTechs tech_names={tech_names} />
          </div>
        </div>
      </Layout>
    </div>
  );
}
