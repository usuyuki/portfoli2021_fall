/** @format */

import Layout from "../components/layout";

// レンダリング前に実行される
export const getServerSideProps = async () => {
  const data = await fetch("https://usuyuki.net/jsonapi/node/works").then((r) =>
    r.json()
  );
  return { props: { data } };
};

export default function Works({ data }) {
  let title_prefix = "Works";
  let pageTitle = "Works";
  // const { data, error } = useSWR("https://usuyuki.net/jsonapi/node/link");
  // const [data, setData] = useState({ message: "", data: [] })
  console.log(data);
  return (
    <div>
      <Layout title_prefix={title_prefix} pageTitle={pageTitle}>
        <div className="flex flex-wrap">
          {data != undefined
            ? data.data.map((value, key) => (
                <div className="link-item m-12" key={key}>
                  <a
                    target="_blank"
                    rel="noopener noreferrer"
                    href={value.attributes.field_link_link.uri}
                  >
                    {value.attributes.title}
                  </a>
                </div>
              ))
            : "取得に失敗しました"}
        </div>
      </Layout>
    </div>
  );
}
