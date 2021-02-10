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
                        <h5>Description:</h5>
                        <p>nfodsncdoscjn</p>            
                    </div>

                    <div className="portfolio-project">
                        <a href="https://pokemon-application.netlify.app/" target="_blank" rel="noopener noreferrer">
                            <img src={Poke_Ball} alt="PokeBall"/> 
                        </a>
                        <h5>Description:</h5>
                        <p>nfodsncdoscjn</p>   
                    </div>

                    <div className="portfolio-project">
                        <a href="https://chat-zilic.netlify.app/" target="_blank" rel="noopener noreferrer">
                            <img src={chat} alt="chat"/> 
                        </a>
                        <h5>Description:</h5>
                        <p>nfodsncdoscjn</p>        
                    </div>
                </div>
            </div>
        </>
    )
}

export default Portfolio
