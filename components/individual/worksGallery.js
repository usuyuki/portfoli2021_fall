/** @format */
import Image from "next/image";
import SwiperCore, { Autoplay, Pagination } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";

SwiperCore.use([Autoplay, Pagination]);

export default function WorksGallery(props) {
  const loadedImage = (e) => {
    console.log(e);
    // var imageElement = document.getElementById("sample");

    // imageElement.classList.remove("img-loading");
  };
  let imageKey = 0;
  const params = {
    //Swiperの設定
    initialSlide: 0,
    spaceBetween: 10,
    slidesPerView: 1.25,
    pagination: true,
    centeredSlides: true,
    autoplay: {
      delay: 3000,
      disableOnInteraction: false,
    },
    loop: true,
  };
  return (
    <div className="">
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
        .swiper-slide image {
        }
        .img-loading {
          width: 300px;
          height: 300px;
          display: hidden !important;
        }
      `}</style>
      {/* {ua=="pc"?():()} */}
      <Swiper tag="nav" {...params}>
        {props.image_urls.map((value, key) => {
          return (
            <SwiperSlide key={key}>
              <Image
                width={2000}
                height={2000}
                src={value}
                id={"img_" + key}
                objectFit="contain"
                className="img-loading"
                onLoadingComplete={() => {
                  var imageElement = document.getElementById("img_" + key);
                  console.log(imageElement);

                  imageElement.classList.remove("img-loading");
                  console.log(imageElement);
                }}
              />
            </SwiperSlide>
          );
        })}
      </Swiper>
    </div>
  );
}
