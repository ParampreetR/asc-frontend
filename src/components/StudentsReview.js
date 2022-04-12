import { useState } from "react";
import { useEffect } from "react";
import "./StudentReview.css";

export function StudentReview() {
  let [scroll, setScroll] = useState(0);
  let [backSide, setBackSide] = useState(false);
  let [myInterval, setMyInterval] = useState({});

  const scrollerInit = () => {
    setMyInterval(
      setInterval(() => {
        if (backSide) setScroll(scroll--);
        else setScroll(scroll++);
        document.getElementsByClassName("no-scrollbar")[0].scrollLeft = scroll;

        if (
          scroll >
          document.getElementsByClassName("no-scrollbar")[0].scrollWidth -
            document.getElementsByClassName("no-scrollbar")[0].clientWidth
        )
          setBackSide(true);
        if (scroll <= 0) setBackSide(false);
      }, 50)
    );
  };

  const scrollDes = () => {
    setMyInterval((interval) => {
      clearInterval(interval);
      return {};
    });
  };

  useEffect(() => {
    scrollerInit();
    return scrollDes;
  }, [backSide]);

  return (
    <section
      className="bg-gradient-to-b from-primary to-primary2 dark:from-primary_dark dark:to-primary2_dark border-y-2 border-b-[#FE6D73] border-t-[#FE6D73] section"
      onMouseEnter={() => scrollDes()}
      onMouseLeave={() => scrollerInit()}
    >
      <div className="flex  overflow-y-hidden  flex-nowrap overflow-x-auto no-scrollbar">
        <div className="h-[512px] w-[400px] m-8 bg-secondary dark:bg-secondary_dark2 inline-block flex-auto flex-shrink-0">
          <div className="h-48"></div>
          <div className="text-white">Hello</div>
        </div>
        <div className="h-[512px] w-[400px] m-8 bg-secondary dark:bg-secondary_dark2 inline-block flex-auto flex-shrink-0">
          <div className="h-48"></div>
          <div className="text-white">Hello</div>
        </div>
        <div className="h-[512px] w-[400px] m-8 bg-secondary dark:bg-secondary_dark2 inline-block flex-auto flex-shrink-0">
          <div className="h-48"></div>
          <div className="text-white">Hello</div>
        </div>
      </div>
      <div className=""></div>
    </section>
  );
}
