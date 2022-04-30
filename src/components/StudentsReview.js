import { Navigation, Pagination, Scrollbar, A11y } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import "./StudentReview.css";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

function IndivStudent() {
  return (
    <SwiperSlide>
      <span className="px-2 bg-white py-5 flex flex-row justify-center gap-10 bg-gradient-to-b from-primary to-primary2 dark:from-primary_dark dark:to-primary2_dark text-white">
        <span>
          <img src="/student1.jpg" className="w-64" />
          <h2 className="text-xl md:text-2xl text-center my-2">Name</h2>
          <h3 className="text-lg md:text-xl text-center my-2">Placement</h3>
        </span>
        <span className="my-auto pb-16">
          This is info given by student about college. College is great for
          example.
        </span>
      </span>
    </SwiperSlide>
  );
}

export function StudentReview() {
  return (
    <div className="bg-gradient-to-b from-primary to-primary2 dark:from-primary_dark dark:to-primary2_dark text-white border-y-2 border-b-[#FE6D73] border-t-[#FE6D73] cursor-pointer">
      <h1 className="pt-5 text-center font-semibold text-4xl mb-2">
        Our Students
      </h1>
      <Swiper
        spaceBetween={0}
        slidesPerView={1}
        modules={[Navigation, Pagination, Scrollbar, A11y]}
        navigation
        pagination={{
          dynamicBullets: true,
        }}
        observer={true}
        observeParents={true}
      >
        <SwiperSlide>
          <span className="px-2 bg-transparent flex flex-row justify-center gap-10 py-10">
            <span>
              <img src="/student1.jpg" className="w-64" />
              <h2 className="text-xl md:text-2xl text-center my-2">Name</h2>
              <h3 className="text-lg md:text-xl text-center my-2">Placement</h3>
            </span>
            <span className="my-auto pb-16 text-lg md:text-xl">
              This is info given by student about college. College is great for
              example.
            </span>
          </span>
        </SwiperSlide>
        <SwiperSlide>
          <span className="px-2 bg-transparent flex flex-row justify-center gap-10 py-10">
            <span>
              <img src="/student1.jpg" className="w-64" />
              <h2 className="text-xl md:text-2xl text-center my-2">Name</h2>
              <h3 className="text-lg md:text-xl text-center my-2">Placement</h3>
            </span>
            <span className="my-auto pb-16 text-lg md:text-xl">
              This is info given by student about college. College is great for
              example.
            </span>
          </span>
        </SwiperSlide>
      </Swiper>
    </div>
  );
}
