import React from 'react';
import './Skill.scss';


export default function Skill({ skill, percentage }) {
    const mystyle = {
        width: percentage,
    };

    return (
        <div className="skill">
            <div className="skill__list-element-name">
                <h4>{skill}</h4>
            </div>
            <div className="skill__list-element-bar">
                <div className="skill__bar" style={mystyle}></div>
            </div>
        </div>
    )
}
