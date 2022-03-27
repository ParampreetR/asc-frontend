import { ImageSlider } from "./ImageSlider";
import { Link } from "react-router-dom";
import { Notifications } from "./Notifications";
import "./NavBar.css";
import { useState } from "react";

function NavButtons() {
  for (let item of document.getElementsByClassName("dropdown")) {
    item.addEventListener("click", (e) => {
      e.target.focus = false;
    });
  }
  return (
    <ul className="list-none xl:flex flex-row h-max mt-8 hidden transform transition-all duration-200">
      <li>
        <button className="nav-btn font-semibold px-5 py-1.5 mx-1.5 transform duration-200 hover:bg-secondary hover:text-primary text-lg">
          <Link to="/courses">Courses</Link>
        </button>
      </li>
      <li className="transform duration-200 text-center">
        <button className="nav-btn font-semibold px-5 py-1.5 mx-1.5 transform duration-200 hover:bg-secondary hover:text-primary text-lg">
          About Us
        </button>
        <ul className="bg-secondary shadow-2xl text-black px-2 py-2 fixed text-center dropdown left-1 ">
          <li className="px-1 py-2">Vision</li>
          <li className="px-1 py-2">History</li>
        </ul>
      </li>
      <li className="transform duration-200 text-center">
        <button className="nav-btn font-semibold px-5 py-1.5 mx-1.5 transform duration-200 hover:bg-secondary hover:text-primary text-lg">
          Rules
        </button>
        <ul className="bg-secondary shadow-2xl text-black px-2 py-2 fixed text-center dropdown left-1 ">
          <li className="px-1 py-2">Code of Conduct</li>
          <li className="px-1 py-2">General Rules</li>
          <li className="px-1 py-2">Adimission Rules</li>
          <li className="px-1 py-2">Uniform Rules</li>
          <li className="px-1 py-2">Leave Rules</li>
          <li className="px-1 py-2">Library Rules</li>
        </ul>
      </li>
      <li className="transform duration-200 text-center">
        <button className="nav-btn font-semibold px-5 py-1.5 mx-1.5 transform duration-200 hover:bg-secondary hover:text-primary text-lg">
          Activites
        </button>
        <ul className="bg-white shadow-2xl text-black px-2 py-2 fixed text-center dropdown right-0">
          <li className="px-1 py-2">NSS</li>
          <li className="px-1 py-2">NCC</li>
          <li className="px-1 py-2">Cultural Activities</li>
        </ul>
      </li>

      <li className="transform duration-200 text-center">
        <button className="nav-btn font-semibold px-5 py-1.5 mx-1.5 transform duration-200 hover:bg-secondary hover:text-primary md:hidden lg:inline text-lg">
          Administration
        </button>
        <ul className="bg-white shadow-2xl text-black px-2 py-2 fixed text-center dropdown right-0">
          <li className="px-1 py-2">Principal</li>
          <li className="px-1 py-2">Management</li>
          <li className="px-1 py-2">Collage Committees</li>
        </ul>
      </li>
      <li className="transform duration-200 text-center">
        <button className="nav-btn font-semibold px-5 py-1.5 mx-1.5 transform duration-200 hover:bg-secondary hover:text-primary md:hidden lg:inline text-lg">
          Infrastructure
        </button>
        <ul className="bg-white shadow-2xl text-black px-2 py-2 fixed text-center dropdown right-0">
          <li className="px-1 py-2">Library</li>
          <li className="px-1 py-2">Canteen</li>
          <li className="px-1 py-2">Auditorium</li>
          <li className="px-1 py-2">Seminar Hall</li>
          <li className="px-1 py-2">Stadium</li>
          <li className="px-1 py-2">Gymnasium</li>
          <li className="px-1 py-2">UGC Resourse Center</li>
        </ul>
      </li>
      <li className="transform duration-200 text-center">
        <button className="nav-btn font-semibold px-5 py-1.5 mx-1.5 transform duration-200 hover:bg-secondary hover:text-primary text-lg">
          Downloads
        </button>
        <ul className="bg-white shadow-2xl text-black px-2 py-2 fixed text-center dropdown right-0">
          <li className="px-1 py-2">Time table</li>
          <li className="px-1 py-2">Download 2</li>
          <li className="px-1 py-2">Download 3</li>
        </ul>
      </li>
      <li className="transform duration-200 text-center">
        <button className="nav-btn font-semibold px-5 py-1.5 mx-1.5 transform duration-200 hover:bg-secondary hover:text-primary md:hidden lg:inline text-lg right-1">
          Others
        </button>
        <ul className="bg-white shadow-2xl text-black px-2 py-2 fixed text-center dropdown right-0">
          <li className="px-1 py-2">UGC</li>
          <li className="px-1 py-2">NAAC</li>
          <li className="px-1 py-2">RTI</li>
          <li className="px-1 py-2">Placement</li>
          <li className="px-1 py-2">Alumini</li>
          <li className="px-1 py-2">Research & Innovation</li>
        </ul>
      </li>
    </ul>
  );
}

export function NavBarHomePage() {
  return (
    <nav className="text-secondary pb-5 h-[68vw]">
      <div className="bg-primary justify-between px-20 hidden md:flex">
        <span>Email</span>
        <span>Phone Number</span>
        <span>Address</span>
      </div>

      <ImageSlider />

      <div className="image-overlay border-b-2 border-[#FE6D73]">
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
    </nav>
  );
}

export function NavBar() {
  return (
    <nav className=" text-secondary shadow-medium">
      <div className="bg-primary justify-between px-20 hidden md:flex">
        <span>Email</span>
        <span>Phone Number</span>
        <span>Address</span>
      </div>

      <div className="border-b-2 border-[#FE6D73] bg-primary2">
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
    </nav>
  );
}
