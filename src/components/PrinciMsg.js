export function MsgFromPrinci() {
  return (
    <section className="text-white  border-t-[#FE6D73] border-b-[#FE6D73] border-y-2 section md:px-16 lg:px-24 xl:px-36 bg-gradient-to-b from-primary to-primary2">
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
          <div className="md:my-auto md:w-8/12 ml-10">
            <p className="mt-5 text-lg writing">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolorem
              praesentium accusamus molestiae omnis officia perferendis libero!
              Nulla, eius, voluptatibus nesciunt doloribus pariatur
            </p>
            <p className="mt-5 text-lg writing">
              At,Lorem ipsum, dolor sit amet consectetur adipisicing elit.
              Dolorem praesentium accusamus molestiae omnis officia perferendis
              libero!
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
