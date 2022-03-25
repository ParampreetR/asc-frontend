import logo from "./logo.svg";
import "./App.css";
import SimpleImageSlider from "react-simple-image-slider";
import { Link, Route, Routes } from "react-router-dom";
import { MsgFromPrinci } from "./components/PrinciMsg";
import { AscInfo } from "./components/Asc";
import { ExploreCourse } from "./components/ExploreCourse";
import { StudentReview } from "./components/StudentsReview";
import { NavBar } from "./components/NavBar";
import { ChatBot } from "./components/ChatBot";

function Homepage() {
  return (
    <div>
      <ExploreCourse />
      <AscInfo />
      <MsgFromPrinci />
      <StudentReview />
    </div>
  );
}

function Courses() {
  return <h1 className="text-4xl">Courses</h1>;
}

// function ProgressBar() {
//   return (
//     <div className="bg-blur absolute w-screen h-screen z-40 top-0 right-0">
//       <div class="progress fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-50">
//         <div class="bar shadow-2xl zigZag"></div>
//       </div>
//     </div>
//   );
// }

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
      <footer>
        <ChatBot />
      </footer>
    </div>
  );
}

export default App;
