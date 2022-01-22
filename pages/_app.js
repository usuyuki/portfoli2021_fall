/** @format */

import "tailwindcss/tailwind.css";
import "../styles/global.css";

function MyApp({ Component, pageProps }) {
  console.log(
    "うすゆきポートフォリオへようこそ。console画面まで見ていただけて大変光栄なのですが、ここにはなにもありません！！"
  );
  return <Component {...pageProps} />;
}

export default MyApp;
