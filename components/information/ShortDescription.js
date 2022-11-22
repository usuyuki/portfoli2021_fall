/** @format */

import Image from "next/image";
export default function ShortDescription() {
  return (
    <div className="flex justify-center flex-wrap mx-2 my-12">
      <Image
        className="fadeUp delay-time08"
        width={400}
        height={400}
        src="/img/usuyuki/acrylickeyholderUsuyuki.png"
      />
      <div className="w-full flex flex-col justify-center">
        <div className="fadeUp delay-time02 flex items-center py-2 justify-center">
          <div className="">
            <span className="material-icons">arrow_upward</span>
          </div>
          <div className="">
            <p>日記のwebアプリを作っています。</p>
          </div>
        </div>
        <div className="h-2/4 fadeUp delay-time04 flex items-center py-2 justify-center">
          <div className="">
            <span className="material-icons">arrow_upward</span>
          </div>
          <div className="">
            <p>VRChatを楽しんでいます。</p>
          </div>
        </div>
        <div className="fadeUp delay-time06 flex items-center py-2 justify-center">
          <div className="">
            <span className="material-icons">arrow_upward</span>
          </div>
          <div className="">
            <p>ピクシブでアルバイトしています。</p>
          </div>
        </div>
      </div>
    </div>
  );
}
