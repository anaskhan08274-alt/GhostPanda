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
import ResumeBuilder from "./Pages/ResumeBuilder";
import CoverLetter from "./Pages/CoverLetter";
import JobMatch from "./Pages/JobMatch";
import InterviewAI from './Pages/InterviewAI';
import SkillGap from './Pages/SkillGap';


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
        <Route path="/resume-builder" element={<ResumeBuilder />} />
        <Route path="/cover-letter" element={<CoverLetter />} />
        <Route path="/job-match" element={<JobMatch />} />
        <Route path="/interview" element={<InterviewAI />} />
        <Route path="/skillgap" element={<SkillGap />} />
      </Routes>
      <Footer/>
    </div>
  </>
  );
}

export default App;
