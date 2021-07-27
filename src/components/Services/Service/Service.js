import React from 'react';
import './Service.scss';

export default function Service({ Icon, title, desc }) {
    return (
        <div className="service-box">
            {<Icon className="service-icon" />}
            <h2>{title}</h2>
            <p>{desc}</p>
        </div>
    )
}
