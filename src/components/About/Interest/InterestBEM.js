import React from 'react';
import './InterestBEM.scss';

export default function InterestBEM({ Icon, title, desc}) {
    return (
        <div className={`interest ${desc && 'interest--extended'}`}>
            <div className="interest__inner">
                <div className="interest__holder interest__holder--left">
                    <div className="interest__image-wrapper">
                        <Icon className={`interest__icon `} />
                    </div>
                </div>
                <div className="interest__holder interest__holder--right">
                    <div className="interest__content">
                        <p className="interest__text interest__text--title">{title}</p>
                        {desc && <p className="interest__text interest__text--description">{desc}</p>}   
                    </div>
                </div>
            </div>     
        </div>
    )
}
