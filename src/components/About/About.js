import React from 'react';
import './About.scss';
import picture from '../../images/picture.jpg'
import CV_Zilic_Ivo from '../../CV/CV_Zilic_Ivo.pdf';
import Navbar from '../Navbar/Navbar';
import { Link } from 'react-router-dom';
import Interest from './Interest/Interest';
import { interest } from '../../service/interest';
import { Journey } from '../../service/Journey';


function About() {
    return (
        <>
        <Navbar />
        <div className="about">
            <div className="about__inner">
                <div className="about__header">
                <h1>About Me</h1>
                </div>
                <div className="about__holder">
                    <div className="about__holder--left">
                        <div className="about__image-wrapper">
                            <img src={picture} alt="foto" />
                        </div>
                    </div>
                    <div className="about__holder--right">

                    <div className="about__text">
                        <h1 className="about__text--header">Žilić Ivo</h1>
                        <h3>Frontend developer</h3>
                        <p>I can call myself a Junior Front-End Developer. I have a master's degree in petroleum engineering. After failing to find a job in my profession, I enrolled in the Algebra College program for Frontend developers. I learn quickly, adopt new technologies, and I'm always ready to improve my knowledge.</p>
                        <p>In every team that I was working, I have found a way to contribute and to bring great value into the team and a project.</p>
                        <p>I am highly motivated to take part in the new team, bring value to company and product, and to get more experience and widen my knowledge in programming.</p>
                        
                        <div className="about__buttons">
                            <div className="about__buttons about__button">
                                <a href={CV_Zilic_Ivo} target="_black">Download CV</a>
                            </div>
                            <div className="about__buttons about__button about__button--second">
                                <Link to={'/contact'}>Hire me</Link>
                            </div>
                        </div>
                    </div>
                    </div>

                </div>

            </div>
            <div className="about__icons">
                    <div className="journey__holder">
                        <h2>My Journey</h2>
                            <div className="journey__icons">
                            {Journey.map((journey) => {
                                    return(
                                        <div key={journey.id}>
                                            <Interest Icon={journey.icon} title={journey.title} desc={journey.desc} />
                                        </div>
                                    )
                                })}

                            
                            </div>
                        </div>
                        <div className="interest__holder">
                            <h2 className="interest__header">My Interests</h2>
                            <div className="interest__icons">
                                {interest.map((interest) => {
                                    return(
                                        <div key={interest.id}>
                                            <Interest Icon={interest.icon} title={interest.title} />
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
