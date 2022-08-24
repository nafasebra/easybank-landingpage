import { useState } from "react";
import logo from "../assets/logo.svg";
import Button from "./Button";
import SectionContainer from "./SectionContainer";
import Sidebar from "./Sidebar";

function Navbar() {
  const [showMenu, setShowMenu] = useState<boolean>(false);

  return (
    <>
      <div className="shadow-md">
      <SectionContainer>
        <nav className="flex flex-row items-center justify-between py-5">
          <a href="/" className="w-[90px] sm:w-[120px]">
            <img src={logo} className="w-full" alt="" />
          </a>
          <div className="flex flex-row items-center">
            <ul className="hidden md:flex flex-row items-center">
              <li className="mr-5 opacity-80 hover:opacity-100 hover:underline hover:font-semibold transition-none hover:underline-offset-[10px]">
                <a
                  href="https://go.com"
                  className="capitalize tracking-wider text-sm"
                >
                  Home
                </a>
              </li>
              <li className="mr-5 opacity-80 hover:opacity-100 hover:underline hover:font-semibold transition-none hover:underline-offset-[10px]">
                <a
                  href="https://go.com"
                  className="capitalize tracking-wider text-sm"
                >
                  About
                </a>
              </li>
              <li className="mr-5 opacity-80 hover:opacity-100 hover:underline hover:font-semibold transition-none hover:underline-offset-[10px]">
                <a
                  href="https://go.com"
                  className="capitalize tracking-wider text-sm"
                >
                  contact
                </a>
              </li>
              <li className="mr-5 opacity-80 hover:opacity-100 hover:underline hover:font-semibold transition-none hover:underline-offset-[10px]">
                <a
                  href="https://go.com"
                  className="capitalize tracking-wider text-sm"
                >
                  blog
                </a>
              </li>
              <li className="mr-5 opacity-80 hover:opacity-100 hover:underline hover:font-semibold transition-none hover:underline-offset-[10px]">
                <a
                  href="https://go.com"
                  className="capitalize tracking-wider text-sm"
                >
                  careers
                </a>
              </li>
            </ul>
            <button
              onClick={() => setShowMenu(!showMenu)}
              className="flex flex-col md:hidden border-2 border-black text-black p-2"
            >
              <span className={`
              block bg-dark w-5 h-[2px] mt-1 mb-[7px] ${showMenu && "rotate-45 translate-y-[4.5px]"}`}></span>
              <span className={`block bg-dark w-5 h-[2px] mb-1 ${showMenu && "-rotate-45 -translate-y-[4.5px]"}`}></span>
            </button>
          </div>
          <button className="capitalize rounded-full py-3 px-4">request invite</button>
        </nav>
      </SectionContainer>
      </div>
      <Sidebar show={showMenu} />
    </>
  );
}

export default Navbar;
