/** @format */

/** @format */
import Image from "next/image";
export default function SocialIcons() {
  return (
    <div>
      <div className="flex mt-20  mx-2 lg:mx-20 items-center justify-center flex-wrap">
        {/* Twitter */}
        <div className="w-16 h-auto p-4">
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://twitter.com/usuyuki26"
          >
            <Image
              width={1034}
              height={851}
              src="/img/icons/2021 Twitter logo - blue.png"
            />
          </a>
        </div>
        {/* GitHub */}
        <div className="w-16 h-auto p-4">
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://github.com/Usuyuki"
          >
            <Image
              width={64}
              height={64}
              src="/img/icons/GitHub-Mark-64px.png"
            />
          </a>
        </div>
        {/* Youtube */}
        <div className="w-16 h-auto p-4">
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://www.youtube.com/channel/UCI4-1pvH-0XdwfKZe4WBPhQ"
          >
            <Image
              width={64}
              height={45}
              src="/img/icons/youtube_social_icon_red.png"
            />
          </a>
        </div>
        {/* Qiita */}
        <div className="w-16 h-auto p-4">
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://qiita.com/Usuyuki"
          >
            <Image width={300} height={300} src="/img/icons/Qiita.png" />
          </a>
        </div>
        {/* Zenn */}
        <div className="w-16 h-auto p-4">
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://zenn.dev/usuyuki"
          >
            <Image width={64} height={64} src="/img/icons/Zenn.svg" />
          </a>
        </div>
      </div>
      <div className="flex items-center  mb-12 mx-2 justify-center flex-wrap ">
        <span class="material-icons">chat_bubble</span>
        <p className="">SNSなど</p>
      </div>
    </div>
  );
}
