import React from 'react';
import './Home.scss';
import NavbarHome from '../Navbar/NavbarHome/NavbarHome';
import AboutHome from '../About/AboutHome/AboutHome';
import { Link } from 'react-router-dom';
import CV_Zilic_Ivo from '../../CV/CV_Zilic_Ivo.pdf';
import Navbar from '../Navbar/Navbar';




function Home() {
    return (
            <>
            <div className="home-container">
                    <div className="home">
                                <NavbarHome />
                        <div className="home-img">
                                <div className="home-title">
                                        <h3>Hello, I'm</h3>
                                        <h1>Žilić Ivo</h1>
                                        <h3>Frontend Developer</h3>
                                </div>
                        </div>
                    </div>
                        <AboutHome />
            </div>
            <div className="home-mobile">  
                        <Navbar />
                <div className="home-title-mobile">
                        <div className="home-text-mobile">
                                        <h3>Hello, I'm</h3>
                                        <h1>Žilić Ivo</h1>
                                        <h3>Frontend Developer</h3>
                        </div>
                        <div className="home-mobile-btn">
                                <button className="aboutHome-button">
                                        <a href={CV_Zilic_Ivo} target="_black">Download CV</a>
                                </button>
                                <button className="aboutHome-buttontwo">
                                <Link to={'/contact'}>Hire me</Link>
                                </button>   
                        </div>
                </div>
            </div>
            </>
    )
}

export default Home
