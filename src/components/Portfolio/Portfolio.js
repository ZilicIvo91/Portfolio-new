import React from 'react'
import './Portfolio.scss'
import Navbar from '../Navbar/Navbar';
import Poke_Ball from '../../images/Poke_Ball.png';
import chat from '../../images/chat.jpg';
import tokic from '../../images/tokic.png';


function Portfolio() {
    return (
        <>
           <Navbar />
           <div className="portfolio-contrainer">
                <h2 className="header">Some Of Projects</h2>
                <div className="portfolio-projects">        
                    <div className="portfolio-project">
                        <a href="https://servisapp.netlify.app/" target="_blank" rel="noopener noreferrer">
                            <img src={tokic} alt="Tokic"/> 
                        </a>
                        <h5>Description: Car service</h5>
                        <p>Choose a brand, service and if you have the code "Tokić123" you get a 30% discount.</p>          
                        <p>App with redux</p>            
                    </div>

                    <div className="portfolio-project">
                        <a href="https://pokemon-application.netlify.app/" target="_blank" rel="noopener noreferrer">
                            <img src={Poke_Ball} alt="PokeBall"/> 
                        </a>
                        <h5>Description: Pokemon application</h5> 
                        <p>The application have search box, filter type pokemon and pokemon details.</p>  
                    </div>

                    <div className="portfolio-project">
                        <a href="https://chat-zilic.netlify.app/" target="_blank" rel="noopener noreferrer">
                            <img src={chat} alt="chat"/> 
                        </a>
                        <h5>Description: Chat application</h5>
                        <p>Choise your username and avatar.</p>        
                    </div>
                </div>
            </div>
        </>
    )
}

export default Portfolio
