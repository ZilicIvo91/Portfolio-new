import React from 'react';
import './ContactDetails.scss';


export default function ContactDetails({ Icon, title, desc}) {
    return (
        <div className="contactDetails">
            {<Icon className="contactDetails__icon" />}
            <div className="contactDetails__details">
                <p>{title}</p>
                <p>{desc}</p>
            </div>
    </div>
    )
}
