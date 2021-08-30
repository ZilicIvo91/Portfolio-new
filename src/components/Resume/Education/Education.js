import React from 'react';
import './Education.scss';


export default function Education({ Icon, title, desc, date}) {
    return (
        <div className="education">
            <div>
                {<Icon className="education__icon" />}
            </div>
            <div>
                <h4>{title}</h4>
                <p>{desc}</p>
                <p className="education__date">{date}</p> 
            </div>
        </div>
    )
}
