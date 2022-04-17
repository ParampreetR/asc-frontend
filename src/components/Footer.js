import { ThemeSwitcher } from "./ThemeSwitcher";

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
                  <a href="#" className="hover:text-blue-400">
                    Home
                  </a>
                </li>
                <li className="pb-2">
                  <a href="#" className="hover:text-blue-400">
                    About Us
                  </a>
                </li>
                <li className="pb-2">
                  <a href="#" className="hover:text-blue-400">
                    Admissions
                  </a>
                </li>
                <li className="pb-2">
                  <a href="#" className="hover:text-blue-400">
                    Courses
                  </a>
                </li>
                <li className="pb-2">
                  <a href="#" className="hover:text-blue-400">
                    Fee Details
                  </a>
                </li>
                <li className="pb-2">
                  <a href="#" className="hover:text-blue-400">
                    Rules
                  </a>
                </li>
              </ul>
            </div>
            <div className="nb-5">
              <h1 className="text-2xl pb-5">Discover</h1>
              <ul className="text-gray-400">
                <li className="pb-2">
                  <a href="#" className="hover:text-blue-400">
                    Teaching
                  </a>
                </li>
                <li className="pb-2">
                  <a href="#" className="hover:text-blue-400">
                    Activities
                  </a>
                </li>
                <li className="pb-2">
                  <a href="#" className="hover:text-blue-400">
                    Events
                  </a>
                </li>
                <li className="pb-2">
                  <a href="#" className="hover:text-blue-400">
                    Campus
                  </a>
                </li>
                <li className="pb-2">
                  <a href="#" className="hover:text-blue-400">
                    Research
                  </a>
                </li>
                <li className="pb-2">
                  <a href="#" className="hover:text-blue-400">
                    Consultancy
                  </a>
                </li>
              </ul>
            </div>
            <div className="nb-5">
              <h1 className="text-2xl pb-5">Other</h1>
              <ul className="text-gray-400">
                <li className="pb-2">
                  <a href="#" className="hover:text-blue-400">
                    Downloads
                  </a>
                </li>
                <li className="pb-2">
                  <a href="#" className="hover:text-blue-400">
                    Forms
                  </a>
                </li>
                <li className="pb-2">
                  <a href="#" className="hover:text-blue-400">
                    Jobs
                  </a>
                </li>
                <li className="pb-2">
                  <a href="#" className="hover:text-blue-400">
                    IGNOU-Study
                  </a>
                </li>
                <li className="pb-2">
                  <a href="#" className="hover:text-blue-400">
                    College Magznine
                  </a>
                </li>
                <li className="pb-2">
                  <a href="#" className="hover:text-blue-400">
                    Newsletter
                  </a>
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
      <div className="w-full bg-gray-900 text-gray-500 px-20">
        <div>
          <div className="text-center">
            <div className="flex flex-row justify-evenly">
              <span>
                <span>Phone</span>
                091-01628-228470
              </span>
              <span>
                <span>Email</span>
                asckhn@rediffmail.com
              </span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
