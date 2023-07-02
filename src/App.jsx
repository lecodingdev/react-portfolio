import React from 'react';
import { Route, Routes } from 'react-router-dom'
import About from './components/About';
import Home from './components/Home';
import NavBar from './components/NavBar';

function App() {

  return (
    <>
    <NavBar />
    <Home />
    <About />
    </>
  )
}

export default App
