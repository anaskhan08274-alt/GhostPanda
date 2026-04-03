import logo from './logo.svg';
import './App.css';
import React from 'react';
import  Navbar  from './Component/Navbar';
import  Home  from './Pages/Home';
import  About  from './Pages/About';
import UploadResume from './Pages/UploadResume';
import { Routes, Route } from "react-router-dom";


function App() {
  return (
  <>
     <div>
      <Navbar/>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="About" element={<About/>} />
        <Route path="Navbar" element={<Navbar/>} />
        <Route path="upload" element={<UploadResume/>} />
        <img src={logo} alt="logo" />
      </Routes>
    </div>
  </>
  );
}

export default App;
