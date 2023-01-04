import "./Hero.css";

import React from 'react'
import { Link } from "react-router-dom"

import IntroImg from "../assets/intro-bg.jpg"
import MyImg from "../assets/my_photo_nobg.png"

const Hero = () => {
    return (
        <div className="hero">
            <div className="mask">
                <img className="intro-img" src={IntroImg} alt="IntroImg" />
            </div>

            <div className="content">
                <div className="hero-animation">
                    <img className="hero-img" src={MyImg} alt="MyImg" />
                </div>
                <p>
                    Hi, I'm José.
                </p>
                <h1> This is my personal portfolio </h1>

                <div>
                    <Link to="/Projects" className="btn"> Projects </Link>
                    <Link to="/Contact" className="btn btn-light"> Contact </Link>
                </div>
            </div>

        </div>
    )
}

export default Hero