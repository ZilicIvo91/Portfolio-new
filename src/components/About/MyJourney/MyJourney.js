import React from 'react';
import './MyJourney.scss';


export default function MyJourney({ Icon, title, desc }) {
    return (
        <div className="myJourneys">      
            {<p><Icon className="myJourney-icon" /></p>}
            <div className="myJourney-text">
                <p>{title}</p>
                <p>{desc}</p>
            </div>    
        </div>
    )
}
