import React, { useState, useEffect } from 'react';
import './ThemeChanger.scss'

import { FiSun } from 'react-icons/fi';
import { BsMoon } from 'react-icons/bs';

function ThemeChanger() {
    const [themeChanger, setThemeChanger] = useState(false);

   useEffect(() => {
       const getTheme = localStorage.getItem('Theme');
       if (getTheme === 'dark'){
           setThemeChanger(true);
       }
   }, []);

   useEffect(() => {
       if (themeChanger){
           localStorage.setItem('Theme', 'dark');
           document.body.classList.add('dark-mode');
       } else {
           localStorage.setItem('Theme', 'light');
           document.body.classList.remove('dark-mode');
       }
   }, [themeChanger]);


    return (
        <>
            <button onClick={() => setThemeChanger(!themeChanger)} className="themeChanger">
            {themeChanger 
                ? <div><FiSun className="themeChanger-icon" /></div> 
                : <div><BsMoon className="themeChanger-icon" /></div> 
            }    
            </button>
        </>
    )
}

export default ThemeChanger
