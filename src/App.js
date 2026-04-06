import './App.css';
import React from 'react';
import  Navbar  from './Component/Navbar';
import Footer from "./Component/Footer";
import  Home  from './Pages/Home';
import  About  from './Pages/About';
import UploadResume from './Pages/UploadResume';
import Result from './Pages/Result';
import { Routes, Route } from "react-router-dom";
import Signup from './Pages/Signup';
import Login from './Pages/Login';
import History from "./Pages/History";
import Setting from "./Pages/Setting";
import Dashboard from "./Pages/Dashboard";
import AITools from './Pages/AITools';


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
        <Route path="result" element={<Result />} />
        <Route path="Footer" element={<Footer/>} />
        <Route path="Signup" element={<Signup/>} />
        <Route path="Login" element={<Login/>} />
        <Route path="History" element={<History />} />
        <Route path="Setting" element={<Setting/>} />
        <Route path="ai-tools" element={<AITools/>} />
        <Route path="Dashboard" element={<Dashboard/>} />
      </Routes>
      <Footer/>
    </div>
  </>
  );
}

export default App;
