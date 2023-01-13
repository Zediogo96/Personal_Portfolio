import "./HeroImage.css";

import React, { Component } from 'react'

import { animateBackground } from "../js/animations";


class HeroImage extends Component {

  componentDidMount() {

    let el = document.querySelector(".hero-main");

    animateBackground(el);
      
  }

  render() {
    return (
      <div className="hero-main" data-x = "0" data-y = "0">
        <div className="heading">
          <h1> {this.props.heading}</h1>
          <p>{this.props.text}</p>
        </div>
      </div>
    )
  }
}

export default HeroImage