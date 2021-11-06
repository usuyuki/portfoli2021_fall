/** @format */

import Layout from "../components/layout";

// レンダリング前に実行される

export default function Credit() {
  let title_prefix = "Credit";
  let pageTitle = "Credit";
  // const { data, error } = useSWR("https://usuyuki.net/jsonapi/node/link");
  // const [data, setData] = useState({ message: "", data: [] })

  return (
    <div>
      <Layout title_prefix={title_prefix} pageTitle={pageTitle}>
        <div className="flex flex-wrap">https://devicon.dev/</div>
        https://grass-graph.appspot.com/
      </Layout>
    </div>
  );
}
