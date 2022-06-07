export function Canteen() {
  return (
    <div className="my-12 mx-8  md:mx-16 lg:mx-24 xl:mx-36">
      <div className="mx-auto">
        <h1 className="mt-5 text-center text-2xl md:text-4xl my-2 md:my-4 text-[#141E27] dark:text-[#227C9D] font-bold">
          Canteen
        </h1>
        <p className="text-black dark:text-white my-1 text-md md:text-lg mt-10 max-w-200">
          A fully furnished canteen with separate sitting places for boys, girls
          and· staff is maintained by a private contractor. It serves
          hygienically prepared snacks, cold drinks and confectionery items on
          reasonable prices approved by the Canteen Committee of the college.
        </p>
      </div>

      <div className="inline-block max-w-100">
        <img src="/canteen1.jpg"></img>
        <img src="/canteen2.jpg"></img>
      </div>
    </div>
  );
}
