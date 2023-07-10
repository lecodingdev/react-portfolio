import React, { useState, useEffect } from "react";
import { NavLink } from 'react-router-dom';
import IconLogo from '../assets/react.svg';
import DarkModeOutlinedIcon from '@mui/icons-material/DarkModeOutlined';
import LightModeIcon from '@mui/icons-material/LightMode';
import ScrollToTop from "./ScrollToTop";

const NavBar = () => {
  const [isMobile, setIsMobile] = useState(false);
  const [isClassVisible, setIsClassVisible] = useState(false);
  const [isBackgroundChange, setIsBackgroundChange] = useState(false);
  const [theme, setTheme] = useState(localStorage.theme || "light");
  const [isClicked, setIsClicked] = useState(false);
  

  useEffect(() => {
    const handleResize = () => {
      const isMobileView = window.innerWidth <= 1024;

      setIsMobile(!isMobileView);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY || document.documentElement.scrollTop;
      const scrollThreshold = 10;

      if (scrollTop > scrollThreshold) {
        setIsBackgroundChange(true);
      } else {
        setIsBackgroundChange(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
    if (theme === "dark") {
      document.documentElement.classList.add("dark");
      localStorage.theme = "dark";
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.theme = "light";
    }
  }, [theme]);

  function toggleClass() {
    setIsClassVisible(!isClassVisible);
  }

  const toggleTheme = () => {
    setTheme(theme === "dark" ? "light" : "dark");
    setIsClicked(!isClicked);
  };

  return (
    <header
      className={`bg-transparent absolute top-0 left-0 w-full flex items-center z-10 ${
        isBackgroundChange ? "navbar-fixed" : ""
      }`}
    >
      <div className="container nav-anim animate__animated animate__fadeInDown animate__delay-1s">
        <div className="flex items-center justify-between relative">
          <div className="px-4 flex">
            <img src={IconLogo} className='mr-2 animate-spin-slow'/>
            <NavLink
              to=''
              className="font-bold text-lg text-primary block py-6"
            >
              LeCodingDev
            </NavLink>
            <div className="flex items-center pl-2">
                  <div className="flex">
                    <input
                      onClick={toggleTheme}
                      type="checkbox"
                      checked={theme === "dark"}
                      className="hidden"
                      id="dark-toggle"
                    />
                    <label htmlFor="dark-toggle">
                      <div >
                      {isClicked ? <LightModeIcon className="dark:text-white" /> : <DarkModeOutlinedIcon />}
                        <div
                          className={` ${
                            theme === "dark" ? "transform translate-x-4" : ""
                          }`}
                        ></div>
                      </div>
                    </label>
                  </div>
                </div>
          </div>
          <div className="flex items-center px-4">
            <button
              onClick={toggleClass}
              type="button"
              className={`block absolute right-4 lg:hidden ${
                isClassVisible ? "hamburger-active" : ""
              }`}
            >
              <span className="hamburger-line transition duration-300 ease-in-out origin-top-left"></span>
              <span className="hamburger-line transition duration-300 ease-in-out"></span>
              <span className="hamburger-line transition duration-300 ease-in-out origin-bottom-left"></span>
            </button>

            <nav
              onClick={toggleClass}
              className={`absolute py-5 bg-white shadow-lg rounded-lg max-w-[250px] w-full right-4 top-full lg:block lg:static lg:bg-transparent lg:max-w-full lg:shadow-none lg:rounded-none dark:bg-dark dark:shadow-slate-500 lg:dark:bg-transparent ${
                !isMobile && !isClassVisible ? "hidden" : ""
              }`}
            >
              <ul className="block lg:flex">
                <li className="group">
                  <NavLink
                    to=""
                    className="text-base text-dark py-2 mx-8 flex group-hover:text-primary dark:text-white"
                  >
                    Home
                  </NavLink>
                </li>
                <li className="group">
                  <NavLink
                    to="blog"
                    className="text-base text-dark py-2 mx-8 flex group-hover:text-primary dark:text-white"
                  >
                    Blog
                  </NavLink>
                </li>
                <li className="group">
                  <NavLink
                    to="project"
                    className="text-base text-dark py-2 mx-8 flex group-hover:text-primary dark:text-white"
                  >
                    Project
                  </NavLink>
                </li>
                <li className="group">
                  <NavLink
                    to="contact"
                    className="text-base text-dark py-2 mx-8 flex group-hover:text-primary dark:text-white"
                  >
                    Contact
                  </NavLink>
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </div>

      <a
        onClick={ScrollToTop}
        className={`fixed justify-center items-center bottom-4 right-4 z-[9999] h-12 w-12 rounded-full bg-primary p-4 hover:animate-pulse ${
          isBackgroundChange ? "flex" : "hidden"
        }`}
      >
        <span className="block w-4 h-4 border-t-2 border-l-2 rotate-45 mt-2"></span>
      </a>
    </header>
  );
};

export default NavBar;
