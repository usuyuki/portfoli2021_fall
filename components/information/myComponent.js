/** @format */

/** @format */
import Image from "next/image";
export default function MyComponent() {
  return (
    <div className="flex justify-center flex-wrap mx-2 my-4">
      <Image
        className="w-full lg:w-1/2"
        width={400}
        height={400}
        src="/img/illust/simplePersonPict.svg"
      />
      <div className="w-full lg:w-1/2 ">
        <div className="h-1/4">
          <p>VRChat楽しい</p>
        </div>
        <div className="h-2/4">
          <p>VRChat楽しい</p>
        </div>
        <div className="h-1/4">
          <p>VRChat楽しい</p>
        </div>
      </div>
    </div>
  );
}
