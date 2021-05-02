

const randomIntFromInterval = (min, max) => {
    return Math.floor(Math.random() * (max - min + 1) + min);
}

const createArray = (numberOfBars, maxHeight) => {

    const arr = []
    for (let i = 0; i < numberOfBars; i++) {
        arr.push(randomIntFromInterval(10, maxHeight));
    }
    return arr;
}

export { createArray };