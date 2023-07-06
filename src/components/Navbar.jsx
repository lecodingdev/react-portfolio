import React, { useState, useEffect } from "react";

const NavBar = () => {
  const [isMobile, setIsMobile] = useState(false);
  const [isClassVisible, setIsClassVisible] = useState(false);
  const [isBackgroundChange, setIsBackgroundChange] = useState(false);
  const [theme, setTheme] = useState(localStorage.theme || 'light');

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
    if (theme === 'dark') {
      document.documentElement.classList.add('dark');
      localStorage.theme = 'dark';
    } else {
      document.documentElement.classList.remove('dark');
      localStorage.theme = 'light';
    }
  }, [theme]);

  function toggleClass() {
    setIsClassVisible(!isClassVisible);
  };

  const toggleTheme = () => {
    setTheme(theme === "dark" ? "light" : "dark");
  };

  return (
    <header
      className={`bg-transparent absolute top-0 left-0 w-full flex items-center z-10 ${
        isBackgroundChange ? "navbar-fixed" : ""
      }`}
    >
      <div className="container">
        <div className="flex items-center justify-between relative">
          <div className="px-4">
            <a
              href="#home"
              className="font-bold text-lg text-primary block py-6"
            >
              LeCodingDev
            </a>
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
                  <a
                    href="#home"
                    className="text-base text-dark py-2 mx-8 flex group-hover:text-primary dark:text-white"
                  >
                    Home
                  </a>
                </li>
                <li className="group">
                  <a
                    href="#about"
                    className="text-base text-dark py-2 mx-8 flex group-hover:text-primary dark:text-white"
                  >
                    About
                  </a>
                </li>
                <li className="group">
                  <a
                    href="#blog"
                    className="text-base text-dark py-2 mx-8 flex group-hover:text-primary dark:text-white"
                  >
                    Blog
                  </a>
                </li>
                <li className="group">
                  <a
                    href="#project"
                    className="text-base text-dark py-2 mx-8 flex group-hover:text-primary dark:text-white"
                  >
                    Project
                  </a>
                </li>
                <li className="group">
                  <a
                    href="#contact"
                    className="text-base text-dark py-2 mx-8 flex group-hover:text-primary dark:text-white"
                  >
                    Contact
                  </a>
                </li>
                <li className="mt-3 lg:mt-0 flex items-center pl-8">
                    <div className="flex">
                    <span className="mr-2 text-sm text-slate-500">light</span>
                    <input onClick={toggleTheme} type="checkbox" checked={theme === 'dark'} className="hidden" id="dark-toggle" />
                    <label htmlFor="dark-toggle">
                      <div className="flex h-5 w-9 cursor-pointer items-center rounded-full bg-slate-500 p-1">
                        <div className='toggle-circle h-4 w-4 rounded-full bg-white transition duration-300 ease-in-out'></div>
                      </div>
                    </label>
                    <span className="ml-2 text-sm text-slate-500">dark</span>
                    </div>
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </div>

      <a
        href="#home"
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
