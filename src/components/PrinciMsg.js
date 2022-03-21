export function MsgFromPrinci() {
  return (
    <section className="bg-primary2 text-white lg:px-24 lg:py-5 border-t-[#FE6D73] border-y-2">
      <h1 className="pt-5 text-center font-bold text-4xl">
        Message from Principal
      </h1>

      <div className="text-center md:flex mt-5 md:mt-0">
        <img
          src="./principal_img.jpeg"
          alt=""
          className="w-4/5 mx-auto md:w-4/12 md:m-10"
        />
        <div className="md:my-auto">
          <p className="text-justify px-8 mt-5 text-lg font-mono tracking-wider">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolorem
            praesentium accusamus molestiae omnis officia perferendis libero!
            Nulla, eius, voluptatibus nesciunt doloribus pariatur voluptas
            tenetur tempora minus veniam inventore earum quo. At,Lorem ipsum,
            dolor sit amet consectetur adipisicing elit. Dolorem praesentium
            accusamus molestiae omnis officia perferendis libero! Nulla, eius,
            voluptatibus nesciunt doloribus pariatur voluptas tenetur tempora
            minus veniam inventore earum quo. At quae. Tenetur blanditiis
            explicabo officia nostrum qui exercitationem doloribus.
          </p>
        </div>
      </div>
      <div className="text-center">
        <button className="tranform duration-200 my-2 mb-7 transparent-btn text-xl px-5 py-2 font-medium hover:text-secondary2">
          Read More
        </button>
      </div>
    </section>
  );
}