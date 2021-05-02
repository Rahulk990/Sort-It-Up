import React, { useEffect } from 'react'

import './body.scss'
import Button from './Button'
import Sorter from './Sorter'
import buttons from './buttonDetails'

const Body = ({ theme }) => {

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

    return (
        <div className={`body ${(theme === 'dark') && 'body__theme-Dark'}`}>

            <div className="body__buttons">

                {
                    buttons.map(button => (
                        <Button
                            key={button.name}
                            name={button.name}
                            onClick={button.onClick}
                            reset={button.reset}
                            theme={theme}
                        />
                    ))
                }

            </div>

            <Sorter />
        </div>
    )
}

export default Body
