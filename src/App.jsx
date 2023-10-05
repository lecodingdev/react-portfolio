import React, { useState, useEffect } from 'react';
import Footer from './components/Footer';
import Home from './components/Home';
import Navbar from './components/Navbar';
import { Route, Routes } from "react-router-dom"
import BlogPage from './pages/BlogPage';
import ProjectPage from './pages/ProjectPage';
import NotFound from './pages/NotFound';
import SinglePost from './pages/SinglePost';

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 5000);  // The loading screen will last for 5 seconds
  }, []);     // Empty dependency array means this useEffect runs once when component mounts

  if (loading) {
    return (
      <div className="flex justify-center items-center h-screen flex-col bg-primary">
        <div className='flex justify-center items-center flex-col border-slate-800 shadow-2xl w-3/4 h-72 lg:w-2/4 bg-white'>
        <h1 className='my-20 text-xl lg:text-3xl'>Welcome to LeCodingDev</h1>
        <p className='mb-2'>Loading...</p>
        <div className="progressBarContainer">
          <div className="progressBar"></div>
        </div>
        </div>
      </div>
    );
  }

  return (
    <>
    <Navbar />

    <Routes>
        <Route path="/" Component={Home} />
        <Route path="/blog/:slug" Component={SinglePost}/>
        <Route path="/blog" Component={BlogPage}/>
        <Route path="/project" Component={ProjectPage}/>
        <Route path='*' Component={NotFound}/>
    </Routes>

    <Footer />
    </>
  )
}

export default App
