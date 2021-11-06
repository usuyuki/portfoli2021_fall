/** @format */
import Image from "next/image";
export default function WorksGallery(props) {
  return (
    <div>
      <style jsx>{`
        .gallery-content {
          width: 50%;
          height: auto;
          padding: 10px;
        }
        @media screen and (max-width: 599px) {
          /* スマホ */
          .gallery-content {
            width: 75%;
          }
        }
      `}</style>
      <div className="flex items-center justify-center flex-wrap">
        {props.image_urls.map((value, key) => {
          return (
            <Image
              width={500}
              height={500}
              src={value}
              key={key}
              className="gallery-content"
            />
          );
        })}
      </div>
    </div>
  );
}
