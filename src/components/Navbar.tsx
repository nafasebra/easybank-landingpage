import { useState } from "react";
import logo from "../assets/logo.svg";
import Button from "./Button";
import SectionContainer from "./SectionContainer";
import Sidebar from "./Sidebar";

function Navbar() {
  const [showMenu, setShowMenu] = useState<boolean>(false);

  return (
    <>
      <div className="bg-white">
        <SectionContainer>
          <nav className="flex flex-row items-center justify-between">
            <a href="/" className="w-[120px] sm:w-[150px]">
              <img src={logo} className="w-full" alt="" />
            </a>
            <div className="flex flex-row items-center">
              <ul className="hidden md:flex flex-row items-center">
                <li className="mr-7 relative opacity-80 hover:opacity-100">
                  <a
                    href="https://go.com"
                    className="capitalize text-sm opacity-80 block py-8 after:contents-['*'] after:absolute after:bottom-0 after:left-0 after:right-0 after:w-full after:h-1 after:bg-gradient-to-r after:from-green after:to-blue after:opacity-0 hover:opacity-100 hover:after:opacity-100"
                  >
                    Home
                  </a>
                </li>
                <li className="mr-7 relative opacity-80 hover:opacity-100">
                  <a
                    href="https://go.com"
                    className="capitalize text-sm opacity-80 block py-8 after:contents-['*'] after:absolute after:bottom-0 after:left-0 after:right-0 after:w-full after:h-1 after:bg-gradient-to-r after:from-green after:to-blue after:opacity-0 hover:opacity-100 hover:after:opacity-100"
                  >
                    About
                  </a>
                </li>
                <li className="mr-7 relative opacity-80 hover:opacity-100">
                  <a
                    href="https://go.com"
                    className="capitalize text-sm opacity-80 block py-8 after:contents-['*'] after:absolute after:bottom-0 after:left-0 after:right-0 after:w-full after:h-1 after:bg-gradient-to-r after:from-green after:to-blue after:opacity-0 hover:opacity-100 hover:after:opacity-100"
                  >
                    contact
                  </a>
                </li>
                <li className="mr-7 relative opacity-80 hover:opacity-100">
                  <a
                    href="https://go.com"
                    className="capitalize text-sm opacity-80 block py-8 after:contents-['*'] after:absolute after:bottom-0 after:left-0 after:right-0 after:w-full after:h-1 after:bg-gradient-to-r after:from-green after:to-blue after:opacity-0 hover:opacity-100 hover:after:opacity-100"
                  >
                    blog
                  </a>
                </li>
                <li className="mr-7 relative opacity-80 hover:opacity-100">
                  <a
                    href="https://go.com"
                    className="capitalize text-sm opacity-80 block py-8 after:contents-['*'] after:absolute after:bottom-0 after:left-0 after:right-0 after:w-full after:h-1 after:bg-gradient-to-r after:from-green after:to-blue after:opacity-0 hover:opacity-100 hover:after:opacity-100"
                  >
                    careers
                  </a>
                </li>
              </ul>
              <button
                onClick={() => setShowMenu(!showMenu)}
                className="flex flex-col md:hidden p-2"
              >
                <span
                  className={`
              block bg-dark w-5 h-[2px] mt-1 mb-[7px] ${
                showMenu && "rotate-45 translate-y-[4.5px]"
              }`}
                ></span>
                <span
                  className={`block bg-dark w-5 h-[2px] mb-1 ${
                    showMenu && "-rotate-45 -translate-y-[4.5px]"
                  }`}
                ></span>
              </button>
            </div>
            <div className="hidden lg:block">
              <Button target="https://nothing.com" textButton="request invite" />
            </div>
          </nav>
        </SectionContainer>
      </div>
      <Sidebar show={showMenu} />
    </>
  );
}

export default Navbar;
