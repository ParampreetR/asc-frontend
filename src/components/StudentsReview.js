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
        <div className="grid grid-cols-2 2xl:grid-cols-3 gap-4 m-auto xl 2xl:mr-5">
          <div className="bg-white text-center w-52 h-32 2xl:h-36 flex flex-col justify-center rounded-sm">
            <div className="text-center text-black text-lg font-medium">
              Students
            </div>
            <div className="text-center text-2xl font-medium text-primary ">
              2000
            </div>
          </div>
          <div className="bg-white text-center w-52 h-32 2xl:h-36 flex flex-col justify-center rounded-sm">
            <div className="text-center text-black text-lg font-medium">
              Alumini
            </div>
            <div className="text-center text-2xl font-medium text-primary ">
              1500
            </div>
          </div>
          <div className="bg-white text-center w-52 h-32 2xl:h-36 flex flex-col justify-center rounded-sm">
            <div className="text-center text-black text-lg font-medium">
              Years of Legacy
            </div>
            <div className="text-center text-2xl font-medium text-primary ">
              76
            </div>
          </div>
          <div className="bg-white text-center w-52 h-32 2xl:h-36 flex flex-col justify-center rounded-sm">
            <div className="text-center text-black text-lg font-medium">
              Classrooms
            </div>
            <div className="text-center text-2xl font-medium text-primary ">
              40
            </div>
          </div>
          <div className="bg-white text-center w-52 h-32 2xl:h-36 flex flex-col justify-center rounded-sm">
            <div className="text-center text-black text-lg font-medium">
              Skilled Courses
            </div>
            <div className="text-center text-2xl font-medium text-primary ">
              18
            </div>
          </div>
          <div className="bg-white text-center w-52 h-32 2xl:h-36 flex flex-col justify-center rounded-sm">
            <div className="text-center text-black text-lg font-medium">
              PG Programmes
            </div>
            <div className="text-center text-2xl font-medium text-primary ">
              8
            </div>
          </div>
          <div className="bg-white text-center w-52 h-32 2xl:h-36 flex flex-col justify-center rounded-sm">
            <div className="text-center text-black text-lg font-medium">
              Faculty
            </div>
            <div className="text-center text-2xl font-medium text-primary ">
              70
            </div>
          </div>
          <div className="bg-white text-center w-52 h-32 2xl:h-36 flex flex-col justify-center rounded-sm">
            <div className="text-center text-black text-lg font-medium">
              Laboratories
            </div>
            <div className="text-center text-2xl font-medium text-primary ">
              15
            </div>
          </div>
          <div className="bg-white text-center w-52 h-32 2xl:h-36 flex flex-col justify-center rounded-sm">
            <div className="text-center text-black text-lg font-medium">
              Computers
            </div>
            <div className="text-center text-2xl font-medium text-primary ">
              150
            </div>
          </div>
        </div>
        <div className="md:w-[25vw] lg:w-[30vw] xl:w-[35vw] 2xl:w-[40vw] p-5 ml-14 m-auto">
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
                    src="/Shreya_1650095843.jpg"
                    className="w-[10vw] xl:w-[15vw] mx-auto"
                  />
                  <h2 className="text-xl md:text-2xl text-center my-1">
                    Shreye B.C.A(2017-20S)
                  </h2>
                  <h3 className="text-lg md:text-xl text-center my-1">
                    Placement
                  </h3>
                </span>
                <span className="my-auto py-2 text-lg">
                  "College inspired me to think differently,it's like no other
                  time in your life.I had best time and memories for life time
                  at A.S college, Khanna. Our teachers had changed our lives
                  with the right mixture of chalk and challenges ...I am lucky
                  and proud to be a part of this reputable college."
                </span>
              </span>
            </SwiperSlide>
            <SwiperSlide>
              <span className="px-2 bg-transparent flex flex-col justify-center gap-10 py-2">
                <span>
                  <img
                    src="/Jagroop Singh_1652357051.jpg"
                    className="w-[10vw] xl:w-[15vw] mx-auto"
                  />
                  <h2 className="text-xl md:text-2xl text-center my-1">
                    Jagroop Singh, M.A(Political Science) 2014
                  </h2>
                  <h3 className="text-lg md:text-xl text-center my-1">
                    Placement
                  </h3>
                </span>

                <span className="my-auto py-2 text-lg">
                  "I Postgraduated in Political Science from AS College, Khanna
                  in 2014. Those were the best days of my life .Positive
                  Environment and exceptionally qualified professors are the
                  main features of this institute. The Post Graduate Department
                  of Political Science provided me with vast subject knowledge
                  and great moral values. Studing here implies that you are on
                  the right way to achieve your goals and to fulfill your
                  dreams. Now Lecturer, Government Girls senior Secendary Smart
                  School, Mandi Gobindgarh"
                </span>
              </span>
            </SwiperSlide>
            <SwiperSlide>
              <span className="px-2 bg-transparent flex flex-col justify-center gap-10 py-2">
                <span>
                  <img
                    src="/Rishab Goyal_1652165209.jpg"
                    className="w-[10vw] xl:w-[15vw] mx-auto"
                  />
                  <h2 className="text-xl md:text-2xl text-center my-1">
                    Rishab Goyal, B.Com (2018 - 2021)
                  </h2>
                  <h3 className="text-lg md:text-xl text-center my-1">
                    Placement
                  </h3>
                </span>
                <span className="my-auto py-2 text-lg">
                  "I am Rishab Goyal, currently pursuing my MBA from IIM Rohtak.
                  The foundation for my dream journey was laid down during my 3
                  years of graduation at A.S. College Khanna. Amidst the support
                  of highly intellectual and experienced faculties, I witnessed
                  my skill and competence rising to a zenith. Those 3 years at
                  A.S. College encouraged me to think beyond the limits and to
                  work for my dreams in order to make them a reality. To all the
                  future talents, just a piece of advice – “Never think of
                  yourself as incompetent or incapable of achieving something.
                  If you are passionate, then you can definitely fulfill all
                  your dreams.”"
                </span>
              </span>
            </SwiperSlide>
            <SwiperSlide>
              <span className="px-2 bg-transparent flex flex-col justify-center gap-10 py-2">
                <span>
                  <img
                    src="/Simranjot Kaur_1652684897.jpg"
                    className="w-[10vw] xl:w-[15vw] mx-auto"
                  />
                  <h2 className="text-xl md:text-2xl text-center my-1">
                    Simranjot Kaur, M.Sc. Chemistry(Batch 2019-2021)
                  </h2>
                  <h3 className="text-lg md:text-xl text-center my-1">
                    Placement
                  </h3>
                </span>
                <span className="my-auto py-2 text-lg">
                  "College inspired me to think differently,it's like no other
                  time in your life.I had best time and memories for life time
                  at A.S college, Khanna. Our teachers had changed our lives
                  with the right mixture of chalk and challenges ...I am lucky
                  and proud to be a part of this reputable college."
                </span>
              </span>
            </SwiperSlide>
            <SwiperSlide>
              <span className="px-2 bg-transparent flex flex-col justify-center gap-10 py-2">
                <span>
                  <img
                    src="/Shaina Arora_1650095873.jpg"
                    className="w-[10vw] xl:w-[15vw] mx-auto"
                  />
                  <h2 className="text-xl md:text-2xl text-center my-1">
                    Shaina Arora, M.COM(2016-18)
                  </h2>
                  <h3 className="text-lg md:text-xl text-center my-1">
                    Placement
                  </h3>
                </span>
                <span className="my-auto py-2 text-lg">
                  "Genuine endeavors and the hard work of A S College faculty
                  gave me a door to my profession. Department of Commerce at A S
                  college has been very supportive throughout the journey and I
                  have been placed as an Assistant professor at Chandigarh
                  University. I give credit to my prosperity to my educators
                  whose direction at each progression assisted me with noshing
                  my abilities."
                </span>
              </span>
            </SwiperSlide>
          </Swiper>
        </div>
      </div>
    </div>
  );
}
