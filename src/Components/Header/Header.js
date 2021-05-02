import React, { useEffect } from 'react'

import './header.scss'

const Header = ({ theme, setTheme }) => {

    const changeTheme = () => {
        if (theme === "light") {
            setTheme("dark");
        } else {
            setTheme("light");
        }
    }

    return (
        <div className={`header ${(theme === 'dark') ? 'header__theme-Dark' : ''}`}>

            <div className="header__title">

                <img src="./sort.svg" />
                <p>Sort It Up</p>

            </div>

            <div className="header__themeChanger" onClick={changeTheme}>
                Change
            </div>

        </div>
    )
}

export default Header
