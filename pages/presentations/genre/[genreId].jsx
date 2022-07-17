/** @format */
import Layout from "../../../components/layout";
import PresentationsCard from "../../../components/cards/presentationsCard";
import changeUidToName from "../../../lib/changeUidToName";
// レンダリング前に実行される
export const getStaticProps = async ({ params }) => {
  const data = await fetch(
    "https://pfapi.usuyuki.net/jsonapi/node/presentation?sort=-field_presentation_date&include=field_slide_thumbnail,field_presentation_genre&filter[field_presentation_genre.id]=" +
      params.genreId
  ).then((r) => r.json());
  const genreName = changeUidToName(params.genreId, "presentations");
  return { props: { data, genreName }, revalidate: 120 };
};
export async function getStaticPaths() {
  const data = await fetch(
    "https://pfapi.usuyuki.net/jsonapi/node/presentation"
  ).then((r) => r.json());
  let idList = data.data.map((value) => {
    // map効かせるために1つでも強制的に配列にする……技術的負債
    if (!(value.relationships.field_presentation_genre.data instanceof Array)) {
      value.relationships.field_presentation_genre.data = [
        value.relationships.field_presentation_genre.data,
      ];
    }
    return value.relationships.field_presentation_genre.data.map((tech) => {
      return tech.id.toString();
    });
  });

  let lawIds = [];
  idList.forEach((value) => value.forEach((valueV) => lawIds.push(valueV)));
  const paths = lawIds.map((value) => ({
    params: { genreId: value },
  }));

  return { paths, fallback: false };
}

export default function Genres({ data, genreName }) {
  let title_prefix = genreName;
  let pageTitle = genreName;
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
