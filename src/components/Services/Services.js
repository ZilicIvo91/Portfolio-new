import React from 'react';
import Navbar from '../Navbar/Navbar';
import './Services.scss';
import { FaCode } from 'react-icons/fa';
import { RiProfileLine } from 'react-icons/ri';
import { FaProjectDiagram } from 'react-icons/fa';
import { RiTeamLine } from 'react-icons/ri';
import { BsClipboardData } from 'react-icons/bs';
import Service from './Service/Service';


function Services() {
    return (
        <>
            <Navbar />
            <div className="services">
                <h1>Services</h1>
                <div className="services__boxes">
                    <div className="services__row">
                        <Service Icon={FaCode} title="Web Development" desc="Building a website is an exciting project—one that takes great minds and great vision to accomplish. That’s why my process begins with yours vision and ideas." />
                        <Service Icon={RiProfileLine} title="Landing Page" desc="Providing full service such as design, development, search engine optimization etc. is extreamely important to provide quality service. I like to create attractive landing page with lots of detatils." />
                    </div>
                    <div className="services__row">
                        <Service Icon={FaProjectDiagram} title="Small Business Solutions" desc="I can help you create web site with variety of services, and best of all it will reach to your costumers." />
                        <Service Icon={RiTeamLine} title="Team Cooperation" desc="I am highly motivated to take part in the new team, bring value to company and product, and to get more experience and widen my knowledge in programming." />
                    </div>
                    <div className="services__row">        
                        <Service Icon={BsClipboardData} title="Data collecting" desc="I can help you manage and extract relevant information from raw data of any size, in a timely and cost-effective manner." />
                    </div>
                </div>
            </div>      
        </>
    )
}

export default Services
