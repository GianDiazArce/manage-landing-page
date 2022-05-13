import { Autoplay, Manipulation, Pagination } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/autoplay";
import "swiper/css/manipulation";
import "swiper/css/pagination";

import { whatTheySaid } from "../../db/texts";
import { Testimonials } from "../testimonials";

export const CustomSlider = () => {
  return (
    <div className="mt-10 w-full px-2 relative">
      <Swiper
        modules={[Manipulation, Pagination, Autoplay]}
        centeredSlides={true}
        loop={true}
        autoplay={{ delay: 3000, disableOnInteraction: false }}
        slidesPerView={3}
        spaceBetween={40}
        autoHeight
        pagination={{
          clickable: true,
        }}
        tag="div"
        wrapperTag="ul"
        breakpoints={{
          "100": {
            slidesPerView: 1,
            spaceBetween: 20,
          },
          "350": {
            slidesPerView: 1,
            spaceBetween: 20,
          },
          "640": {
            slidesPerView: 1,
            spaceBetween: 20,
          },
          "769": {
            slidesPerView: 2,
            spaceBetween: 30,
          },
          "1025": {
            slidesPerView: 3,
            spaceBetween: 40,
          },
        }}
        className="min-h-[300px] flex justify-center items-center cursor-grab active:cursor-grabbing"
      >
        {whatTheySaid.map((testimonial, i) => {
          return (
            <SwiperSlide key={i} tag="li" style={{ overflow: "visible" }}>
              <Testimonials testimonial={testimonial} />
            </SwiperSlide>
          );
        })}
      </Swiper>
    </div>
  );
};
