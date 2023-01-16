import "./WorkCard.css";

import React from 'react'

import WorkCard from "./WorkCard";
import WorkCardData from "./WorkCardData";

const Work = () => {

    return (
        <div className="work-container">
            <div className="project-container">
                {WorkCardData.map((val, idx) => {
                    return (
                        <WorkCard
                            key={idx}
                            imgsrc={val.imgsrc}
                            title={val.title}
                            text={val.text}
                            github_url={val.github_url}
                            idx = {idx}
                        />
                    )
                }
                )}
            </div>
        </div>
    )
}

export default Work