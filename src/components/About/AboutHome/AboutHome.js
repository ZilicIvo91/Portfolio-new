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
                        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
                        <button>
                            <a href={CV_Zilic_Ivo} target="_black">Download CV</a>
                        </button>
                        <button>
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

