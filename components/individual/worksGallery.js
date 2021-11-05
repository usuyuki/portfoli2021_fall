/** @format */
import Link from "next/link";
export default function WorksGallery(props) {
  return (
    <div>
      <style jsx>{`
        .gallery-content {
          width: 25%;
          height: auto;
          margin: 10px;
        }
      `}</style>
      <div className="flex items-center justify-center flex-wrap">
        {props.image_urls.map((value, key) => {
          return <img src={value} key={key} className="gallery-content" />;
        })}
      </div>
    </div>
  );
}
