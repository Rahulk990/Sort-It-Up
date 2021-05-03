import React, { useEffect, useState } from 'react'

import './body.scss'
import Button from './Button'
import Sorter from './Sorter'
import buttons from './buttonDetails'
import { createArray } from './Algorithms/utilities'

const Body = ({ theme }) => {

    // Managing Theme
    useEffect(() => {

        if (theme === "light") {
            const btns = document.getElementsByClassName("button");
            for (let i = 0; i < btns.length; i++) {
                btns[i].classList.remove('button__theme-Dark');
            }
        } else {
            const btns = document.getElementsByClassName("button");
            for (let i = 0; i < btns.length; i++) {
                btns[i].classList.add('button__theme-Dark');
            }
        }

    }, [theme])

    // Managing Array
    const [array, setArray] = useState([])
    const resetArray = () => { 
        setArray([])
        setArray(createArray(150, 450)) 
    }

    useEffect(() => {
        resetArray()
    }, [])

    // Handling Timeouts
    const [timeouts, setTimeouts] = useState([])
    const clearAllTimeouts = () => {
        timeouts.forEach(timeId => { clearTimeout(timeId) });
        setTimeouts([]);
    }

    return (
        <div className={`body ${(theme === 'dark') ? 'body__theme-Dark' : ''}`}>

            <div className="body__buttons">

                {
                    buttons.map(button => (
                        <Button
                            key={button.name}
                            name={button.name}
                            reset={button.reset}
                            onClick={button.onClick}
                            array={array}
                            resetter={resetArray}
                            theme={theme}
                            setTimeouts={setTimeouts}
                            clearAllTimeouts={clearAllTimeouts}
                        />
                    ))
                }

            </div>

            <Sorter theme={theme} array={array} />
        </div>
    )
}

export default Body
