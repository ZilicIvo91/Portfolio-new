import React, { useState } from 'react';
import './Navbar.scss';
import { Links } from '../../helpers/Links';

import { FaFacebook } from 'react-icons/fa';
import { AiFillLinkedin } from 'react-icons/ai';
import { AiFillGithub } from 'react-icons/ai';
import { AiOutlineInstagram } from 'react-icons/ai';
import { FaTimes } from 'react-icons/fa';
import { FaBars } from 'react-icons/fa';

import { Link } from 'react-router-dom';

function Navbar() {
    const [clicked, setClicked] = useState(false);
    return (
        <>
        <button className='menu-icon' onClick={() => setClicked(!clicked)}>
                {clicked ? <FaBars /> : <FaTimes />}
            </button>
            <div  className={clicked ? "navbar-sideBar none" : "navbar-sideBar" }>
                <h1>Žilić</h1>
                {Links.map((link) => {
                    return(
                    <div key={link.id} className="navbar-links">
                        <Link to={link.url}>
                            <div className="navbar-link">
                                <p>{link.icon}</p>
                            </div>
                            <div className="navbar-link">
                                <p>{link.title}</p>
                            </div>
                        </Link>
                    </div>  
                    )  
                })}
                <div className="navbar-footer">
                    <div className="navbar-social">
                        <a href="https://www.facebook.com/ivo.zilic/" target="_black"><FaFacebook className="icon" /></a>
                        <a href="https://www.linkedin.com/in/ivo-žilić-ab8879136/" target="_black"><AiFillLinkedin className="icon" /></a>
                        <a href="https://github.com/ZilicIvo91" target="_black"><AiFillGithub className="icon" /></a>
                        <a href="https://www.instagram.com/ivoziliiic/" target="_black"><AiOutlineInstagram className="icon" /></a>
                    </div>
                    <div className="navbar-copy">
                        <p>@2021 Zilic</p>  
                    </div>
                </div>
            </div>
        </>
    )
}

export default Navbar
