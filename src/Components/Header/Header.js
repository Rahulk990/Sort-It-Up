import React, { useEffect } from 'react'
import { resetColors } from '../Body/buttonDetails';

import './header.scss'

const Header = ({ theme, setTheme }) => {

    const changeTheme = () => {
        if (theme === "light") {
            setTheme("dark");
        } else {
            setTheme("light");
        }
        resetColors();
    }

    return (
        <div className={`header ${(theme === 'dark') ? 'header__theme-Dark' : ''}`}>

            <div className="header__title">

                <img src="./sort.svg" />
                <p>Sort It Up</p>

            </div>

            <div className="header__themeChanger" onClick={changeTheme}>
                <i className="header__themeChanger__indicator"></i>
            </div>

        </div>
    )
}

export default Header
