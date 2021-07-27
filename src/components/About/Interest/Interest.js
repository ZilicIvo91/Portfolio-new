import React from 'react';
import './Interest.scss';


export default function Interest({ Icon, title}) {
    return (
        <div className="interest">
            <div className="interestIcon">
                <p>{<Icon className="interestIcon-icon" />}</p>
            </div>
            <div className="interestIcon-title">
                <p>{title}</p>
            </div>
        </div>
    )
}
