/** @format */

import Layout from "../../components/layout";

export const getServerSideProps = async ({ params }) => {
  //   const router = useRouter();
  const data = await fetch(
    "https://usuyuki.net/jsonapi/node/article/" + params.uid
  ).then((r) => r.json());
  return { props: { data } };
};

export default function WorksIndividual({ data }) {
  console.log(data);
  let title_prefix = "Works";
  let pageTitle = "Works";
  return (
    <div>
      <Layout title_prefix={title_prefix} pageTitle={pageTitle}>
        {data != undefined ? "" : "取得に失敗しました"}
        <h1 className="font-rampart text-center text-4xl">
          {data.data.attributes.title}
        </h1>
        <p>
          {data.data.attributes.body.value.replace(
            /<("[^"]*"|'[^']*'|[^'">])*>/g,
            ""
          )}
        </p>
      </Layout>
    </div>
  );
}
