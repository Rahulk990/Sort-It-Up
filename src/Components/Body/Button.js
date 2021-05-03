import React, { useEffect, useRef } from 'react'

import './button.scss'

const Button = ({ name, reset, onClick, array, resetter, theme, setTimeouts, clearAllTimeouts }) => {

    const primaryColor = useRef("#24292E");
    const processAlgorithm = (animations) => {
        const allTimeouts = []
        let secondaryColor = "red"
        let animationSpeed = 10000 / (animations.length + 1);

        let cnt = 0;
        for (let i = 0; i < animations.length; i++) {
            const arrayBars = document.getElementsByClassName("sorter__arrayBars");
            const isColorChange = Boolean(animations[i].length === 2);

            if (isColorChange) {
                cnt++;

                const [barOneIdx, barTwoIdx] = animations[i];
                const barOneStyle = arrayBars[barOneIdx].style;
                const barTwoStyle = arrayBars[barTwoIdx].style;

                const colorId = (cnt % 2 === 1) ? 1 : 0;
                allTimeouts.push(setTimeout(() => {
                    const color = (colorId) ? secondaryColor : primaryColor.current;
                    barOneStyle.backgroundColor = color;
                    barTwoStyle.backgroundColor = color;
                }, i * animationSpeed))
            } else {
                allTimeouts.push(setTimeout(() => {
                    const [barOneIdx, newHeightOne, barTwoIdx, newHeightTwo] = animations[i];
                    const barOneStyle = arrayBars[barOneIdx].style;
                    barOneStyle.height = `${newHeightOne}px`;
                    const barTwoStyle = arrayBars[barTwoIdx].style;
                    barTwoStyle.height = `${newHeightTwo}px`;
                }, i * animationSpeed))
            }
        }

        return allTimeouts;
    }

    useEffect(() => {
        if (theme === "light") {
            primaryColor.current = "#24292E";
        } else {
            primaryColor.current = "#CDD9E5";
        }
    }, [theme])

    const clickButton = () => {
        if (reset) {
            onClick()
            clearAllTimeouts()
            resetter()
        } else {
            const newArray = [...array]
            const animations = onClick(newArray)
            const allTimeouts = processAlgorithm(animations)
            setTimeouts(allTimeouts);
        }
    }

    return (
        <button className={`button ${reset ? 'button__reset' : ''}`} onClick={clickButton}>
            {name}
        </button >
    )
}

export default Button
