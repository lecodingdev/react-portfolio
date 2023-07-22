import React, { useState, useEffect } from "react"
import { Link, useParams } from "react-router-dom"
import client from "../client"
import BlockContent from "@sanity/block-content-to-react"

export default function SinglePost() {
  const [singlePost, setSinglePost] = useState([])
  const [isLoading, setIsLoading] = useState(true)
  const { slug } = useParams()

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
      .then((data) => setSinglePost(data[0]))
    setIsLoading(false)
  }, [slug])

  return (
    <>
      {isLoading ? (
        <h1 className="">
          Loading...
        </h1>
      ) : (
        <section className="pt-36 pb-32 bg-slate-100 dark:bg-slate-800">
            <div className="container">
          <h1 className="font-bold text-dark text-3xl mb-4 sm:text-4xl lg:text-5xl dark:text-white animate__animated animate__fadeInDown animate__delay-1s">
            {singlePost.title}
          </h1>
          {singlePost.mainImage && singlePost.mainImage.asset && (
            <img
              className='h-100 mx-auto mt-5 lg:h-96'
              src={singlePost.mainImage.asset.url}
              alt={singlePost.title}
              title={singlePost.title}
            />
          )}
          <p className="dark:text-white">By <span className="text-base font-semibold text-primary md:text-xl">
                Alan Tanadi
              </span></p>

          <div 
          data-aos="fade-up"
          data-aos-duration="1000"
          data-aos-delay="1200"
          className="block__content mt-5 mb-10 dark:text-white">
            <BlockContent
              blocks={singlePost.body}
              projectId="jwuld41g"
              dataset="production"
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
  )
}