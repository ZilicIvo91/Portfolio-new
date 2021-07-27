import React from 'react';
import './Contact.scss';

import { MdCall } from 'react-icons/md';
import { HiOutlineMailOpen } from 'react-icons/hi';
import { IoLocationSharp } from 'react-icons/io5';
import Navbar from '../Navbar/Navbar';
import ContactDetails from './ContactDetails/ContactDetails';
import ContactInput from './ContactInput/ContactInput';


function Contact() {
    return (
        <>
        <Navbar />
        <div className="contact-container">
            <h1>Contact</h1>
            <div className="contact">  
                <ContactDetails Icon={HiOutlineMailOpen} title="E-mail" desc="ivozilic@hotmail.com" />
                <ContactDetails Icon={MdCall} title="Call Me" desc="+385 97 769 1991" />
                <ContactDetails Icon={IoLocationSharp} title="Location" desc="Zagreb, Croatia" />
            </div>

            <div className="contact-inputs">
                <h1>Get In Touch</h1>
                <ContactInput />
            </div>
        </div>
        </>
    )
}

export default Contact
