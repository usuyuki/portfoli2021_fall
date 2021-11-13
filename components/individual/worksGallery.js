/** @format */
import Image from "next/image";
import SwiperCore, {
  Autoplay,
  Navigation,
  Pagination,
  Scrollbar,
  A11y,
} from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

SwiperCore.use([Autoplay, Navigation, Pagination, Scrollbar, A11y]);

export default function WorksGallery(props) {
  const params = {
    //Swiperの設定
    initialSlide: 0,
    spaceBetween: 40,
    slidesPerView: 1.5,
    // navigation: true,
    // Pagination: {
    //   el: ".swiper-pagination",
    //   clickable: true,
    // },
    scrollbar: true,
    centeredSlides: true,
    autoplay: {
      delay: 3000,
      disableOnInteraction: false,
    },
    loop: true,
  };
  return (
    <div className="o">
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
      <Swiper tag="nav" {...params}>
        {props.image_urls.map((value, key) => {
          return (
            <SwiperSlide key={key}>
              <Image width={1920} height={1080} src={value} objectFit="cover" />
            </SwiperSlide>
          );
        })}
      </Swiper>
    </div>
  );
}
