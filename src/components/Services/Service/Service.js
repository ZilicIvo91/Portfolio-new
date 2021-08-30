import React from 'react';
import './Service.scss';

export default function Service({ Icon, title, desc }) {
    return (
        <div className="service">
            {<Icon className="service__icon" />}
            <h2 className="service__text">{title}</h2>
            <p>{desc}</p>
        </div>
    )
}
