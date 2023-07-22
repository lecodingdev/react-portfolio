import React from 'react';
import Footer from './components/Footer';
import Home from './components/Home';
import NavBar from './components/NavBar';
import { Route, Routes } from "react-router-dom"
import BlogPage from './pages/BlogPage';
import ProjectPage from './pages/ProjectPage';
import ContactPage from './pages/ContactPage';
import NotFound from './pages/NotFound';
import SinglePost from './pages/SinglePost';

function App() {

  return (
    <>
    <NavBar />

    <Routes>
        <Route path="/" Component={Home} />
        <Route path="/blog/:slug" Component={SinglePost}/>
        <Route path="/blog" Component={BlogPage}/>
        <Route path="/project" Component={ProjectPage}/>
        <Route path="/contact" Component={ContactPage}/>
        <Route path='*' Component={NotFound}/>
    </Routes>

    <Footer />
    </>
  )
}

export default App
