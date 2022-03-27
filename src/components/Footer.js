import { Link } from "react-router-dom";

export function Footer() {
  return (
    <section className="bg-[#EEEDDE] pt-20 pb-5">
      <div className="mx-10 md:mx-14 lg:mx-20 xxl:mx-32 flex flex-row justify-around">
        <div>
          <div className="flex flex-col mb-10">
            <h1 className="text-xl mb-1 font-medium text-primary">
              Quick Links
            </h1>
            <Link to="#" className="text-[#FE6D73] hover:text-[#a54548]">
              Home
            </Link>
            <Link to="#" className="text-[#FE6D73] hover:text-[#a54548]">
              About Us
            </Link>
            <Link to="#" className="text-[#FE6D73] hover:text-[#a54548]">
              Admission
            </Link>
            <Link to="#" className="text-[#FE6D73] hover:text-[#a54548]">
              Courses
            </Link>
            <Link to="#" className="text-[#FE6D73] hover:text-[#a54548]">
              Fee-Details
            </Link>
            <Link to="#" className="text-[#FE6D73] hover:text-[#a54548]">
              Rules
            </Link>
          </div>
          <div className="flex flex-col mb-10">
            <h1 className="text-xl mb-1 font-medium text-primary">Discover</h1>
            <Link to="#" className="text-[#FE6D73] hover:text-[#a54548]">
              Teaching
            </Link>
            <Link to="#" className="text-[#FE6D73] hover:text-[#a54548]">
              Activities
            </Link>
            <Link to="#" className="text-[#FE6D73] hover:text-[#a54548]">
              Events
            </Link>
            <Link to="#" className="text-[#FE6D73] hover:text-[#a54548]">
              Campus
            </Link>
            <Link to="#" className="text-[#FE6D73] hover:text-[#a54548]">
              Research
            </Link>
            <Link to="#" className="text-[#FE6D73] hover:text-[#a54548]">
              Consultancy
            </Link>
          </div>
        </div>
        <div>
          <div className="flex flex-col mb-10">
            <h1 className="text-xl mb-1 font-medium text-primary">
              Other Links
            </h1>
            <Link to="#" className="text-[#FE6D73] hover:text-[#a54548]">
              Downloads
            </Link>
            <Link to="#" className="text-[#FE6D73] hover:text-[#a54548]">
              Forms
            </Link>
            <Link to="#" className="text-[#FE6D73] hover:text-[#a54548]">
              Jobs
            </Link>
            <Link to="#" className="text-[#FE6D73] hover:text-[#a54548]">
              IGNOU-Study
            </Link>
            <Link to="#" className="text-[#FE6D73] hover:text-[#a54548]">
              College-Magzine
            </Link>
            <Link to="#" className="text-[#FE6D73] hover:text-[#a54548]">
              Newsletter
            </Link>
          </div>
          <div className="flex flex-col mb-10">
            <h1 className="text-xl mb-1 font-medium text-primary">
              Other Links
            </h1>
            <Link to="#" className="text-[#FE6D73] hover:text-[#a54548]">
              Downloads
            </Link>
            <Link to="#" className="text-[#FE6D73] hover:text-[#a54548]">
              Forms
            </Link>
            <Link to="#" className="text-[#FE6D73] hover:text-[#a54548]">
              Jobs
            </Link>
            <Link to="#" className="text-[#FE6D73] hover:text-[#a54548]">
              IGNOU-Study
            </Link>
            <Link to="#" className="text-[#FE6D73] hover:text-[#a54548]">
              College-Magzine
            </Link>
            <Link to="#" className="text-[#FE6D73] hover:text-[#a54548]">
              Newsletter
            </Link>
          </div>
        </div>
        <div className="my-auto pb-20">
          <p className="text-xl font-semibold text-primary my-5">
            You are visitor number 191911
          </p>
          <img src="logo.png" className="mx-auto brightness-50 my-5" />
          <h3 className="text-2xl italic text-center font-semibold text-primary my-5">
            AS Collage, Khanna
          </h3>
        </div>
      </div>
    </section>
  );
}
