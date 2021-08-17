import React from 'react';
import './About.scss';
import picture from '../../images/picture.jpg'
import CV_Zilic_Ivo from '../../CV/CV_Zilic_Ivo.pdf';
import Navbar from '../Navbar/Navbar';
import { Link } from 'react-router-dom';
import InterestBEM from './Interest/InterestBEM';
import { Interest } from '../../service/Interest';
import { Journey } from '../../service/Journey';


function About() {
    return (
        <>
        <Navbar />
        <div className="about-container">
            <h1>About Me</h1>
            <div className="about-profile">
                <div className="about-img">
                    <img src={picture} alt="foto" />
                </div>

                <div className="about-text">
                    <h1>Žilić Ivo</h1>
                    <h3>Frontend developer</h3>
                    <p>I can call myself a Junior Front-End Developer. I have a master's degree in petroleum engineering. After failing to find a job in my profession, I enrolled in the Algebra College program for Frontend developers. I learn quickly, adopt new technologies, and I'm always ready to improve my knowledge.</p>
                    <p>In every team that I was working, I have found a way to contribute and to bring great value into the team and a project.</p>
                    <p>I am highly motivated to take part in the new team, bring value to company and product, and to get more experience and widen my knowledge in programming.</p>
                    
                    <div className="about-btns">
                        <button className="about-button"><a href={CV_Zilic_Ivo} target="_black">Download CV</a></button>
                        <button className="about-buttontwo"><Link to={'/contact'}>Hire me</Link></button>
                    </div>
                </div>

            </div>
            <div className="about-profile">
                    <div className="myJourney-container">
                        <h2>My Journey</h2>
                            <div className="about-myJourneys">
                            {Journey.map((journey) => {
                                    return(
                                        <div key={journey.id}>
                                            <InterestBEM Icon={journey.icon} title={journey.title} desc={journey.desc} />
                                        </div>
                                    )
                                })}

                            
                            </div>
                        </div>
                        <div className="interest-container">
                            <h2 className="interest-header">My Interests</h2>
                            <div className="about-interests">
                                {Interest.map((interest) => {
                                    return(
                                        <div key={interest.id}>
                                            <InterestBEM Icon={interest.icon} title={interest.title} />
                                        </div>
                                    )
                                })}
                            </div>
                    </div>
                </div>
        </div>
        </>
    )
}

export default About
