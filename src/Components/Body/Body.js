import React, { useEffect } from 'react'

import './body.scss'
import Button from './Button'
import Sorter from './Sorter';

const Body = ({ theme }) => {

    useEffect(() => {

        if (theme === "light") {
            document.getElementsByClassName("body")[0].classList.remove("body__theme-Dark");

            const btns = document.getElementsByClassName("button");
            for (let i = 0; i < btns.length; i++) {
                btns[i].classList.remove('button__theme-Dark');
            }
        } else {
            document.getElementsByClassName("body")[0].classList.add("body__theme-Dark");

            const btns = document.getElementsByClassName("button");
            for (let i = 0; i < btns.length; i++) {
                btns[i].classList.add('button__theme-Dark');
            }
        }

    }, [theme])

    return (
        <div className="body">

            <div className="body__buttons">
                <Button name={"Generate New"} onClick={null} />
                <Button name={"Bubble Sort"} onClick={null} />
                <Button name={"Selection Sort"} onClick={null} />
                <Button name={"Insertion Sort"} onClick={null} />
                <Button name={"Merge Sort"} onClick={null} />
                <Button name={"Quick Sort"} onClick={null} />
            </div>

            <Sorter />
        </div>
    )
}

export default Body
