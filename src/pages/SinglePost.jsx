import React, { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import client from "../client";
import { PortableText } from "@portabletext/react";
import CodeComponents from '../utility/Code';
import SampleImageComponent from '../utility/Images';

export default function SinglePost() {
  const [singlePost, setSinglePost] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const { slug } = useParams();

  useEffect(() => {
    client
      .fetch(
        `*[slug.current == "${slug}"] {
        title,
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
      .then((data) => setSinglePost(data[0]));
    setIsLoading(false);
  }, [slug]);

  return (
    <>
      {isLoading ? (
        <h1 className="">Loading...</h1>
      ) : (
        <section className="pt-36 pb-32 bg-slate-100 dark:bg-slate-800">
          <div className="container">
            <h1 className="font-bold text-dark text-3xl mb-4 sm:text-4xl lg:text-5xl dark:text-white animate__animated animate__fadeInDown animate__delay-1s">
              {singlePost.title}
            </h1>
            {singlePost.mainImage && singlePost.mainImage.asset && (
              <img
                className="h-100 mx-auto mt-5 lg:h-96"
                src={singlePost.mainImage.asset.url}
                alt={singlePost.title}
                title={singlePost.title}
              />
            )}
            <p className="dark:text-white">
              By{" "}
              <span className="text-base font-semibold text-primary md:text-xl">
                Alan Tanadi
              </span>
            </p>

            <div
              data-aos="fade-up"
              data-aos-duration="1000"
              data-aos-delay="1200"
              className="block__content mt-5 mb-10 dark:text-white"
            >
              <PortableText
                value={singlePost.body}
                components={{
                  types: {
                    image: SampleImageComponent,
                    code: CodeComponents,
                  },
                  block: {
                    // Customizing common block types
                    h1: ({ children }) => (
                      <h1 className="text-2xl font-bold mb-4 mt-4">{children}</h1>
                    ),
                    h2: ({ children }) => (
                      <h2 className="text-xl font-bold mb-4 mt-4">{children}</h2>
                    ),
                    h3: ({ children }) => (
                      <h3 className="text-lg font-bold mb-4 mt-4">{children}</h3>
                    ),
                    h4: ({ children }) => (
                      <h4 className="text-base font-bold mb-4 mt-4">{children}</h4>
                    ),
                    blockquote: ({ children }) => (
                      <blockquote className="border-l-4 border-primary pl-4 italic">
                        {children}
                      </blockquote>
                    ),
                    // Ex. 2: rendering custom styles
                    customHeading: ({ children }) => (
                      <h2 className="text-lg text-primary">{children}</h2>
                    ),
                  },
                  marks: {
                    // Ex. 1: custom renderer for the em / italics decorator
                    em: ({ children }) => (
                      <em className="text-gray-600 font-semibold">
                        {children}
                      </em>
                    ),

                    // Ex. 2: rendering a custom `link` annotation
                    link: ({ value, children }) => {
                      const target = (value?.href || "").startsWith("http")
                        ? "_blank"
                        : undefined;
                      return (
                        <a
                          className="text-lg underline text-primary"
                          href={value?.href}
                          target={target}
                          rel={target === "_blank" && "noindex nofollow"}
                        >
                          {children}
                        </a>
                      );
                    },
                  },
                  listItem: {
                    // Ex. 1: customizing common list types
                    bullet: ({ children }) => (
                      <li style={{ listStyleType: "disc" }}>
                        {children}
                      </li>
                    ),

                    // Ex. 2: rendering custom list items
                    checkmarks: ({ children }) => <li>✅ {children}</li>,
                  },
                }}
              />
            </div>

            <button>
              <Link
                to="/blog"
                className="py-2 px-6 rounded-full shadow text-white bg-primary hover:opacity-80 border-none transition-all duration-500 font-bold"
              >
                Read more articles
              </Link>
            </button>
          </div>
        </section>
      )}
    </>
  );
}
