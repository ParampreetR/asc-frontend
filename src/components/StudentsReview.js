import { Navigation, Pagination, Scrollbar, A11y } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Autoplay } from "swiper";

import "./StudentReview.css";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

// function IndivStudent() {
//   return (
//     <SwiperSlide>
//       <span className="px-2 bg-white py-5 flex flex-row justify-center gap-10 bg-gradient-to-b from-primary to-primary2 dark:from-primary_dark dark:to-primary2_dark text-white">
//         <span>
//           <img src="/student1.jpg" className="w-64" />
//           <h2 className="text-xl md:text-2xl text-center my-2">Name</h2>
//           <h3 className="text-lg md:text-xl text-center my-2">Placement</h3>
//         </span>
//         <span className="my-auto pb-16">
//           This is info given by student about college. College is great for
//           example.
//         </span>
//       </span>
//     </SwiperSlide>
//   );
// }

// export function StudentReview() {
//   return (
//     <div className="bg-gradient-to-b from-primary to-primary2 dark:from-primary_dark dark:to-primary2_dark text-white border-y-2 border-b-[#FE6D73] dark:border-b-[#910107] border-t-[#FE6D73] dark:border-t-[#910107] cursor-pointer">
//       <h1 className="pt-5 text-center font-semibold text-4xl mb-2">
//         Our Students
//       </h1>
//       <Swiper
//         spaceBetween={0}
//         slidesPerView={1}
//         modules={[Navigation, Pagination, Scrollbar, A11y]}
//         navigation
//         pagination={{
//           dynamicBullets: true,
//         }}
//         observer={true}
//         observeParents={true}
//       >
//         <SwiperSlide>
//           <span className="px-2 bg-transparent flex flex-row justify-center gap-10 py-10">
//             <span>
//               <img src="/student1.jpg" className="w-64" />
//               <h2 className="text-xl md:text-2xl text-center my-2">Name</h2>
//               <h3 className="text-lg md:text-xl text-center my-2">Placement</h3>
//             </span>
//             <span className="my-auto pb-16 text-lg md:text-xl">
//               This is info given by student about college. College is great for
//               example.
//             </span>
//           </span>
//         </SwiperSlide>
//         <SwiperSlide>
//           <span className="px-2 bg-transparent flex flex-row justify-center gap-10 py-10">
//             <span>
//               <img src="/student1.jpg" className="w-64" />
//               <h2 className="text-xl md:text-2xl text-center my-2">Name</h2>
//               <h3 className="text-lg md:text-xl text-center my-2">Placement</h3>
//             </span>
//             <span className="my-auto pb-16 text-lg md:text-xl">
//               This is info given by student about college. College is great for
//               example.
//             </span>
//           </span>
//         </SwiperSlide>
//       </Swiper>
//     </div>
//   );
// }

