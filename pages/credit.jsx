/** @format */

import Layout from "../components/layout";

// レンダリング前に実行される

export default function Credit() {
  let title_prefix = "Links";
  let pageTitle = "Links";
  // const { data, error } = useSWR("https://usuyuki.net/jsonapi/node/link");
  // const [data, setData] = useState({ message: "", data: [] })

  return (
    <div>
      <Layout title_prefix={title_prefix} pageTitle={pageTitle}>
        <div className="flex flex-wrap">https://devicon.dev/</div>
      </Layout>
    </div>
  );
}
