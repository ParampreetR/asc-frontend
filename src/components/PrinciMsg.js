export function MsgFromPrinci() {
  return (
    <section className="text-white  border-t-[#FE6D73] border-b-[#FE6D73] border-y-2 section md:px-16 lg:px-24 xl:px-36 bg-gradient-to-b from-primary to-primary2 dark:from-primary_dark dark:to-primary2_dark">
      <div className="mx-auto max-w-[1440px]">
        <h1 className="pt-5 text-center font-semibold text-4xl mb-10">
          Message from Principal
        </h1>

        <div className="text-center md:flex md:justify-between mt-5 md:mt-0 my-16">
          <div className="my-auto pb-10">
            <img
              src="./principal_img.jpeg"
              alt=""
              className="w-52 mx-auto md:w-96"
            />
          </div>
          <div className="md:my-auto md:w-8/12 ml-0 md:ml-10">
            <p className="mt-5 text-lg writing">
              It gives me immense pleasure to congratulate you on choosing A. S.
              College, Khanna for admission.
            </p>
            <p className="mt-5 text-lg writing">
              At A S College, our aim to provide the best possible environment
              in which students can succeed and excel in all spheres of life.
              Our campus has grown from its inception in 1946 to accommodate
              over 3000 students.
            </p>
            <button className="tranform duration-200 my-2 mb-7 mt-3 transparent-btn text-xl px-5 py-2 font-medium hover:text-secondary2">
              Read More
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
