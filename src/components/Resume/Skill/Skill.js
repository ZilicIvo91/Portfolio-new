import React from 'react';
import './Skill.scss';


export default function Skill({ skill, percentage }) {
    const mystyle = {
        width: percentage,
    };

    return (
        <div className="skill-el-box">
            <div className="skill-list-element-name">
                <h4>{skill}</h4>
            </div>
            <div className="skill-list-element-bar">
                <div className="skill-bar" style={mystyle}></div>
            </div>
        </div>
    )
}
