import React, { useEffect } from 'react'

import './footer.scss'

const Footer = ({ theme }) => {

    useEffect(() => {

        if (theme === "light") {
            document.getElementsByClassName("footer")[0].classList.remove("footer__theme-Dark");
        } else {
            document.getElementsByClassName("footer")[0].classList.add("footer__theme-Dark");
        }

    }, [theme])

    return (
        <div className="footer">
            <p>Sort It Up | Copyright © {new Date().getFullYear()}</p>
        </div>
    )
}

export default Footer
