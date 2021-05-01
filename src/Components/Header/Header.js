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

    useEffect(() => {

        if (theme === "light") {
            document.getElementsByClassName("header")[0].classList.remove("header__theme-Dark");
        } else {
            document.getElementsByClassName("header")[0].classList.add("header__theme-Dark");
        }

    }, [theme])

    return (
        <div className="header">

            <div className="header__title">

                <img src="./sort.svg" />
                <p>Sort It Up</p>

            </div>

            <div className="header__themeChanger" onClick={changeTheme}>
                MicroService
            </div>

        </div>
    )
}

export default Header
