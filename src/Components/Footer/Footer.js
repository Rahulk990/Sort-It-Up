import React, { useEffect } from 'react'

import './footer.scss'

const Footer = ({ theme }) => {
    return (
        <div className={`footer ${(theme === 'dark') ? 'footer__theme-Dark' : ''}`}>
            <p>Sort It Up | Copyright © {new Date().getFullYear()}</p>
        </div>
    )
}

export default Footer
