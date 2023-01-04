import "./WorkCard.css";

import React from 'react'

import { NavLink } from "react-router-dom";

const WorkCard = (props) => {
    return (

        <div className="project-card" style = {{'--i': props.idx}}>
            <img src={props.imgsrc} alt="Pro1" />
            <h2 className="project-title"> {props.title} </h2>
            <div className="pro-details">
                <p> {props.text} </p>
            </div>
            <div className="pro-btns">
                <NavLink to={props.view_url} className="btn"> View </NavLink>
            </div>
        </div>

    )
}

export default WorkCard