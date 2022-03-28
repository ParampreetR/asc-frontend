import { useState } from "react";

export function ThreeSwitch() {
  const [sectionNum, setSectionNum] = useState(1);
  return (
    <div className="flex flex-row justify-around">
      <div className="flex flex-col w-1/6">
        <button
          className={
            "transform duration-200 flex flex-row justify-around h-16 border-4 border-primary2 shadow-md my-2 bg-white " +
            (sectionNum === 1 ? "w-36" : "w-16")
          }
          onClick={() => setSectionNum(1)}
        >
          <img src="/Icons/calander.png" className="w-14 inline my-auto" />
          <span
            className={"my-auto font-medium " + (sectionNum !== 1 && "hidden")}
          >
            Events
          </span>
        </button>
        <button
          className={
            "transform duration-200 flex flex-row justify-around h-16 border-4 border-primary2 shadow-md my-2 bg-white " +
            (sectionNum === 2 ? "w-36" : "w-16")
          }
          onClick={() => setSectionNum(2)}
        >
          <img src="/Icons/news.png" className="w-14 inline my-auto" />
          <span
            className={"my-auto font-medium " + (sectionNum !== 2 && "hidden")}
          >
            News
          </span>
        </button>
        <button
          className={
            "transform duration-200 flex flex-row justify-around h-16 border-4 border-primary2 shadow-md my-2 bg-white " +
            (sectionNum === 3 ? "w-36" : "w-16")
          }
          onClick={() => setSectionNum(3)}
        >
          <img src="/Icons/articles.png" className="w-10 inline my-auto" />
          <span
            className={"my-auto font-medium " + (sectionNum !== 3 && "hidden")}
          >
            Articles
          </span>
        </button>
      </div>
      <div className="bg-white border-4 border-primary2 w-4/6 overflow-y-auto h-56 my-auto px-5 py-2">
        <p className="p-2 text-center text-lg font-medium">Event 1</p>
        <div className="bg-black opacity-30 h-[1px] w-3/6 mx-auto"></div>
        <p className="p-2 text-center text-lg font-medium">Event 1</p>
        <div className="bg-black opacity-30 h-[1px] w-3/6 mx-auto"></div>
        <p className="p-2 text-center text-lg font-medium">Event 1</p>
      </div>
    </div>
  );
}
