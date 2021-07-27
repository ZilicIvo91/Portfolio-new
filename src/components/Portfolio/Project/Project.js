import React from 'react';
import './Project.scss'


export default function Project({ link, img, alt, title, desc}) {
    return (
        <div className="project">
            <div className="project-img">
                <a href={link} target="_blank" rel="noopener noreferrer">
                    <img src={img} alt={alt} /> 
                </a>
            </div>
            <div className="project-link">
                <a href={link} target="_blank" rel="noopener noreferrer">
                    <h6>{link}</h6>
                </a>
            </div>
            <div className="project-text">
                <h4>{title}</h4> 
                <p>{desc}</p>
            </div>
    </div>
    )
}
