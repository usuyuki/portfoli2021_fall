/** @format */

import Layout from "../../components/layout";
import Image from "next/image";
import styles from "../../styles/individualWorks.module.css";
import Heading1 from "../../components/decoration/heading1";
import PresentationsGenres from "../../components/individual/presentationsGenres";
export const getStaticProps = async ({ params }) => {
  //例
  //https://pfapi.usuyuki.net/jsonapi/node/presentation/382f0ffe-f2db-416e-bfee-e4b0e3334b35?include=field_works_gallery,field_works_genre,field_works_thumbnail,field_works_scale,field_works_tech
  const data = await fetch(
    "https://pfapi.usuyuki.net/jsonapi/node/presentation/" +
      params.presentationId +
      "?include=field_presentation_genre"
  ).then((r) => r.json());
  return { props: { data }, revalidate: 120 };
};

export async function getStaticPaths() {
  const data = await fetch(
    "https://pfapi.usuyuki.net/jsonapi/node/presentation"
  ).then((r) => r.json());
  const paths = data.data.map((value) => ({
    params: { presentationId: value.id },
  }));
  return { paths, fallback: false };
}

export default function PresentationIndividual({ data }) {
  let title_prefix = data.data.attributes.title;
  let pageTitle = "Slides";

  let genre_names = {}; //id=name

  //日付の区切り
  const date = data.data.attributes.field_presentation_date.split("-");
  const year = date[0];
  const month = date[1];
  const day = date[2];
  data.included.forEach((element) => {
    if (element.type == "taxonomy_term--presentation_genre") {
      genre_names[element.id] = element.attributes.name;
    }
  });

  return (
    <div>
      <Layout title_prefix={title_prefix} pageTitle={pageTitle}>
        <div className="flex justify-center items-center mt-12 mb-4 lg:my-24 flex-col lg:flex-row">
          <div className="w-full lg:w-1/2 order-2">
            <div className="w-full lg:w-1/4 order-3 lg:order-1"></div>
            <div className="flex items-center justify-center">
              <h1 className="font-rampart text-6xl mx-4 break-all">
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
        </div>
        <div className="flex justify-center flex-wrap">
          <div className="w-full lg:w-1/2 ">
            <div className={styles.releaseWrapper}>
              <p className="text-center mt-4 mb-8 text-xl">Released</p>
              <p className="text-center my-2 text-xl">{year}</p>
              <p className="text-center my-2 text-3xl mb-4">
                {month}/{day}
              </p>
            </div>
          </div>
          <div className="w-full lg:w-1/2 ">
            <PresentationsGenres genre_names={genre_names} />
          </div>
        </div>
        <div className="flex justify-center flex-wrap">
          <div className="w-full  ">
            <Heading1 title={"スライド"} />
            <div className="flex justify-center px-4">
              <div
                className={styles.fit_iframe}
                dangerouslySetInnerHTML={{
                  __html: data.data.attributes.field_speakerdeck_iframe.value,
                }}
              />
            </div>
          </div>
        </div>
      </Layout>
    </div>
  );
}
