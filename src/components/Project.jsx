import React, { useState, useEffect } from "react";
import client from "../client";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

// import required modules
import { Navigation, Pagination, Scrollbar, A11y } from "swiper/modules";

const Project = () => {
  const [projectData, setProjectData] = useState([]);

  useEffect(() => {
    client
      .fetch(
        `*[_type == "project"] {
          title,
          date,
          slug,
          skill,
          description,
          link,
          mainImages[] {
            asset -> {
              _id,
              url
            },
            alt
          }
        }`
      )
      .then((data) => setProjectData(data))
      .catch(console.error);
  }, []);

  return (
    <section id="project" className="pt-36 pb-32 bg-white dark:bg-dark">
      <div className="container">
        <div className="w-full px-4">
          <div className="max-w-xl mx-auto text-center mb-16">
            <h4 className="font-semibold text-lg text-primary mb-2">Project</h4>
            <h2 className="font-bold text-dark text-3xl mb-4 sm:text-4xl lg:text-5xl dark:text-white animate__animated animate__fadeInDown animate__delay-1s">
              My Project
            </h2>
            <p className="font-medium text-md text-secondary md:text-lg animate__animated animate__fadeInDown animate__delay-1s">
              Each project taught me valuable lessons and exposed me to
              different tools and technologies, further enriching my skill set
              and problem-solving abilities. The challenges I encountered during
              these projects helped me grow as a developer and motivated me to
              keep exploring and pushing the boundaries of what I can achieve.
            </p>
          </div>
        </div>

        <div
          data-aos="fade-up"
          data-aos-duration="1000"
          data-aos-delay="1200"
          className="grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3"
        >
          {projectData.map((project) => (
            <article key={project.slug.current}>
              <Swiper
                modules={[Navigation, Pagination, Scrollbar, A11y]}
                spaceBetween={50}
                slidesPerView={1}
                navigation
                pagination={{ clickable: true }}
                scrollbar={{ draggable: true }}
                onSwiper={(swiper) => console.log(swiper)}
                onSlideChange={() => console.log("slide change")}
              >
                {project.mainImages.map((image, index) => (
                  <SwiperSlide key={index}>
                    <img
                      className="h-60 w-full"
                      src={image.asset.url}
                      alt={project.title}
                    />
                  </SwiperSlide>
                ))}
              </Swiper>
              <h4 className="text-xl mt-2 dark:text-white">{project.title}</h4>
              <div className=" text-secondary text-xs flex flex-col mt-2">
                <span>
                  <strong>Skills</strong>: {project.skill}
                </span>
                <span>
                  <strong className="font-bold">Finished on </strong>:{" "}
                  {new Date(project.date).toDateString()}
                </span>
                <span className="my-6 text-base text-secondary leading-relaxed">
                  {project.description}
                </span>
              </div>
              <button className="mt-5 mb-10">
                <a
                  href={project.link}
                  target="_blank"
                  rel="noreferrer"
                  className="py-2 px-6 rounded-full shadow text-white bg-primary hover:opacity-80 border-none transition-all duration-500 font-bold"
                >
                  View The Project
                </a>
              </button>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Project;
