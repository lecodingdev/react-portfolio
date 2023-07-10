import React from 'react';
import Footer from './components/Footer';
import Home from './components/Home';
import NavBar from './components/NavBar';
import { Route, Routes } from "react-router-dom"
import BlogPage from './pages/BlogPage';
import ProjectPage from './pages/ProjectPage';
import ContactPage from './pages/ContactPage';

function App() {

  return (
    <>
    <NavBar />

    <Routes>
        <Route path="/" Component={Home} />
        <Route path="/blog" Component={BlogPage}/>
        <Route path="/project" Component={ProjectPage}/>
        <Route path="/contact" Component={ContactPage}/>
    </Routes>

    <Footer />
    </>
  )
}

export default App
