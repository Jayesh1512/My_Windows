import React, { useState } from "react";
import "./Desktop.css";
import img from "./resources/windows.png";
import internet from "./resources/internet.png"
import myComp from "./resources/recycle.png";
import MyComp from './MyComp';
import speaker from './resources/sound.png'
import { useEffect } from "react";
import { BrowserRouter , Link , Route , Routes } from "react-router-dom";
import Display from './Display.js'
import Explorer from './Explorer.js'



function Time() {
  
  /// Time 


  const d = new Date();
  let formattedTime = d.toLocaleTimeString();
  return formattedTime;
}

function Desktop() {

  /// Time
  const [time, setTime] = useState(Time());

  useEffect(() => {
    const timer = setTimeout(() => {
      setTime(Time());
    }, 1000);

    return () => {
      clearTimeout(timer);
    };
  }, [time]);

  // audio

  var audio = new Audio("./click.mp3");
  
  window.addEventListener('onClick', () => {
    audio.play();
  });



  return (
    <>
    
    
    
    
    <BrowserRouter>
      <div className="linking"><Link to = "/Comp" > <MyComp img = {myComp} appname = "My Computer"/> </Link></div>
      <div className="linking"><Link to = "/Explorer" > <MyComp img = {internet} appname = "Internet Explorer"/> </Link></div>
      <div className="linking"><Link to = "/Recycle-Bin" ><MyComp img = {myComp} appname = "Recycle Bin" className = "linktag"/></Link></div>

      <Routes>
        <Route path="/Comp" element = {<Display />} / >
        <Route path="/Explorer" element = {<Explorer />} / > 
        <Route path="/Recycle-Bin" element = {<Explorer />} / > 
      </Routes>
     </BrowserRouter>  
      
      
      
      
      
      <div className="startbar">
        <div className="startbutton">
          <button className="startbtn">
            <img src={img} alt="yo" />
            <div className="text">start</div>
          </button>
        </div>
        <div className="tasks">1</div>
        <div className="time">
          <img className = "speaker"  src={speaker}></img>
          <div className="timetext">{time}</div>
          </div>
      </div>
    
    
    
    
    
    
    
    </>
  );
}

export default Desktop;
