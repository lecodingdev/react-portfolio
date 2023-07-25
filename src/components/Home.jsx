import React from "react";
import logo from "../assets/profile.png";
import TypedJS from "../utility/TypedJS";
import About from "./About";
import Blog from "./Blog";
// import Contact from "./Contact";
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
              href="https://github.com/lecodingdev"
              className="text-base font-semibold text-white bg-primary py-3 px-8 rounded-full hover:shadow-lg hover:opacity-80 transition duration-300 ease-in-out animate__animated animate__fadeInUp animate__delay-1s"
            >
              {" "}
              Follow Me
            </a>
          </div>

          <div className="w-full self-end px-4 lg:w-1/2 animate__animated animate__fadeInUp animate__delay-1s">
            <div className="relative mt-8 lg:mt-0 lg:right-0">
              <img className="relative z-10 max-w-full mx-auto" src={logo} />
              <span>
                <div className="bg-[#14b8a6] w-[800px] h-[800px] md:-right-14 rounded-full absolute -right-52 -bottom-80 -z-10"></div>
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

    {/* <section id="contact" data-aos="fade-up" data-aos-duration="1000" data-aos-delay="200">
      <Contact />
    </section> */}
    </div>


  );
};

export default Home;
