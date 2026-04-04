import './App.css';
import React from 'react';
import  Navbar  from './Component/Navbar';
import Footer from "./Component/Footer";
import  Home  from './Pages/Home';
import  About  from './Pages/About';
import UploadResume from './Pages/UploadResume';
import Result from './Pages/Result';
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
        <Route path="/result" element={<Result />} />
        <Route path="Footer" element={<Footer/>} />
      </Routes>
      <Footer/>
    </div>
  </>
  );
}

export default App;
