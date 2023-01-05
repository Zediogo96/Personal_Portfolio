import "./AboutContent.css";

import React from 'react'
import { Link } from "react-router-dom";

import FEUP from "../assets/feup.jpg";
import WebDev from "../assets/webdev.jpg";

const AboutContent = () => {
  return (
    <div className="about">
        <div className="left">
            <h1>Who am I?</h1>
            <p> I'm a student at FEUP, currently studying Computer Engineering. I'm passionate about technology and I'm always looking for new ways to improve my skills. My main area of interest is Web / Mobile Development, I'm currently learning React. </p>
            <Link to="/contact"> 
                <button className="btn"> Contact </button>
            </Link>
        </div>

        <div className="right">
            <div className="img-container">
                <div className="img-stack top">
                    <img src={FEUP} alt="img1" className="img"/>
                </div>
                <div className="img-stack bottom">
                    <img src={WebDev} alt="img1" className="img"/>
                </div>
            </div>
        </div>
    </div>
  )
}

export default AboutContent