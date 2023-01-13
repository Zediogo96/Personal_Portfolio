import React from "react";
import "./index.css";
import Home from "./routes/Home"
import About from "./routes/About"
import Contact from "./routes/Contact"
import Projects from "./routes/Projects"

import {Route, Routes} from "react-router-dom"

document.onmousemove = animateCircles; // circle follow mouse

var colors = ['#6B6361', '#876E58', '#C46F43']
function animateCircles(event) {
  var circle = document.createElement("div");
  circle.setAttribute("class", "circle");
  document.body.appendChild(circle); // adds function to body

  // adds motion
  circle.style.left = event.clientX + 'px';
  circle.style.top = event.clientY + 'px';

  // randomize color
  var color = colors[Math.floor(Math.random() * colors.length)];
  circle.style.borderColor = color;

  // adds animation
  circle.style.transition = "all 0.5s linear 0.1s";

  circle.style.left = circle.offsetLeft - 20 + 'px';
  circle.style.top = circle.offsetTop - 20 + 'px';

  circle.style.width = "50px";
  circle.style.height = "50px";
  circle.style.borderWidth = "2px";
  circle.style.opacity = 0;
}

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/Projects" element={<Projects/>} />
      <Route path="/About" element={<About />} />
      <Route path="/Contact" element={<Contact />} />
    </Routes>
  );
}

export default App;
