import React from 'react';
import './HeaderResume.scss';


export default function HeaderResume({ Icon, title }) {
    return (
        <div className="headerResume-header">
            <h2>{<Icon className="headerResume-icon" />}</h2>
            <h2>{title}</h2>
        </div>
    )
}
