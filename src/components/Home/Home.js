import React from 'react';
import './Home.scss';
import NavbarHome from '../Navbar/NavbarHome/NavbarHome';
import AboutHome from '../About/AboutHome/AboutHome';



function Home() {
    return (
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
                    <div className="home-about">
                        <AboutHome />
                    </div>
            </div>
    )
}

export default Home
