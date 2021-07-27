import React from 'react'
import './Portfolio.scss'
import Navbar from '../Navbar/Navbar';
import Poke_Ball from '../../images/Poke_Ball.png';
import chat from '../../images/chat.jpg';
import tokic from '../../images/tokic.png';
import Project from './Project/Project';


function Portfolio() {
    return (
        <>
           <Navbar />
           <div className="portfolio-contrainer">
                <h1 className="header">Some Of Projects</h1>
                <div className="portfolio-projects">        
                    <Project link="https://servisapp.netlify.app/" img={tokic} alt="Tokic" title="Car service" desc="Choose a brand, service and if you have the code 'Tokić123' you get a 30% discount." />
                    <Project link="https://pokemon-application.netlify.app/" img={Poke_Ball} alt="PokeBall" title="Pokemon application" desc="The application have search box, filter type pokemon and pokemon details." />
                    <Project link="https://chat-zilic.netlify.app/" img={chat} alt="Chat" title="Chat application" desc="Choise your username and avatar." />
                </div>
            </div>
        </>
    )
}

export default Portfolio
