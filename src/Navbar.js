import act from "./images/act.png";
import {useState,useEffect} from 'react';
import value from "./EveryPage";
import Block from "./Block";
import { NavLink,Navigate } from "react-router-dom";
import Sticky from "./Stickyphoto";
import SocialMedia from "./SocialMedia";




function Navbar({devclick,navbaranim,count}) {
    const [Hide, setHide] = useState(true);
    
    
   
    const setview=()=>{{Hide ? setHide(false): setHide(true)}}
    const trigger=()=>{
    navbaranim=false;
    }
   
    return (
      <div className="container ">
        <SocialMedia hide={Hide}/>
        <div style={{pointerEvents: count=0? 'none':''}}
          className={"dev_photo " + (navbaranim ? "navbaranim" : "")}
          onClick={() => {
            devclick();
            setview();
          }}
        >
          <div className="dropdown" style={{ display: Hide ? "none" : "block" }}>
            <div className="dropdown-content">
              <a onClick={()=>{setview();trigger()}}>Home</a>
              <a>About me</a>
              <a>Works</a>
              <a>certificates</a>
              <a>Skills</a>
            </div>
          </div>
        </div>
        <div className="devinfo" style={{ display: Hide ? "block" : "none" ,position:'absolute',bottom:'10%',left:'42%'}}>
        <span  >
          <h1 style={{ fontSize: "3vw", margin: "0 0 0 0" }}>
            Pavan Sai Rapeti
          </h1>
        </span>
        <span  style={{ display: Hide ? "block" : "none" }}>
          <h1 style={{ fontSize: "2vw", margin: 0 }}> React js Developer</h1>
        </span>
        <div>
            <span><button type="button" className='buttton' onClick={()=>alert('coming soon')}>game</button></span>
            <span><button type="button" className='buttton'>say Hi</button></span>
        </div>
        </div>
        <div style={{ display: Hide ? "block" : "none" }}>
          <Sticky photono={'photo1'}/>
          <Sticky photono={'photo2'} />
          <Sticky photono={'photo3'}  />
          <Sticky photono={'photo4'} />
          <Sticky photono={'photo5'} />
          <Sticky photono={'photo6'}  />
        </div>
      </div>
    );
}

export default Navbar;