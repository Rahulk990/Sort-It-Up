import React from 'react'

import './button.scss'

const Button = ({ name, onClick }) => {
    return (
        <div className="button" onClick={onClick}>
            {name}
        </div>
    )
}

export default Button
