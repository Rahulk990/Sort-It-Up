import React from 'react'

import './button.scss'

const Button = ({ name, reset, onClick, theme }) => {
    return (
        <button className={`button ${reset ? 'button__reset' : ''}`} onClick={onClick}>
            {name}
        </button >
    )
}

export default Button
