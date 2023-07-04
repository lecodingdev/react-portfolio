import React, { useState, useEffect } from "react";

const NavBar = () => {
  const [isMobile, setIsMobile] = useState(false);
  const [isClassVisible, setIsClassVisible] = useState(false);
  const [isBackgroundChange, setIsBackgroundChange] = useState(false);

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

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  function toggleClass() {
    setIsClassVisible(!isClassVisible);
  }

  return (
    <header className={`bg-transparent absolute top-0 left-0 w-full flex items-center z-10 ${isBackgroundChange ? 'navbar-fixed' : ''}`}>
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
              className={`block absolute right-4 lg:hidden ${isClassVisible ? "hamburger-active" : ""}`}
            >
                <span className="hamburger-line transition duration-300 ease-in-out origin-top-left"></span>
                <span className="hamburger-line transition duration-300 ease-in-out"></span>
                <span className="hamburger-line transition duration-300 ease-in-out origin-bottom-left"></span>
            </button>

            <nav
              onClick={toggleClass}
              className={!isMobile && !isClassVisible ? "hidden" : "nav-menu"}
            >
              <ul className="block lg:flex">
                <li className="group">
                  <a
                    href="#home"
                    className="text-base text-dark py-2 mx-8 flex group-hover:text-primary"
                  >
                    Home
                  </a>
                </li>
                <li className="group">
                  <a
                    href="#about"
                    className="text-base text-dark py-2 mx-8 flex group-hover:text-primary"
                  >
                    About
                  </a>
                </li>
                <li className="group">
                  <a
                    href="#blog"
                    className="text-base text-dark py-2 mx-8 flex group-hover:text-primary"
                  >
                    Blog
                  </a>
                </li>
                <li className="group">
                  <a
                    href="#contact"
                    className="text-base text-dark py-2 mx-8 flex group-hover:text-primary"
                  >
                    Contact
                  </a>
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </div>
    </header>
  );
};

export default NavBar;
