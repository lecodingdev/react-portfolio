import React from 'react';
import Footer from './components/Footer';
import Home from './components/Home';
import Navbar from './components/Navbar';
import { Route, Routes } from "react-router-dom"
import BlogPage from './pages/BlogPage';
import ProjectPage from './pages/ProjectPage';
import NotFound from './pages/NotFound';
import SinglePost from './pages/SinglePost';

function App() {

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
