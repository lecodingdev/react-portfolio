import React from "react";
import logo from "../assets/profile.png";
import TypedJS from "../utility/TypedJS";
import About from "./About";
import Blog from "./Blog";
import Contact from "./Contact";
import Project from "./Project";

const Home = () => {
  return (
    <div className="homepage">
    <section id="home" className="pt-36 dark:bg-dark overflow-hidden">
      <div className="container">
        <div className="flex flex-wrap">
          <div className="w-full self-center px-4 lg:w-1/2 home-text">
            <h1 className="text-base font-semibold text-primary md:text-xl animate__animated animate__fadeInUp animate__delay-1s">
              Hello, my names is{" "}
              <span className="block font-bold text-dark text-4xl mt-1 lg:text-5xl dark:text-white ">
                Alan Tanadi
              </span>{" "}
            </h1>
            <h2 className="font-medium text-secondary text-lg lg:text-2xl dark:text-white animate__animated animate__fadeInUp animate__delay-1s">
            <TypedJS
                loop={true}
                string={[
                  'I\'m <span style="color: rgb(14 165 233)">Frontend</span> Developer.',
                  'I\'m <span style="color: rgb(234 179 8)">Backend</span> Developer.',
                  'I\'m <span style="color: #14b8a6">Fullstack</span> Developer.',
                ]}
              />
            </h2>
            <p className="font-sm text-secondary mb-10 leading-relaxed animate__animated animate__fadeInUp animate__delay-1s">
              Full Time Learner
            </p>

            <a
              href="#contact"
              className="text-base font-semibold text-white bg-primary py-3 px-8 rounded-full hover:shadow-lg hover:opacity-80 transition duration-300 ease-in-out animate__animated animate__fadeInUp animate__delay-1s"
            >
              {" "}
              Contact Me
            </a>
          </div>

          <div className="w-full self-end px-4 lg:w-1/2 animate__animated animate__fadeInUp animate__delay-1s">
            <div className="relative mt-8 lg:mt-0 lg:right-0">
              <img className="relative z-10 max-w-full mx-auto" src={logo} />
              <span className="absolute bottom-0 left-1/2 -translate-x-1/2 md:scale-125">
                <svg width={400} height={400} viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
                  <path
                    fill="#14b8a6"
                    d="M40.2,-36.5C56,-24.5,75.3,-12.2,75.3,0C75.3,12.2,56,24.5,40.2,37.3C24.5,50.1,12.2,63.5,0.8,62.6C-10.6,61.8,-21.1,46.7,-30.5,33.9C-40,21.1,-48.2,10.6,-50.6,-2.4C-53,-15.3,-49.4,-30.5,-40,-42.6C-30.5,-54.7,-15.3,-63.6,-1.5,-62.1C12.2,-60.5,24.5,-48.6,40.2,-36.5Z"
                    transform="translate(100 100) scale(1.1)"
                  />
                </svg>
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section id="about" className="">
      <About />
    </section>

    <section id="blog" data-aos="fade-up" data-aos-duration="1000" data-aos-delay="200">
      <Blog />
    </section>

    <section id="project" data-aos="fade-up" data-aos-duration="1000" data-aos-delay="200">
      <Project />
    </section>

    <section id="contact" data-aos="fade-up" data-aos-duration="1000" data-aos-delay="200">
      <Contact />
    </section>
    </div>


  );
};

export default Home;
