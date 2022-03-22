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
    <ul className="list-none md:flex flex-row h-max mt-8 hidden transform transition-all duration-200">
      <li>
        <button className="nav-btn font-semibold px-5 py-1.5 mx-1.5 transform duration-200 hover:bg-secondary hover:text-primary text-lg">
          <Link to="/courses">Courses</Link>
        </button>
      </li>
      <li className="transform duration-200 text-center">
        <button className="nav-btn font-semibold px-5 py-1.5 mx-1.5 transform duration-200 hover:bg-secondary hover:text-primary text-lg">
          Rules
        </button>
        <ul className="bg-secondary shadow-2xl text-black px-2 py-2 fixed text-center dropdown left-1 ">
          <li className="px-1 py-2">Option1 Option2 3</li>
          <li className="px-1 py-2">Option2</li>
          <li className="px-1 py-2">Option3</li>
          <li className="px-1 py-2">Option4</li>
          <li className="px-1 py-2">Option5</li>
        </ul>
      </li>
      <li className="transform duration-200 text-center">
        <button className="nav-btn font-semibold px-5 py-1.5 mx-1.5 transform duration-200 hover:bg-secondary hover:text-primary text-lg">
          Activites
        </button>
        <ul className="bg-white shadow-2xl text-black px-2 py-2 fixed text-center dropdown left-1">
          <li className="px-1 py-2">Option1 Option2 3</li>
          <li className="px-1 py-2">Option2</li>
          <li className="px-1 py-2">Option3</li>
          <li className="px-1 py-2">Option4</li>
          <li className="px-1 py-2">Option5</li>
        </ul>
      </li>
      <li className="transform duration-200 text-center">
        <button className="nav-btn font-semibold px-5 py-1.5 mx-1.5 transform duration-200 hover:bg-secondary hover:text-primary md:hidden lg:inline text-lg">
          Administration
        </button>
        <ul className="bg-white shadow-2xl text-black px-2 py-2 fixed text-center dropdown left-1">
          <li className="px-1 py-2">Option1 Option2 3</li>
          <li className="px-1 py-2">Option2</li>
          <li className="px-1 py-2">Option3</li>
          <li className="px-1 py-2">Option4</li>
          <li className="px-1 py-2">Option5</li>
        </ul>
      </li>
      <li className="transform duration-200 text-center">
        <button className="nav-btn font-semibold px-5 py-1.5 mx-1.5 transform duration-200 hover:bg-secondary hover:text-primary md:hidden lg:inline text-lg">
          Infrastructure
        </button>
        <ul className="bg-white shadow-2xl text-black px-2 py-2 fixed text-center dropdown right-0">
          <li className="px-1 py-2">Option1 Option2 3</li>
          <li className="px-1 py-2">Option2</li>
          <li className="px-1 py-2">Option3</li>
          <li className="px-1 py-2">Option4</li>
          <li className="px-1 py-2">Option5</li>
        </ul>
      </li>
      <li className="transform duration-200 text-center">
        <button className="nav-btn font-semibold px-5 py-1.5 mx-1.5 transform duration-200 hover:bg-secondary hover:text-primary md:hidden lg:inline text-lg right-1">
          About Us
        </button>

        <ul className="bg-white shadow-2xl text-black px-2 py-2 fixed text-center dropdown right-0">
          <li className="px-1 py-2">Option1 Option2 3</li>
          <li className="px-1 py-2">Option2</li>
          <li className="px-1 py-2">Option3</li>
          <li className="px-1 py-2">Option4</li>
          <li className="px-1 py-2">Option5</li>
        </ul>
      </li>
      <li className="transform duration-200 text-center lg:hidden">
        <button className="nav-btn font-semibold px-5 py-1.5 mx-1.5 transform duration-200 hover:bg-secondary hover:text-primary  text-lg">
          Others
        </button>
        <ul className="bg-white shadow-2xl text-black px-2 py-2 fixed text-center dropdown">
          <li className="px-1 py-2">Option1 Option2 3</li>
          <li className="px-1 py-2">Option2</li>
          <li className="px-1 py-2">Option3</li>
          <li className="px-1 py-2">Option4</li>
          <li className="px-1 py-2">Option5</li>
        </ul>
      </li>
    </ul>
  );
}

export function NavBar() {
  return (
    <nav className=" text-secondary pb-5 h-64">
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
