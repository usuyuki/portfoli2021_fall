/** @format */

import Layout from "../components/layout";
export default function Home() {
  let title_prefix = "ホーム";
  let pageTitle = "usuyuki portfolio";
  return (
    <div>
      <Layout title_prefix={title_prefix} pageTitle={pageTitle}>
        <h1>aaa</h1>
        <div style={{ height: "120vh" }}>a</div>
        <div class="h-full">a</div>
      </Layout>
    </div>
  );
}
