/** @format */

import Image from "next/image";
export default function MyComponent() {
  return (
    <div className="flex justify-center flex-wrap mx-2 my-4">
      <Image
        className="w-full lg:w-1/2 fadeUp"
        width={400}
        height={400}
        src="/img/illust/simplePersonPict.svg"
      />
      <div className="w-full lg:w-1/2 ">
        <div className="h-1/4 fadeUp delay-time02 flex items-center py-2 justify-center">
          <div className="w-1/12 ">
            <span class="material-icons arrow-rotate">arrow_back</span>
          </div>
          <div className="w-11/12">
            <p>VRChat楽しい</p>
          </div>
        </div>
        <div className="h-2/4 fadeUp delay-time02 flex items-center py-2 justify-center">
          <div className="w-1/12 ">
            <span class="material-icons arrow-rotate">arrow_back</span>
          </div>
          <div className="w-11/12">
            <p>キャラメルポップコーン美味しい</p>
          </div>
        </div>
        <div className="h-2/4 fadeUp delay-time02 flex items-center py-2 justify-center">
          <div className="w-1/12 ">
            <span class="material-icons arrow-rotate">arrow_back</span>
          </div>
          <div className="w-11/12">
            <p>VRChat楽しい</p>
          </div>
        </div>
      </div>
    </div>
  );
}
