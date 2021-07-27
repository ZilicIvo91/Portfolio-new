import React from 'react';
import './ContactInput.scss'


export default function ContactInput() {
    return (
        <form>
            <div className="contactInput-input">
                <div className="contactInput-name-email">
                    <div className="contactInput-name">
                        <input type="text" placeholder="Name" />
                    </div>
                    <div className="contactInput-email">
                        <input type="text" placeholder="E-mail" />
                    </div>
                </div>
                <div className="contactInput-subject">
                    <input type="text" placeholder="Subject" />
                </div>
                <div className="contactInput-area">
                    <textarea placeholder="Message" />
                </div>
                <div className="contactInput-button">
                    <input type="submit" value="Send Message" />
                </div>    
            </div>
        </form>
    )
}
