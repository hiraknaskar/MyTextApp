import { useState } from 'react';
import './App.css';
import About from './components/About';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import Alerts from './components/Alerts';
import React from "react";
import {
  
  Routes,
  Route,
  
  BrowserRouter
} from "react-router-dom";


function App() {
  const [mode, setMode] = useState('light');
  const toggleMode=()=>{
    if(mode==='light'){
      setMode('dark');
      document.body.style.backgroundColor='#062138';
      showAlaet("Dark mode has beenenabled" , "success");
      document.title = "MyTextApp - DarkMode";
      setInterval(() => {
        document.title = "MyTextApp is Amazing";
      }, 2000);
      setInterval(() => {
        document.title = "Install MyTextApp Now";
      }, 1500);
    }
    else{
      setMode('light');
      document.body.style.backgroundColor='white';
      showAlaet("Light mode has beenenabled" , "success");
      document.title = "MyTextApp - LightMode";
    }
  }
  const [alert, setalert] = useState('null');
  const showAlaet=(message, type)=>{
    setalert({
      msg: message,
      type: type,
    })
    setTimeout(() => {
      setalert('null');
    }, 1500);
  }
  return (
    <>
    <BrowserRouter>
       <Navbar mode={mode} toggleMode={toggleMode}/>
       <Alerts alert={alert}/>
       <div className="container my-3">
       
       <Routes>
          <Route path="/about" element={<About />}></Route>
          <Route path="/" element={<TextForm heading ="enter the text to analyze below" mode={mode} showAlaet={showAlaet}/>}></Route>
        </Routes>
       </div>
      </BrowserRouter>
      </>
  );
}

export default App;
