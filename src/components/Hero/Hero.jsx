import React, { useEffect, useRef, useState } from "react";
import Navbar from "../Navbar/Navbar";
import "./Hero.scss";

import { MdKeyboardArrowLeft } from "react-icons/md";
import { MdKeyboardArrowRight } from "react-icons/md";
import { FiArrowUpRight } from "react-icons/fi";

const Hero = () => {
  return (
    <div className="hero">
      <Navbar />
      <div className="hero__container">
        <h1>WORK WITH PROFESSIONALS</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore sequi
          ducimus iure molestiae! Dolores doloremque optio officia ratione?
        </p>
        <div className="hero__container__buttons">
          <button className="start_now_btn">START NOW</button>
          <div className="learn_more_btn">
            <button>LEARN MORE</button>
            <span className="fiarrow">
              <FiArrowUpRight size={20} />
            </span>
          </div>
        </div>
        <div className="hero__container__arrows">
          <div>
            <MdKeyboardArrowLeft size={30} />
          </div>
          <div>
            <MdKeyboardArrowRight size={30} />
          </div>
        </div>
        <div className="hero__scrolling_text">
          <span>
            CONVENIENT LOCATION & SCHEDULE * DRAWING UP AN INDIVIDUAL TRAINING
            PROGRAM * BEST PROFESSIONAL COACHES * PERSONALIZED SESSIONS * EXPERT
            GUIDANCE * OPTIMAL PERFORMANCE * MAXIMUM RESULTS * TOP-QUALITY
            FACILITIES * CUTTING-EDGE EQUIPMENT
          </span>
        </div>
      </div>
    </div>
  );
};

export default Hero;
