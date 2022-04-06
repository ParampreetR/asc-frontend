import logo from "./logo.svg";
import "./App.css";
import { Link, Route, Routes } from "react-router-dom";
import { MsgFromPrinci } from "./components/PrinciMsg";
import { AscInfo } from "./components/Asc";
import { ExploreCourse } from "./components/ExploreCourse";
import { StudentReview } from "./components/StudentsReview";
import { NavBarHomePage, NavBar } from "./components/NavBar";
import { ChatBot } from "./components/ChatBot";
import { show, hide, config } from "topbar";
import { CodeofConduct } from "./pages/CodeofConduct";
import { Footer } from "./components/Footer";
import { ThreeSwitch } from "./components/ThreeSwitch";
import Plyr from "plyr-react";
import "plyr-react/dist/plyr.css";
import { MissionGoals } from "./pages/MissionGoals";
import { History } from "./pages/History";
import { GeneralRules } from "./pages/GeneralRules";
import { UniformRules } from "./pages/UniformRules";
import { LeaveRules } from "./pages/LeaveRules";
import { AdmissionRules } from "./pages/AdmissionRules";

config({
  barColors: {
    0: "#FE6D73",
    ".3": "#FE6D73EE",
    "1.0": "rgba(254, 249, 239, .9)",
  },
  shadowBlur: 0,
});

function Homepage() {
  show();
  hide();
  return (
    <div>
      <ExploreCourse />
      <AscInfo />
      <div className="px-4 md:px-16 lg:px-24 xl:px-36 pb-16">
        <div className="mx-auto max-w-[1080px]">
          <Plyr
            source={{
              type: "video",
              sources: [
                {
                  src: "Z7RRDoWY2es",
                  provider: "youtube",
                },
              ],
            }}
            onLoad={(e) => console.log(e)}
          />
        </div>
      </div>
      <MsgFromPrinci />
      <div className="px-4 md:px-16 lg:px-24 xl:px-36 py-16">
        <ThreeSwitch />
      </div>
      <StudentReview />
    </div>
  );
}

function Courses() {
  return <h1 className="text-4xl">Courses</h1>;
}

function App() {
  return (
    <div className="App">
      <header>
        <Routes>
          <Route path="/" element={<NavBarHomePage />} loading />
          <Route path="/*" element={<NavBar />} />
        </Routes>
      </header>
      <main>
        <Routes>
          <Route path="courses" element={<Courses />} />
          <Route path="codeofconduct" element={<CodeofConduct />} />
          <Route path="missiongoals" element={<MissionGoals />} />
          <Route path="history" element={<History />} />
          <Route path="generalrules" element={<GeneralRules />} />
          <Route path="uniformrules" element={<UniformRules />} />
          <Route path="leaverules" element={<LeaveRules />} />
          <Route path="admissionrules" element={<AdmissionRules />} />
          <Route path="/" element={<Homepage />} loading />
        </Routes>
      </main>
      <footer>
        <ChatBot />
        <Footer />
      </footer>
    </div>
  );
}

export default App;
