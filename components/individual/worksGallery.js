/** @format */
import Image from "next/image";
import SwiperCore, { Autoplay, Pagination } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";

SwiperCore.use([Autoplay, Pagination]);

export default function WorksGallery(props) {
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
                objectFit="contain"
              />
            </SwiperSlide>
          );
        })}
      </Swiper>
    </div>
  );
}
