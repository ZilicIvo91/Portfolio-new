import React from 'react';
import './AboutHome.scss';

import { GiMusicalScore } from 'react-icons/gi';
import { GiCookingPot } from 'react-icons/gi';
import { BiCameraMovie, BiFootball } from 'react-icons/bi';
import { GiBookshelf } from 'react-icons/gi';
import { AiOutlineProfile } from 'react-icons/ai';
import { RiToolsFill } from 'react-icons/ri';
import { MdWork } from 'react-icons/md';

import CV_Zilic_Ivo from '../../../CV/CV_Zilic_Ivo.pdf';
import picture from '../../../images/picture.jpg'
import { Link } from 'react-router-dom';
import MyJourney from '../MyJourney/MyJourney';
import Interest from '../Interest/Interest';




function AboutHome() {
    return (
            <div className="aboutHome-container">
                <h1 className="aboutHome-header">About Me</h1>
                <div className="aboutHome-profile">
                    <div className="aboutHome-img">
                        <img src={picture} alt="foto" />
                    </div>
                    <div className="aboutHome-text">
                        <h1>Žilić Ivo</h1>
                        <h3>Frontend developer</h3>
                        <p>I can call myself a Junior Front-End Developer. I have a master's degree in petroleum engineering. After failing to find a job in my profession, I enrolled in the Algebra College program for Frontend developers. I learn quickly, adopt new technologies, and I'm always ready to improve my knowledge.</p>
                        <p>I am highly motivated to take part in the new team, bring value to company and product, and to get more experience and widen my knowledge in programming.</p>
                        <div className="aboutHome-buttons">
                            <button className="aboutHome-btnFirst">
                            <a href={CV_Zilic_Ivo} target="_black">Download CV</a>
                        </button>
                            <button className="aboutHome-buttontwo">
                            <Link to={'/contact'}>Hire me</Link>
                        </button>
                        </div>
                    </div>
                </div>

                <div className="aboutHome-profile">
                    <div className="myJourney-container">
                        <h2>My Journey</h2>
                            <div className="aboutHome-myJourneys">
                                <MyJourney Icon={AiOutlineProfile} title="3 Projects" desc="Complited" />
                                <MyJourney Icon={MdWork} title="3 FreeLance" desc="Avaliable" />
                                <MyJourney Icon={RiToolsFill} title="3 Support" desc="24/7" />                               
                            </div>
                        </div>
                        <div>
                            <h2>My Interests</h2>
                            <div className="aboutHome-interests">
                                <Interest Icon={GiMusicalScore} title="Music" />
                                <Interest Icon={BiFootball} title="Sport" />
                                <Interest Icon={GiCookingPot} title="Cooking" />
                                <Interest Icon={BiCameraMovie} title="Movie" />
                                <Interest Icon={GiBookshelf} title="Books" />
                            </div>
                    </div>
                </div>
        </div>
    )
}

export default AboutHome

