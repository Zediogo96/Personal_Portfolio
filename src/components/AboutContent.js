import "./AboutContent.css";

import React, { useEffect } from 'react'
import { Link } from "react-router-dom"
import Aos from "aos";
import "aos/dist/aos.css";

import FEUP from "../assets/feup.jpg";
import WebDev from "../assets/webdev.jpg";

const AboutContent = () => {

    useEffect(() => {
        Aos.init({ duration: 2000 });
    }, []);

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
                        <img data-aos="fade-down-right" src={FEUP} alt="img1" className="img" />
                    </div>
                    <div className="img-stack bottom">
                        <img data-aos="fade-down-left" src={WebDev} alt="img1" className="img" />
                    </div>
                </div>
            </div>

            <div className="left">
                <h1>Skills</h1>
                <ul className="skills">
                    <li> C / C++ </li>
                    <li> Java </li>
                    <li> Python </li>
                    <li> HTML / CSS </li>
                    <li> JavaScript </li>
                    <li> React </li>
                </ul>
            </div>

            <div className="right">
                <div className="img-container">
                    <div className="img-stack top">
                        <img data-aos="fade-down-right" src={FEUP} alt="img1" className="img" />
                    </div>
                    <div className="img-stack bottom">
                        <img data-aos="fade-down-left" src={WebDev} alt="img1" className="img" />
                    </div>
                </div>
            </div>




        </div>
    )
}

export default AboutContent