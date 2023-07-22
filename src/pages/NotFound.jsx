
import { Link } from "react-router-dom"
import React from 'react';

export default function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <h1 className="uppercase text-primary font-bold text-4xl tracking-wide mb-10 md:text-6xl ">
        Error 404 | Page Not Found
      </h1>
      <Link
        to="/"
        className="py-2 px-6 rounded-full shadow text-white bg-primary hover:opacity-80 border-none transition-all duration-500 font-bold"
      >
        Back to homepage
      </Link>
    </div>
  )
}