import logo from "./logo.svg";
import "./App.css";
import SimpleImageSlider from "react-simple-image-slider";
import { Link, Route, Routes } from "react-router-dom";
import { MsgFromPrinci } from "./components/PrinciMsg";
import { AscInfo } from "./components/Asc";

function NavButtons() {
  return (
    <ul className="list-none md:flex flex-row h-max mt-8 hidden">
      <li>
        <button className="nav-btn font-semibold px-5 py-1.5 mx-1.5 transform duration-200 hover:bg-secondary hover:text-primary text-lg">
          <Link to="/courses">Courses</Link>
        </button>
      </li>
      <li>
        <button className="nav-btn font-semibold px-5 py-1.5 mx-1.5 transform duration-200 hover:bg-secondary hover:text-primary text-lg">
          Rules
        </button>
      </li>
      <li>
        <button className="nav-btn font-semibold px-5 py-1.5 mx-1.5 transform duration-200 hover:bg-secondary hover:text-primary text-lg">
          Extra Curricular Activites
        </button>
      </li>
      <li>
        <button className="nav-btn font-semibold px-5 py-1.5 mx-1.5 transform duration-200 hover:bg-secondary hover:text-primary md:hidden lg:inline text-lg">
          Administration
        </button>
      </li>
      <li>
        <button className="nav-btn font-semibold px-5 py-1.5 mx-1.5 transform duration-200 hover:bg-secondary hover:text-primary md:hidden lg:inline text-lg">
          Infrastructure
        </button>
      </li>
      <li>
        <button className="nav-btn font-semibold px-5 py-1.5 mx-1.5 transform duration-200 hover:bg-secondary hover:text-primary md:hidden lg:inline text-lg">
          About Us
        </button>
      </li>
      <li>
        <button className="nav-btn font-semibold px-5 py-1.5 mx-1.5 transform duration-200 hover:bg-secondary hover:text-primary lg:hidden text-lg">
          Others
        </button>
      </li>
    </ul>
  );
}

function Notifications() {
  return (
    <div className="notifications">
      <h2 className="text-3xl font-medium">Notifications</h2>
      <div className="flex flex-col text-2xl w-screen mt-3">
        <span className="my-2">
          <span className="mx-20 my-auto w-80 inline-block">
            Admission Open 2022-23
          </span>
          <button className="tranform duration-200 mx-20 transparent-btn text-xl px-5 py-2 font-medium hover:text-secondary2">
            Apply Now
          </button>
        </span>
        <span className="my-2">
          <span className="mx-20 my-auto w-80 inline-block">
            Notification 2
          </span>
          <button className="tranform duration-200 mx-20 transparent-btn text-xl px-5 py-2 font-medium hover:text-secondary2">
            Button
          </button>
        </span>
      </div>
    </div>
  );
}

function ImageSlider() {
  const images = [
    { url: "/img1.jpg" },
    { url: "/img1.jpg" },
    { url: "/img1.jpg" },
    { url: "/img1.jpg" },
    { url: "/img1.jpg" },
    { url: "/img1.jpg" },
    { url: "/img1.jpg" },
  ];

  return (
    <div className="bg-image">
      <SimpleImageSlider
        width={"100vw"}
        height={"66vw"}
        images={images}
        showNavs={false}
        autoPlay={true}
      />
    </div>
  );
}

function NavBar() {
  return (
    <nav className=" text-secondary pb-5 h-64">
      <div className="bg-primary justify-between px-20 hidden md:flex">
        <span>Email</span>
        <span>Phone Number</span>
        <span>Address</span>
      </div>

      <ImageSlider />

      <div className="image-overlay">
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

function Homepage() {
  return (
    <div>
      <MsgFromPrinci />
      <AscInfo />
    </div>
  );
}

function Courses() {
  return <h1 className="text-4xl">Courses</h1>;
}

function ProgressBar() {
  return (
    <div className="bg-blur absolute w-screen h-screen z-40 top-0 right-0">
      <div class="progress fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-50">
        <div class="bar shadow-2xl zigZag"></div>
      </div>
    </div>
  );
}

function App() {
  return (
    <div className="App">
      <header>
        <NavBar />
      </header>
      <main>
        <Routes>
          <Route path="courses" element={<Courses />} />
          <Route path="/" element={<Homepage />} />
        </Routes>
      </main>
    </div>
  );
}

export default App;