export function StudentReview() {
  SwiperCore.use(Autoplay);

  return (
    <div className="bg-gradient-to-b from-primary to-primary2 dark:from-primary_dark dark:to-primary2_dark text-white border-y-2 border-b-[#FE6D73] dark:border-b-[#910107] border-t-[#FE6D73] dark:border-t-[#910107] md:px-16 lg:px-24 xl:px-36">
      <div className="flex flex-col lg:flex-row mx-auto max-w-[1440px] my-16 justify-between">
        <div className="grid grid-cols-3 gap-4 m-auto">
          <div className="bg-white text-center w-40 h-24 flex flex-col justify-center rounded-sm">
            <div className="text-center text-black text-lg font-medium">
              Students
            </div>
            <div className="text-center text-2xl font-medium text-primary">
              1000
            </div>
          </div>
          <div className="bg-white text-center w-40 h-24 flex flex-col justify-center rounded-sm">
            <div className="text-center text-black text-lg font-medium">
              Alumini
            </div>
            <div className="text-center text-2xl font-medium text-primary">
              1000
            </div>
          </div>
          <div className="bg-white text-center w-40 h-24 flex flex-col justify-center rounded-sm">
            <div className="text-center text-black text-lg font-medium">
              Years of Legacy
            </div>
            <div className="text-center text-2xl font-medium text-primary">
              1000
            </div>
          </div>
          <div className="bg-white text-center w-40 h-24 flex flex-col justify-center rounded-sm">
            <div className="text-center text-black text-lg font-medium">
              Classrooms
            </div>
            <div className="text-center text-2xl font-medium text-primary">
              1000
            </div>
          </div>
          <div className="bg-white text-center w-40 h-24 flex flex-col justify-center rounded-sm">
            <div className="text-center text-black text-lg font-medium">
              Skilled Courses
            </div>
            <div className="text-center text-2xl font-medium text-primary">
              1000
            </div>
          </div>
          <div className="bg-white text-center w-40 h-24 flex flex-col justify-center rounded-sm">
            <div className="text-center text-black text-lg font-medium">
              PG Programmes
            </div>
            <div className="text-center text-2xl font-medium text-primary">
              1000
            </div>
          </div>
          <div className="bg-white text-center w-40 h-24 flex flex-col justify-center rounded-sm">
            <div className="text-center text-black text-lg font-medium">
              Faculty
            </div>
            <div className="text-center text-2xl font-medium text-primary">
              1000
            </div>
          </div>
          <div className="bg-white text-center w-40 h-24 flex flex-col justify-center rounded-sm">
            <div className="text-center text-black text-lg font-medium">
              Laboratories
            </div>
            <div className="text-center text-2xl font-medium text-primary">
              1000
            </div>
          </div>
          <div className="bg-white text-center w-40 h-24 flex flex-col justify-center rounded-sm">
            <div className="text-center text-black text-lg font-medium">
              Computers
            </div>
            <div className="text-center text-2xl font-medium text-primary">
              1000
            </div>
          </div>
        </div>
        <div className="w-96 p-5 m-auto">
          <Swiper
            spaceBetween={0}
            autoplay={{
              delay: 5000,
              disableOnInteraction: true,
            }}
            speed={1000}
            slidesPerView={1}
            modules={[Navigation, A11y, Autoplay]}
            observer={true}
            observeParents={true}
          >
            <SwiperSlide>
              <span className="px-2 bg-transparent flex flex-col justify-center gap-10 py-2">
                <span>
                  <img
                    src="/student1.jpg"
                    className="w-[20vw] xl:w-[30vw] mx-auto"
                  />
                  <h2 className="text-xl md:text-2xl text-center my-1">Name</h2>
                  <h3 className="text-lg md:text-xl text-center my-1">
                    Placement
                  </h3>
                </span>

                <span className="my-auto py-2 text-lg">
                  This is info given by student about college. College is great
                  for
                </span>
              </span>
            </SwiperSlide>
            <SwiperSlide>
              <span className="px-2 bg-transparent flex flex-col justify-center gap-10 py-2">
                <span>
                  <img
                    src="/student1.jpg"
                    className="w-[20vw] xl:w-[30vw] mx-auto"
                  />
                  <h2 className="text-xl md:text-2xl text-center my-1">Name</h2>
                  <h3 className="text-lg md:text-xl text-center my-1">
                    Placement
                  </h3>
                </span>

                <span className="my-auto py-2 text-lg">
                  This is info given by student about college. College is great
                  for
                </span>
              </span>
            </SwiperSlide>
            <SwiperSlide>
              <span className="px-2 bg-transparent flex flex-col justify-center gap-10 py-2">
                <span>
                  <img
                    src="/student1.jpg"
                    className="w-[20vw] xl:w-[30vw] mx-auto"
                  />
                  <h2 className="text-xl md:text-2xl text-center my-1">Name</h2>
                  <h3 className="text-lg md:text-xl text-center my-1">
                    Placement
                  </h3>
                </span>

                <span className="my-auto py-2 text-lg">
                  This is info given by student about college. College is great
                  for
                </span>
              </span>
            </SwiperSlide>
          </Swiper>
        </div>
      </div>
    </div>
  );
}
