import React from 'react';
import './About.scss';
import picture from '../../images/picture.jpg'
import { GiMusicalScore } from 'react-icons/gi';
import { FcSportsMode } from 'react-icons/fc';
import { GiCookingPot } from 'react-icons/gi';
import { BiCameraMovie } from 'react-icons/bi';
import { GiBookshelf } from 'react-icons/gi';
import CV_Zilic_Ivo from '../../CV/CV_Zilic_Ivo.pdf';
import Navbar from '../Navbar/Navbar';
import { Link } from 'react-router-dom';
import { AiOutlineProfile } from 'react-icons/ai';
import { RiToolsFill } from 'react-icons/ri';
import { MdWork } from 'react-icons/md';



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
                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
                <button><a href={CV_Zilic_Ivo} target="_black">Download CV</a></button>
                <button><Link to={'/contact'}>Hire me</Link></button>
                </div>

            </div>
            <div className="about-profile">

                    <div className="myJourney-container">
                        <h2>My Journey</h2>
                            <div className="about-myJourneys">
                                <div className="about-myJourney">
                                    <div>
                                        <p><AiOutlineProfile className="myJourney-icon" /></p>
                                    </div>
                                    <div className="myJourney-text">
                                        <p>3 Projects</p>
                                        <p>Complited</p>
                                    </div>    
                                </div>
                                <div className="about-myJourney">
                                    <div>
                                        <p><MdWork className="myJourney-icon" /></p>
                                    </div>
                                    <div className="myJourney-text">
                                        <p>FreeLance</p>
                                        <p>Avaliable</p>
                                    </div>
                                </div>
                                <div className="about-myJourney">    
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
                            <div className="about-interests">
                                <div className="about-interest">
                                    <p><GiMusicalScore className="interest-icon" /></p>
                                    <p>Music</p>
                                </div>
                                <div className="about-interest">
                                    <p><FcSportsMode className="interest-icon" /></p>
                                    <p>Sport</p>
                                </div>
                                <div className="about-interest">
                                    <p><GiCookingPot className="interest-icon" /></p>
                                    <p>Cooking</p>
                                </div>
                                <div className="about-interest">
                                    <p><BiCameraMovie className="interest-icon" /></p>
                                    <p>Movie</p>
                                </div>
                                <div className="about-interest">
                                    <p><GiBookshelf className="interest-icon" /></p>
                                    <p>Books</p>
                                </div>
                            </div>
                    </div>
                </div>
                {/* <div>
                <h1>My Interests</h1>
                <div className="about-icons">
                    <p><GiMusicalScore />  Music</p>
                    <p><FcSportsMode />  Sport</p>
                    <p><GiCookingPot />  Cooking</p>
                    <p><BiCameraMovie />  Movie</p>
                    <p><GiBookshelf /> Books</p>
                </div>
                </div> */}
        </div>
        </>
    )
}

export default About
