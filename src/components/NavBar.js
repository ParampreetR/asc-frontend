import { ImageSlider } from "./ImageSlider";
import { Link } from "react-router-dom";
import { Notifications } from "./Notifications";
import "./NavBar.css";
import { useEffect, useState } from "react";

function NavButtons() {
  const [activeBtn, setActiveBtn] = useState(0);

  const closeAllDropdown = (e) => {
    if (!e.target.classList.contains("nav-btn")) setActiveBtn(0);
  };

  useEffect(() => {
    document.addEventListener("click", closeAllDropdown);

    return () => {
      document.removeEventListener("click", closeAllDropdown);
    };
  });

  return (
    <ul className="list-none xl:flex flex-row h-max mt-8 hidden transform transition-all duration-200">
      <li>
        {/* Navigation Button1  */}
        <button className="nav-btn font-semibold px-5 py-1.5 mx-1.5 transform duration-200 hover:bg-secondary hover:text-primary text-lg">
          <Link to="/courses">Courses</Link>
        </button>
      </li>
      <li className="transform duration-200 text-center">
        {/* Navigation Button2  */}
        <button
          className="nav-btn font-semibold px-5 py-1.5 mx-1.5 transform duration-200 hover:bg-secondary hover:text-primary text-lg"
          onClick={() => {
            activeBtn === 2 ? setActiveBtn(0) : setActiveBtn(2);
          }}
        >
          About Us
        </button>
        <ul
          className={
            "bg-secondary shadow-2xl text-black px-1 py-1 fixed text-center w-[250px] left-1 transform duration-200 " +
            (activeBtn === 2
              ? "opacity-100 pointer-events-auto translate-y-3"
              : "opacity-0 pointer-events-none translate-y-10")
          }
        >
          <li>
            <Link
              className="w-full py-2 inline-block hover:bg-gradient-to-t from-primary2 to-primary hover:text-white"
              to="/vision"
            >
              Vision
            </Link>
          </li>
          <li>
            <Link
              className="w-full py-2 inline-block hover:bg-gradient-to-t from-primary2 to-primary hover:text-white"
              to="/history"
            >
              History
            </Link>
          </li>
          <li>
            <Link
              className="w-full py-2 inline-block hover:bg-gradient-to-t from-primary2 to-primary hover:text-white"
              to="/missiongoals"
            >
              Mission and Goals
            </Link>
          </li>
        </ul>
      </li>
      <li className="transform duration-200 text-center">
        {/* Navigation Button3  */}
        <button
          className="nav-btn font-semibold px-5 py-1.5 mx-1.5 transform duration-200 hover:bg-secondary hover:text-primary text-lg"
          onClick={() => {
            activeBtn === 3 ? setActiveBtn(0) : setActiveBtn(3);
          }}
        >
          Rules
        </button>
        <ul
          className={
            "bg-secondary shadow-2xl text-black px-1 py-1 fixed text-center w-[250px] left-1 transform duration-200 " +
            (activeBtn === 3
              ? "opacity-100 pointer-events-auto translate-y-3"
              : "opacity-0 pointer-events-none translate-y-10")
          }
        >
          <li>
            <Link
              className="w-full py-2 inline-block hover:bg-gradient-to-t from-primary2 to-primary hover:text-white"
              to="/codeofconduct"
            >
              Code of Conduct
            </Link>
          </li>
          <li>
            <Link
              className="w-full py-2 inline-block hover:bg-gradient-to-t from-primary2 to-primary hover:text-white"
              to="/generalrules"
            >
              General Rules
            </Link>
          </li>
          <li>Adimission Rules</li>
          <li>Uniform Rules</li>
          <li>Leave Rules</li>
          <li>Library Rules</li>
        </ul>
      </li>
      <li className="transform duration-200 text-center">
        {/* Navigation Button4  */}
        <button
          className="nav-btn font-semibold px-5 py-1.5 mx-1.5 transform duration-200 hover:bg-secondary hover:text-primary text-lg"
          onClick={() => {
            activeBtn === 4 ? setActiveBtn(0) : setActiveBtn(4);
          }}
        >
          Activites
        </button>
        <ul
          className={
            "bg-secondary shadow-2xl text-black px-1 py-1 fixed text-center w-[250px] left-1 transform duration-200 " +
            (activeBtn === 4
              ? "opacity-100 pointer-events-auto translate-y-3"
              : "opacity-0 pointer-events-none translate-y-10")
          }
        >
          <li>NSS</li>
          <li>NCC</li>
          <li>Cultural Activities</li>
        </ul>
      </li>

      <li className="transform duration-200 text-center">
        {/* Navigation Button5  */}
        <button
          className="nav-btn font-semibold px-5 py-1.5 mx-1.5 transform duration-200 hover:bg-secondary hover:text-primary text-lg"
          onClick={() => {
            activeBtn === 5 ? setActiveBtn(0) : setActiveBtn(5);
          }}
        >
          Administration
        </button>
        <ul
          className={
            "bg-secondary shadow-2xl text-black px-1 py-1 fixed text-center w-[250px] right-1 transform duration-200 " +
            (activeBtn === 5
              ? "opacity-100 pointer-events-auto translate-y-3"
              : "opacity-0 pointer-events-none translate-y-10")
          }
        >
          <li>Principal</li>
          <li>Management</li>
          <li>Collage Committees</li>
        </ul>
      </li>
      <li className="transform duration-200 text-center">
        {/* Navigation Button6  */}
        <button
          className="nav-btn font-semibold px-5 py-1.5 mx-1.5 transform duration-200 hover:bg-secondary hover:text-primary text-lg"
          onClick={() => {
            activeBtn === 6 ? setActiveBtn(0) : setActiveBtn(6);
          }}
        >
          Infrastructure
        </button>
        <ul
          className={
            "bg-secondary shadow-2xl text-black px-1 py-1 fixed text-center w-[250px] right-1 transform duration-200 " +
            (activeBtn === 6
              ? "opacity-100 pointer-events-auto translate-y-3"
              : "opacity-0 pointer-events-none translate-y-10")
          }
        >
          <li>Library</li>
          <li>Canteen</li>
          <li>Auditorium</li>
          <li>Seminar Hall</li>
          <li>Stadium</li>
          <li>Gymnasium</li>
          <li>UGC Resourse Center</li>
        </ul>
      </li>
      <li className="transform duration-200 text-center">
        {/* Navigation Button7  */}
        <button
          className="nav-btn font-semibold px-5 py-1.5 mx-1.5 transform duration-200 hover:bg-secondary hover:text-primary text-lg"
          onClick={() => {
            activeBtn === 7 ? setActiveBtn(0) : setActiveBtn(7);
          }}
        >
          Downloads
        </button>
        <ul
          className={
            "bg-secondary shadow-2xl text-black px-1 py-1 fixed text-center w-[250px] right-1 transform duration-200 " +
            (activeBtn === 7
              ? "opacity-100 pointer-events-auto translate-y-3"
              : "opacity-0 pointer-events-none translate-y-10")
          }
        >
          <li>Time table</li>
          <li>Download 2</li>
          <li>Download 3</li>
        </ul>
      </li>
      <li className="transform duration-200 text-center">
        {/* Navigation Button8  */}
        <button
          className="nav-btn font-semibold px-5 py-1.5 mx-1.5 transform duration-200 hover:bg-secondary hover:text-primary text-lg"
          onClick={() => {
            activeBtn === 8 ? setActiveBtn(0) : setActiveBtn(8);
          }}
        >
          Others
        </button>
        <ul
          className={
            "bg-secondary shadow-2xl text-black px-1 py-1 fixed text-center w-[250px] right-1 transform duration-200 " +
            (activeBtn === 8
              ? "opacity-100 pointer-events-auto translate-y-3"
              : "opacity-0 pointer-events-none translate-y-10")
          }
        >
          <li>UGC</li>
          <li>NAAC</li>
          <li>RTI</li>
          <li>Placement</li>
          <li>Alumini</li>
          <li>Research & Innovation</li>
        </ul>
      </li>
    </ul>
  );
}

