/** @format */

import Head from "next/head";
import styles from "../styles/conpeitou.module.css";
import Header from "./Header";
import LeftNav from "./leftNav";
import Footer from "./Footer";

export default function Layout(props) {
  return (
    <div>
      <Head>
        <meta charset="utf-8" />
        <meta name="viewport" content="width=device-width,initial-scale=1" />

        <meta name="description" content="{うすゆきのポートフォリオです。}" />
        <title>{props.title_prefix} | うすゆきポートフォリオ</title>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
        {/* ogp */}
        <meta property="og:title" content="うすゆきポートフォリオ" />
        <meta
          property="og:description"
          content="うすゆきのポートフォリオです。"
        />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://うすゆき.net" />
        <meta property="og:image" content="https://うすゆき.net/ogp.jpg" />
        {/* <meta property="fb:app_id"      content="" /> */}
        <meta name="twitter:card" content="summary" />
        <meta name="twitter:site" content="@usuyuki26" />
        <meta name="twitter:creator" content="@usuyuki26" />
        {/* google font */}
        <link
          href="https://fonts.googleapis.com/css2?family=Kiwi+Maru&family=Rampart+One&display=swap"
          rel="stylesheet"
        />
        {/* まてりある */}
        <link
          href="https://fonts.googleapis.com/icon?family=Material+Icons"
          rel="stylesheet"
        />
        {/* ふぁびこん */}
        <link
          rel="apple-touch-icon"
          type="image/png"
          href="/img/favicon/apple-touch-icon-180x180.png"
        />
        <link
          rel="icon"
          type="image/png"
          href="/img/favicon/icon-192x192.png"
        />
      </Head>

      <div className="flex md:justify-center">
        <LeftNav />
        <div>
          <Header pageTitle={props.pageTitle} />
          <main>{props.children}</main>
        </div>
      </div>
      <Footer />
    </div>
  );
}
