/** @format */

import Layout from "../components/layout";
export default function Home() {
  let title_prefix = "ホーム";
  let pageTitle = "usuyuki portfolio";
  return (
    <div>
      <Layout title_prefix={title_prefix} pageTitle={pageTitle}>
        <p>ほーむ</p>
      </Layout>
    </div>
  );
}