export function NavBarHomePage() {
  return (
    <nav className="text-secondary pb-5 h-[68vw]">
      <div className="bg-primary ">
        <div className="mx-auto max-w-[1440px] justify-between px-20 hidden md:flex">
          <span>Email</span>
          <span>Phone Number</span>
          <span>Address</span>
        </div>
      </div>

      <ImageSlider />

      <div className="image-overlay border-b-2 border-[#FE6D73]">
        <div className="mx-auto max-w-[1440px]">
          <div className="flex flex-row justify-between px-5 py-2">
            <span className="inline mx-auto md:m-1">
              <Link to="/">
                <div className="text-3xl border-b-2 text-center px-5">
                  AS College
                </div>
                <div className="text-center ">Tag Line</div>
              </Link>
            </span>
            <NavButtons />
          </div>
          <Notifications />
        </div>
      </div>
    </nav>
  );
}

export function NavBar() {
  return (
    <nav className=" text-secondary shadow-medium">
      <div className="bg-primary">
        <div className="mx-auto max-w-[1440px] justify-between px-20 hidden md:flex">
          <span>Email</span>
          <span>Phone Number</span>
          <span>Address</span>
        </div>
      </div>

      <div className="border-b-2 border-[#FE6D73] bg-primary2">
        <div className="mx-auto max-w-[1440px]">
          <div className="flex flex-row justify-between px-5 py-2">
            <span className="inline mx-auto md:m-1">
              <Link to="/">
                <div className="text-3xl border-b-2 text-center px-5">
                  AS College
                </div>
                <div className="text-center ">Tag Line</div>
              </Link>
            </span>
            <NavButtons />
          </div>
        </div>
      </div>
    </nav>
  );
}
