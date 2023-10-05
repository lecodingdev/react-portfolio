import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import client from "../client";

const BlogPage = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    client
      .fetch(
        `*[_type == "post"] {
          title,
          slug,
          body,
          mainImage {
            asset -> {
              _id,
              url
            },
            alt
          }
        }`
      )
      .then((data) => setPosts(data))
      .catch(console.error);
  }, []);

  return (
    <section id="blog" className="pt-36 pb-32 bg-slate-100 dark:bg-slate-800">
      <div className="container">
        <div className="w-full px-4">
          <div className="max-w-xl mx-auto text-center mb-16">
            <h4 className="font-semibold text-lg text-primary mb-2 animate__animated animate__fadeInDown animate__delay-2s">
              Blog
            </h4>
            <h2 className="font-bold text-dark text-3xl mb-4 sm:text-4xl lg:text-5xl dark:text-white animate__animated animate__fadeInDown animate__delay-1s">
              My Article
            </h2>
            <p className="font-medium text-md text-secondary md:text-lg animate__animated animate__fadeInDown animate__delay-2s">
              Throughout my learning journey, I have written various articles
              that reflect my dedication to exploring new knowledge and skills.
              The primary purpose of these articles is to provide guidance,
              tips, and insights to the readers while also serving as a source
              of inspiration for those on similar learning journeys. I strive to
              convey clear explanations and offer motivation in each piece,
              making complex concepts easier to understand and encouraging
              readers to continue learning and growing.
            </p>
          </div>
        </div>

        <div
          data-aos="fade-up"
          data-aos-duration="1000"
          data-aos-delay="1200"
          className="grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3"
        >
          {posts.map((post) => (
            <article key={post.slug.current}>
              <img
                className="h-60 w-full"
                src={post.mainImage.asset.url}
                alt={post.title}
              />
              <h4 className="text-xl mt-2 dark:text-white">{post.title}</h4>
              <button className="mt-5 mb-10">
                <Link
                  to={`/blog/${post.slug.current}`}
                  className="py-2 px-6 rounded-full shadow text-white bg-primary hover:opacity-80 border-none transition-all duration-500 font-bold"
                >
                  Read Full Article
                </Link>
              </button>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BlogPage;
