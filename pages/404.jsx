/** @format */

import Layout from "../components/layout";
import Heading1 from "../components/decoration/heading1";
import ColorPalette from "../components/decoration/colorPalette";

/**
 *
 * ここでasync await関数は使えなかった
 */

export default function Custom404() {
  let title_prefix = "404";
  let pageTitle = "404 Not found";

  return (
    <Layout title_prefix={title_prefix} pageTitle={pageTitle}>
      <div className="">
        <h1 className="text-center mt-12 mb-2 mx-2 text-3xl">404 Not found</h1>
        <h2 className="text-center mt-2 mb-12 mx-2 text-xl">
          このページは見つかりませんでした
        </h2>
        <Heading1 title={"からー"} />
        <div className="flex flex-wrap justify-center mx-2 lg:mx-40">
          <ColorPalette color={"u_c_1"} />
          <ColorPalette color={"u_c_2"} />
          <ColorPalette color={"u_c_3"} />
          <ColorPalette color={"u_c_4"} />
          <ColorPalette color={"u_c_5"} />
          <ColorPalette color={"usuyuki_white"} />
          <ColorPalette color={"usuyuki_black"} />
        </div>
        <Heading1 title={"ふぉんと"} />
        <div>
          <p className="text-center mx-2 my-12 text-5xl">Kiwi Maru</p>
          <p className="text-center mx-2 my-12 text-5xl font-rampart ">
            Rampart One
          </p>
        </div>
      </div>
    </Layout>
  );
}
