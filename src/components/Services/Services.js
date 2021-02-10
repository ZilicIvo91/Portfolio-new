import React from 'react';
import Navbar from '../Navbar/Navbar';
import './Services.scss';
import { FaCode } from 'react-icons/fa';
import { RiProfileLine } from 'react-icons/ri';
import { FaProjectDiagram } from 'react-icons/fa';
import { RiTeamLine } from 'react-icons/ri';
import { BsClipboardData } from 'react-icons/bs';


function Services() {
    return (
        <>
            <Navbar />
            <div className="services-container">
                <h1>Services</h1>
                <div className="services-boxes" >
                    <div className="services-box">
                        <FaCode className="services-icon" />
                        <h2>Web Development</h2>
                        <p>Building a website is an exciting project—one that takes great minds and great vision to accomplish. That’s why my process begins with yours vision and ideas.</p>
                    </div>
                    <div className="services-box">
                        <RiProfileLine className="services-icon" />
                        <h2>Landing Page</h2>
                        <p>Providing full service such as design, development, search engine optimization etc. is extreamely important to provide quality service. I like to create attractive landing page with lots of detatils.</p>
                    </div>
                    <div className="services-box">
                        <FaProjectDiagram className="services-icon" />
                        <h2>Small Business Solutions</h2>
                        <p>I can help you create web site with variety of services, and best of all it will reach to your costumers.</p>
                    </div>
                    <div className="services-box">
                        <RiTeamLine className="services-icon" />
                        <h2>Team Cooperation</h2>
                        <p>I am highly motivated to take part in the new team, bring value to company and product, and to get more experience and widen my knowledge in programming.</p>
                    </div>
                    <div className="services-box">
                        <BsClipboardData className="services-icon" />
                        <h2>Data collecting</h2>
                        <p>I can help you manage and extract relevant information from raw data of any size, in a timely and cost-effective manner.</p>
                    </div>
                </div>
            </div>      
        </>
    )
}

export default Services
