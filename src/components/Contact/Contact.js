import React from 'react';
import './Contact.scss';

import { MdCall } from 'react-icons/md';
import { HiOutlineMailOpen } from 'react-icons/hi';
import { IoLocationSharp } from 'react-icons/io5';
import Navbar from '../Navbar/Navbar';


function Contact() {
    return (
        <>
        <Navbar />
        <div className="contact-container">
            <h1>Contact</h1>
            <div className="contact">
                <div className="contact-call">
                    <MdCall className="contact-icon" />
                    <div className="contact-details">
                        <p>Call Me</p>
                        <p>+385 97 769 1991</p>
                    </div>
                </div>

                <div className="contact-call">
                    <HiOutlineMailOpen className="contact-icon" />
                    <div className="contact-details">
                        <p>E-mail</p>
                        <p>ivozilic@hotmail.com</p>
                    </div>
                </div>

                <div className="contact-call">
                    <IoLocationSharp className="contact-icon" />
                    <div className="contact-details">
                        <p>Location</p>
                        <p>Zagreb, Croatia</p>
                    </div>
                </div>
            </div>

            <div className="contact-inputs">
                <h1>Get In Touch</h1>
                <form>
                    <div className="contact-name-email">
                        <input type="text" placeholder="Name" />
                        <input type="text" placeholder="E-mail" />
                    </div>
                    <div className="contact-subject">
                        <input type="text" placeholder="Subject" />
                    </div>
                    <div className="contact-area">
                        <textarea placeholder="Message" />
                    </div>
                        <input type="submit" value="Send Message" />
                </form>
            </div>
        </div>
        </>
    )
}

export default Contact
