import React from 'react';
import './AboutHome.scss';
import { GiMusicalScore } from 'react-icons/gi';
import { FcSportsMode } from 'react-icons/fc';
import { GiCookingPot } from 'react-icons/gi';
import { BiCameraMovie } from 'react-icons/bi';
import { GiBookshelf } from 'react-icons/gi';
import { AiOutlineProfile } from 'react-icons/ai';
import { RiToolsFill } from 'react-icons/ri';
import { MdWork } from 'react-icons/md';

import CV_Zilic_Ivo from '../../../CV/CV_Zilic_Ivo.pdf';
import picture from '../../../images/picture.jpg'
import { Link } from 'react-router-dom';




function AboutHome() {
    return (
        <div>
            <div className="aboutHome-container">
                <h1>About Me</h1>
                <div className="aboutHome-profile">
                    <div className="aboutHome-img">
                        <img src={picture} alt="foto" />
                    </div>
                    <div className="aboutHome-text">
                        <h1>Žilić Ivo</h1>
                        <h3>Frontend developer</h3>
                        <p>I can call myself a Junior Front-End Developer. I have a master's degree in petroleum engineering. After failing to find a job in my profession, I enrolled in the Algebra College program for Frontend developers. I learn quickly, adopt new technologies, and I'm always ready to improve my knowledge.</p>
                        <p>In every team that I was working, I have found a way to contribute and to bring great value into the team and a project.</p>
                        <p>I am highly motivated to take part in the new team, bring value to company and product, and to get more experience and widen my knowledge in programming.</p>
                        <button className="aboutHome-button">
                            <a href={CV_Zilic_Ivo} target="_black">Download CV</a>
                        </button>
                        <button className="aboutHome-buttontwo">
                            <Link to={'/contact'}>Hire me</Link>
                        </button>
                    </div>
                </div>

                <div className="aboutHome-profile">

                    <div className="myJourney-container">
                        <h2>My Journey</h2>
                            <div className="aboutHome-myJourneys">
                                <div className="aboutHome-myJourney">
                                    <div>
                                        <p><AiOutlineProfile className="myJourney-icon" /></p>
                                    </div>
                                    <div className="myJourney-text">
                                        <p>3 Projects</p>
                                        <p>Complited</p>
                                    </div>    
                                </div>
                                <div className="aboutHome-myJourney">
                                    <div>
                                        <p><MdWork className="myJourney-icon" /></p>
                                    </div>
                                    <div className="myJourney-text">
                                        <p>FreeLance</p>
                                        <p>Avaliable</p>
                                    </div>
                                </div>
                                <div className="aboutHome-myJourney">    
                                    <div>
                                        <p><RiToolsFill className="myJourney-icon" /></p>
                                    </div>
                                    <div className="myJourney-text">
                                        <p>Support</p>
                                        <p>24/7</p>
                                    </div>
                                </div>
                               
                            </div>
                        </div>
                        <div>
                            <h2>My Interests</h2>
                            <div className="aboutHome-interests">
                                <div className="aboutHome-interest">
                                    <p><GiMusicalScore className="interest-icon" /></p>
                                    <p>Music</p>
                                </div>
                                <div className="aboutHome-interest">
                                    <p><FcSportsMode className="interest-icon" /></p>
                                    <p>Sport</p>
                                </div>
                                <div className="aboutHome-interest">
                                    <p><GiCookingPot className="interest-icon" /></p>
                                    <p>Cooking</p>
                                </div>
                                <div className="aboutHome-interest">
                                    <p><BiCameraMovie className="interest-icon" /></p>
                                    <p>Movie</p>
                                </div>
                                <div className="aboutHome-interest">
                                    <p><GiBookshelf className="interest-icon" /></p>
                                    <p>Books</p>
                                </div>
                            </div>
                    </div>
                </div>
        </div>
        </div>
    )
}

export default AboutHome

