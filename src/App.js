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
import { LibraryRules } from "./pages/LibraryRules";
import { UniformRules } from "./pages/UniformRules";
import { LeaveRules } from "./pages/LeaveRules";
import { AdmissionRules } from "./pages/AdmissionRules";
import { ThemeSwitcher } from "./components/ThemeSwitcher";
import { Principal } from "./pages/Principal";
import { CollegeCommittees } from "./pages/CollegeCommittees";
import { Management } from "./pages/Management";
import { Library } from "./pages/Library";
import { Canteen } from "./pages/Canteen";
import { Auditorium } from "./pages/Auditorium";
import { SeminarHall } from "./pages/SeminarHall";
import { Stadium } from "./pages/Stadium";
import { Gymnasium } from "./pages/Gymnasium";
import { UGCResources } from "./pages/UGCResourseCenter";
import { NSS } from "./pages/NSS";
import { NCC } from "./pages/NCC";
import { CulturalActivites } from "./pages/CulturalActivities";
import { NAAC } from "./pages/NAAC";
import { Placement } from "./pages/Placement";
import { Alumini } from "./pages/Alumini";
import { ResearchInnovation } from "./pages/ResearchInnovation";
import { RTI } from "./pages/RTI";
import { UGC } from "./pages/UGC";
import axios from "axios";
import { useEffect, useState } from "react";

config({
  barColors: {
    0: "#FE6D73",
    ".3": "#FE6D73EE",
    "1.0": "rgba(254, 249, 239, .9)",
  },
  shadowBlur: 0,
});

function Homepage() {
  let [events, setEvents] = useState([]);
  let [news, setNews] = useState([]);
  let [articles, setArticles] = useState([]);

  show();
  useEffect(() => {
    alert(process.env.REACT_APP_BACKEND_URL);

    axios
      .get(process.env.REACT_APP_BACKEND_URL + "/v1/getEvents")
      .then((res) => {
        console.log(res);
        setEvents(res.data);
      });
    axios
      .get(process.env.REACT_APP_BACKEND_URL + "/v1/getNotifications")
      .then((res) => {
        console.log(res);
        setNews(res.data);
      });
    axios
      .get(process.env.REACT_APP_BACKEND_URL + "/v1/getQuickLinks")
      .then((res) => {
        console.log(res);
        setArticles(res.data);
      });
  }, []);
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
        <ThreeSwitch events={events} news={news} articles={articles} />
      </div>
      <StudentReview />
    </div>
  );
}

function Courses() {
  return <h1 className="text-4xl">Not yet Implemented</h1>;
}

function App() {
  if (
    localStorage.theme === "dark" ||
    (!("theme" in localStorage) &&
      window.matchMedia("(prefers-color-scheme: dark)").matches)
  ) {
    document.documentElement.classList.add("dark");
    document.documentElement.classList.remove("light");
  } else {
    document.documentElement.classList.remove("dark");
    document.documentElement.classList.add("light");
  }

  return (
    <div className="bg-secondary dark:bg-secondary_dark App">
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
          <Route path="libraryrules" element={<LibraryRules />} />
          <Route path="admissionrules" element={<AdmissionRules />} />
          <Route path="principal" element={<Principal />} />
          <Route path="collegecommittees" element={<CollegeCommittees />} />
          <Route path="management" element={<Management />} />
          <Route path="library" element={<Library />} />
          <Route path="canteen" element={<Canteen />} />
          <Route path="auditorium" element={<Auditorium />} />
          <Route path="seminarhall" element={<SeminarHall />} />
          <Route path="stadium" element={<Stadium />} />
          <Route path="gymnasium" element={<Gymnasium />} />
          <Route path="ugcresourcecenter" element={<UGCResources />} />
          <Route path="nss" element={<NSS />} />
          <Route path="ncc" element={<NCC />} />
          <Route path="culturalactivites" element={<CulturalActivites />} />
          <Route path="naac" element={<NAAC />} />
          <Route path="rti" element={<RTI />} />
          <Route path="placement" element={<Placement />} />
          <Route path="alumini" element={<Alumini />} />
          <Route path="researchinnovation" element={<ResearchInnovation />} />
          <Route path="ugc" element={<UGC />} />

          <Route path="/" element={<Homepage />} loading />
        </Routes>
      </main>
      <footer>
        <ChatBot />
        <Footer />
        <div className="fixed bottom-5 left-5">
          <ThemeSwitcher />
        </div>
      </footer>
    </div>
  );
}

export default App;
