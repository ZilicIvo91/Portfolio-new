import React from 'react';
import './Resume.scss'
import { FaUserGraduate } from 'react-icons/fa';
import { AiOutlineArrowRight } from 'react-icons/ai';
import { FaCode } from 'react-icons/fa';
import { FaBriefcase } from 'react-icons/fa';
import { RiToolsFill } from 'react-icons/ri';
import Navbar from '../Navbar/Navbar';


function Resume() {
    return (
        <>
        <Navbar />
        <div className="resume-wrapper">
            <h1>Resume</h1>
            <div className="resume-container">

            <div className="resume-education">
                <div className="resume-header">
                    <h2><FaUserGraduate className="icon-header" /></h2>
                    <h2>Education</h2>
                </div>

                <div className="resume-header">
                    <div>
                        <AiOutlineArrowRight className="icon" /> 
                    </div>
                    <div>
                        <h4>Frontend Developer</h4>
                        <p>Algebra University College, Zagreb</p>
                        <p className="date">03.2020 - 09.2020</p> 
                    </div>
                </div>

                <div className="resume-header">
                    <div>
                        <AiOutlineArrowRight className="icon" /> 
                    </div>
                    <div>
                        <h4>Project Challeng IT</h4>
                        <p>Education Xamarin, Slavonski Brod</p>
                        <p className="date">03.2019 - 07.2019</p> 
                    </div>
                </div>

                <div className="resume-header">
                    <div>
                        <AiOutlineArrowRight className="icon" /> 
                    </div>
                    <div>
                        <h4>Faculty of Mining, Geology, and Petroleum Engineering</h4>
                        <p>Master's degree, Zagreb</p>
                        <p className="date">2014 - 2017</p> 
                    </div>
                </div>

                <div className="resume-header">
                    <div>
                        <AiOutlineArrowRight className="icon" /> 
                    </div>
                    <div>
                        <h4>Faculty of Mining, Geology, and Petroleum Engineering</h4>
                        <p>Bachelor's degree, Zagreb</p>
                        <p className="date">2010 - 2014</p> 
                    </div>
                </div>

                <div className="resume-header">
                    <div>
                        <AiOutlineArrowRight className="icon" /> 
                    </div>
                    <div>
                        <h4>Gymnasium "Matija Mesić"</h4> 
                        <p>Slavonski Brod</p>
                        <p className="date">2006 - 2010</p> 
                    </div>
                </div>
            </div>
            
            <div className="resume-title">
                <div className="resume-header">
                    <h2><FaBriefcase className="icon-header" /></h2>
                    <h2>Expirience</h2>
                </div>
                <div className="resume-header">
                    <div>
                        <AiOutlineArrowRight className="icon" /> 
                    </div>
                    <div>
                        <h4>Freelancer, Web developer</h4> 
                        <p>freelancer.com</p>
                        <p className="date">Dec 2020 - Now</p> 
                    </div>
                </div>    
            </div>

            <div className="resume-title">

            <div className="resume-header">
                <h2><FaCode className="icon-header" /></h2>
                <h2>Programing Skills</h2>
            </div>
                <div className="skill-el-box">
                    <div className="skill-list-element-name">
                        <h5>HTML</h5>
                    </div>
                    <div className="skill-list-element-bar">
                        <div className="skill-bar-html"></div>
                    </div>
                </div>
                <div className="skill-el-box">
                    <div className="skill-list-element-name">
                        <h5>CSS</h5>
                    </div>
                    <div className="skill-list-element-bar">
                        <div className="skill-bar-css"></div>
                    </div>
                </div>
                <div className="skill-el-box">
                    <div className="skill-list-element-name">
                        <h5>JavaScript</h5>
                    </div>
                    <div className="skill-list-element-bar">
                        <div className="skill-bar-javaScript"></div>
                    </div>
                </div>
                <div className="skill-el-box">
                    <div className="skill-list-element-name">
                        <h5>React</h5>
                    </div>
                    <div className="skill-list-element-bar">
                        <div className="skill-bar-react"></div>
                    </div>
                </div>
            </div>
            

            <div className="resume-title">
            <div className="resume-header">
                <h2><RiToolsFill className="icon-header" /></h2>
                <h2>Other Skills</h2>
            </div>
            

            
                <div className="skill-el-box">
                    <div className="skill-list-element-name">
                        <h5>Git</h5>
                    </div>
                    <div className="skill-list-element-bar">
                        <div className="skill-bar-git"></div>
                    </div>
                </div>
                <div className="skill-el-box">
                    <div className="skill-list-element-name">
                        <h5>Responsive Web</h5>
                    </div>
                    <div className="skill-list-element-bar">
                        <div className="skill-bar-web"></div>
                    </div>
                </div>
                <div className="skill-el-box">
                    <div className="skill-list-element-name">
                        <h5>Redux</h5>
                    </div>
                    <div className="skill-list-element-bar">
                        <div className="skill-bar-redux"></div>
                    </div>
                </div>
                <div className="skill-el-box">
                    <div className="skill-list-element-name">
                        <h5>German</h5>
                    </div>
                    <div className="skill-list-element-bar">
                        <div className="skill-bar-german"></div>
                    </div>
                </div>
                <div className="skill-el-box">
                    <div className="skill-list-element-name">
                        <h5>English</h5>
                    </div>
                    <div className="skill-list-element-bar">
                        <div className="skill-bar-english"></div>
                    </div>
                </div>
                <div className="skill-el-box">
                    <div className="skill-list-element-name">
                        <h5>Self-organization</h5>
                    </div>
                    <div className="skill-list-element-bar">
                        <div className="skill-bar-communication"></div>
                    </div>
                </div>
                <div className="skill-el-box">
                    <div className="skill-list-element-name">
                        <h5>Communication</h5>
                    </div>
                    <div className="skill-list-element-bar">
                        <div className="skill-bar-communication"></div>
                    </div>
                </div>
                <div className="skill-el-box">
                    <div className="skill-list-element-name">
                        <h5>Listening</h5>
                    </div>
                    <div className="skill-list-element-bar">
                        <div className="skill-bar-listening"></div>
                    </div>
                </div>
                <div className="skill-el-box">
                    <div className="skill-list-element-name">
                        <h5>Discipline</h5>
                    </div>
                    <div className="skill-list-element-bar">
                        <div className="skill-bar-discipline"></div>
                    </div>
                </div>
                <div className="skill-el-box">
                    <div className="skill-list-element-name">
                        <h5>Compromise</h5>
                    </div>
                    <div className="skill-list-element-bar">
                        <div className="skill-bar-compromise"></div>
                    </div>
                </div>
            </div>
            </div>
        </div>
        </>
    )
}

export default Resume
