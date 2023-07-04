import React from 'react';
import { Route, Routes } from 'react-router-dom'
import About from './components/About';
import Blog from './components/Blog';
import Home from './components/Home';
import NavBar from './components/NavBar';
import Project from './components/Project';

function App() {

  return (
    <>
    <NavBar />
    <Home />
    <About />
    <Blog />
    <Project />
    </>
  )
}

export default App
