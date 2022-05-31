import { Link } from "react-router-dom";

export function Footer() {
  return (
    <footer className="bg-gray-200">
      <div className="p-10 bg-gray-800 text-gray-200">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-2">
            <div className="nb-5">
              <h1 className="text-2xl pb-5">Quick Links</h1>
              <ul className="text-gray-400">
                <li className="pb-2">
                  <Link to="/history" className="hover:text-blue-400">
                    History
                  </Link>
                </li>
                <li className="pb-2">
                  <Link to="/missiongoals" className="hover:text-blue-400">
                    Mission and Goals
                  </Link>
                </li>
                <li className="pb-2">
                  <Link to="/codeofconduct" className="hover:text-blue-400">
                    Code of Conduct
                  </Link>
                </li>
                <li className="pb-2">
                  <Link to="/generalrules" className="hover:text-blue-400">
                    General Rules
                  </Link>
                </li>
                <li className="pb-2">
                  <Link to="/management" className="hover:text-blue-400">
                    Management
                  </Link>
                </li>
                <li className="pb-2">
                  <Link
                    to="/researchinnovation"
                    className="hover:text-blue-400"
                  >
                    Research &amp; Innovation
                  </Link>
                </li>
              </ul>
            </div>
            <div className="nb-5">
              <h1 className="text-2xl pb-5">Discover</h1>
              <ul className="text-gray-400">
                <li className="pb-2">
                  <Link to="/library" className="hover:text-blue-400">
                    Library
                  </Link>
                </li>
                <li className="pb-2">
                  <Link to="/canteen" className="hover:text-blue-400">
                    Canteen
                  </Link>
                </li>
                <li className="pb-2">
                  <Link to="/auditorium" className="hover:text-blue-400">
                    Auditorium
                  </Link>
                </li>
                <li className="pb-2">
                  <Link to="/seminarhall" className="hover:text-blue-400">
                    Seminar Hall
                  </Link>
                </li>
                <li className="pb-2">
                  <Link to="/stadium" className="hover:text-blue-400">
                    Stadium
                  </Link>
                </li>
                <li className="pb-2">
                  <Link to="/gymnasium" className="hover:text-blue-400">
                    Gymnasium
                  </Link>
                </li>
              </ul>
            </div>
            <div className="nb-5">
              <h1 className="text-2xl pb-5">Other</h1>
              <ul className="text-gray-400">
                <li className="pb-2">
                  <Link to="/rti" className="hover:text-blue-400">
                    RTI
                  </Link>
                </li>
                <li className="pb-2">
                  <Link to="/placement" className="hover:text-blue-400">
                    Placement
                  </Link>
                </li>
                <li className="pb-2">
                  <Link to="/nss" className="hover:text-blue-400">
                    NSS
                  </Link>
                </li>
                <li className="pb-2">
                  <Link to="/ncc" className="hover:text-blue-400">
                    NCC
                  </Link>
                </li>
                <li className="pb-2">
                  <Link to="/culturalactivites" className="hover:text-blue-400">
                    Cultural Activites
                  </Link>
                </li>
              </ul>
            </div>
            <div className="nb-4">
              <img className="pb-4" src="logo.png" alt="" />
              <h1 className="text-2xl pb-4">A.S College Khanna</h1>
              <div className="text-gray-400">
                <h4>Samrala Road, Machiwara Highway,</h4>
                <h4>Vill. Kalal Majra, Khanna,</h4>
                <h4>Punjab (141417).</h4>
                <br /> <br />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="w-full bg-gray-900 text-gray-400 px-20">
        <div>
          <div className="text-center">
            <div className="flex flex-row justify-evenly hover:text-blue-400">
              <span>
                <span>Phone: </span>
                091-01628-228470
              </span>
              <span>
                <span>Email: </span>
                asckhn@rediffmail.com
              </span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
