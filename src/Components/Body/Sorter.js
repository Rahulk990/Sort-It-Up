import React from 'react'
import './sorter.scss'

const Sorter = ({ theme, array }) => {

    return (
        <div className={`sorter ${(theme === 'dark') ? 'sorter__theme-Dark' : ''}`}>
            {array.map((value, idx) => (
                <div key={idx} className="sorter__arrayBars" style={{ height: `${value}px` }}></div>
            ))}
        </div>
    )
}

export default Sorter
