/** @format */
import Image from "next/image";

export default function WorksGallery(props) {
  const isClient = () => typeof window !== "undefined";
  if (isClient()) {
    const modalWrapper = document.querySelector(".modal-wrapper");
    const images = document.querySelectorAll(".gallery-content-image");
    const modalImage = document.querySelector(".modal-image");

    if (images != null) {
      images.forEach(function (image) {
        image.addEventListener("click", function () {
          modalWrapper.classList.add("show");
          modalImage.classList.add("show");

          var imageSrc = image.getAttribute("data-src");
          modalImage.src = imageSrc;
        });
      });
    }
    if (modalImage != null) {
      modalWrapper.addEventListener("click", function () {
        if (this.classList.contains("show")) {
          this.classList.remove("show");
          modalImage.classList.remove("show");
        }
      });
    }
  }
  // 参考:https://logsuke.com/web/programming/javascript/javascript-modal-animation
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
          .gallery-content {
            width: 100%;
            height: auto;
          }
        }

        .gallery-content img {
          cursor: pointer;
        }

        /* modal */

        .modal-wrapper {
          width: 100%;
          height: 100%;
          position: fixed;
          top: 0;
          left: 0;
          background: rgba(0, 0, 0, 0.5);
          pointer-events: none;
          opacity: 0;
          transition: 0.25s ease-out;
        }

        .modal-wrapper.show {
          opacity: 1;
          z-index: 2;
          pointer-events: all;
        }

        .modal-image {
          position: absolute;
          max-width: 80%;
          max-height: 80%;
          top: 50%;
          left: 50%;
          object-fit: cover;
          opacity: 0;
          transform: translate(-50%, -60%);
          transition: 0.5s ease-out;
        }

        .modal-image.show {
          opacity: 1;
        }
      `}</style>
      <div className="flex items-center justify-center flex-wrap mx-4 lg:mx-24">
        {props.image_urls.map((value, key) => {
          return (
            <div key={key}>
              <div className="modal-wrapper hidden md:block">
                <div className="modal-image">
                  <Image
                    width={3840}
                    height={2160}
                    src={value}
                    objectFit="contain"
                    className="modal-image"
                  />
                </div>
              </div>
              <div className="gallery-content">
                <Image
                  className="gallery-content-image"
                  width={500}
                  height={500}
                  src={value}
                  objectFit="cover"
                />
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
