import React from 'react';
import './Resume.scss'
import { FaUserGraduate } from 'react-icons/fa';
import { AiOutlineArrowRight } from 'react-icons/ai';
import { FaCode } from 'react-icons/fa';
import { FaBriefcase } from 'react-icons/fa';
import { RiToolsFill } from 'react-icons/ri';
import Navbar from '../Navbar/Navbar';
import Education from './Education/Education';
import HeaderResume from './HeaderResume/HeaderResume';
import Skill from './Skill/Skill';


function Resume() {
    return (
        <>
        <Navbar />
        <div className="resume-wrapper">
            <h1>Resume</h1>
            <div className="resume-container">
                <div className="resume-title">
                    <div className="resume-header">
                        <HeaderResume Icon={FaUserGraduate} title="Education" />
                    </div>
                    <div className="resume-elements">
                        <Education Icon={AiOutlineArrowRight} title="Frontend Developer" desc="Algebra University College, Zagreb" date="03.2020 - 09.2020" />
                        <Education Icon={AiOutlineArrowRight} title="Project Challeng IT" desc="Education Xamarin, Slavonski Brod" date="03.2019 - 07.2019" />
                        <Education Icon={AiOutlineArrowRight} title="Faculty of Mining, Geology, and Petroleum Engineering" desc="Master's degree, Zagreb" date="2014 - 2017" />
                        <Education Icon={AiOutlineArrowRight} title="Faculty of Mining, Geology, and Petroleum Engineering" desc="Bachelor's degree, Zagreb" date="2010 - 2014" />
                        <Education Icon={AiOutlineArrowRight} title='Gymnasium "Matija Mesić"' desc="Slavonski Brod" date="2006 - 2010" />
                    </div>
                </div>
                
                <div className="resume-title">
                    <div className="resume-header">
                        <HeaderResume Icon={FaBriefcase} title="Expirience" />
                    </div>
                    <div className="resume-elements">
                        <Education Icon={AiOutlineArrowRight} title='Freelancer, Web developer' desc="freelancer.com" date="Dec 2020 - Now" />  
                    </div>
                </div>

                <div className="resume-title">
                    <div className="resume-header">
                        <HeaderResume Icon={FaCode} title="Programing skills" />
                    </div>
                    <div className="resume-elements">
                        <Skill skill="HTML" percentage="90%" />
                        <Skill skill="CSS" percentage="80%" />
                        <Skill skill="JavaScript" percentage="70%" />
                        <Skill skill="React" percentage="70%" />
                        <Skill skill="Git" percentage="80%" />
                        <Skill skill="Responsive Web" percentage="75%" />
                        <Skill skill="Redux" percentage="80%" />
                    </div>
                </div>
                
                <div className="resume-title">
                    <div className="resume-header">
                        <HeaderResume Icon={RiToolsFill} title="Other skills" />
                    </div>
                    <div className="resume-elements">
                        <Skill skill="German" percentage="90%" />
                        <Skill skill="English" percentage="70%" />
                        <Skill skill="Self-organization" percentage="80%" />
                        <Skill skill="Communication" percentage="90%" />
                        <Skill skill="Listening" percentage="90%" />
                        <Skill skill="Discipline" percentage="80%" />
                        <Skill skill="Compromise" percentage="90%" />
                        <Skill skill="Listening" percentage="90%" />
                    </div>
                </div>
            </div>
        </div>
        </>
    )
}

export default Resume