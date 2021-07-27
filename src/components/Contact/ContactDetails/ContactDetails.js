import React from 'react';
import './ContactDetails.scss';


export default function ContactDetails({ Icon, title, desc}) {
    return (
        <div className="contactDetails-container">
            {<Icon className="contactDetails-icon" />}
            <div className="contactDetails-details">
                <p>{title}</p>
                <p>{desc}</p>
            </div>
    </div>
    )
}
