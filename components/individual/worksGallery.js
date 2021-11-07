/** @format */
import Image from "next/image";
export default function WorksGallery(props) {
  return (
    <div>
      <style jsx>{`
        .gallery-content {
          padding: 10px;
          width: 50%;
          height: auto;
        }
        .gallery-content img {
          height: 100%;
        }
        @media screen and (max-width: 599px) {
          /* スマホ */
          .gallery-content img {
            width: 75%;
            height: auto;
          }
        }
      `}</style>
      <div className="flex items-center justify-center flex-wrap mx-4 md:mx-24">
        {props.image_urls.map((value, key) => {
          return (
            <div className="gallery-content" key={key}>
              <Image width={500} height={500} src={value} objectFit="cover" />
            </div>
          );
        })}
      </div>
    </div>
  );
}
