import React from "react";

const Project = () => {
  return (
    <section className="pt-36 pb-32 bg-white">
      <div className="container">
        <div className="w-full px-4">
          <div className="max-w-xl mx-auto text-center mb-16">
            <h4 className="font-semibold text-lg text-primary mb-2">Project</h4>
            <h2 className="font-bold text-dark text-3xl mb-4 sm:text-4xl lg:text-5xl">
              My Project
            </h2>
            <p className="font-medium text-md text-secondary md:text-lg">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti
              repudiandae deserunt molestias dolore.
            </p>
          </div>
        </div>

        <div className="w-full px-4 flex flex-wrap justify-center">
            <div className="mb-12 p-4 md:w-1/2">
                <div className="rounded-md shadow-md overflow-hidden">
                    <img src='https://source.unsplash.com/600x300?page' width='w-full'/>
                </div>
                <h3 className="font-semibold text-xl text-dark mt-5 mb-3">Landing Page</h3>
                <p className="font-medium text-base text-secondary">Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident modi corrupti atque.</p>
            </div>
            <div className="mb-12 p-4 md:w-1/2">
                <div className="rounded-md shadow-md overflow-hidden">
                    <img src='https://source.unsplash.com/600x300?contact' width='w-full'/>
                </div>
                <h3 className="font-semibold text-xl text-dark mt-5 mb-3">MPV contact page</h3>
                <p className="font-medium text-base text-secondary">Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident modi corrupti atque.</p>
            </div>
            <div className="mb-12 p-4 md:w-1/2">
                <div className="rounded-md shadow-md overflow-hidden">
                    <img src='https://source.unsplash.com/600x300?slicing' width='w-full'/>
                </div>
                <h3 className="font-semibold text-xl text-dark mt-5 mb-3">Slicing</h3>
                <p className="font-medium text-base text-secondary">Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident modi corrupti atque.</p>
            </div>
            <div className="mb-12 p-4 md:w-1/2">
                <div className="rounded-md shadow-md overflow-hidden">
                    <img src='https://source.unsplash.com/600x300?ecommerce' width='w-full'/>
                </div>
                <h3 className="font-semibold text-xl text-dark mt-5 mb-3">E-commerce</h3>
                <p className="font-medium text-base text-secondary">Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident modi corrupti atque.</p>
            </div>
        </div>
      </div>
    </section>
  );
};

export default Project;
