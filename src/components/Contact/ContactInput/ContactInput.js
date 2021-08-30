import React from 'react';
import './ContactInput.scss'


export default function ContactInput() {
    return (
        <form>
            <div className="contactInput">
                <div className="contactInput__name__email">
                    <div className="contactInput__name">
                        <input type="text" placeholder="Name" />
                    </div>
                    <div className="contactInput__email">
                        <input type="text" placeholder="E-mail" />
                    </div>
                </div>
                <div className="contactInput__subject">
                    <input type="text" placeholder="Subject" />
                </div>
                <div className="contactInput__area">
                    <textarea placeholder="Message" />
                </div>
                <div className="contactInput__button">
                    <input type="submit" value="Send Message" />
                </div>    
            </div>
        </form>
    )
}
