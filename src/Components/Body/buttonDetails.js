import bubbleSortAlgorithm from './Algorithms/bubbleSortAlgorithm'
import selectionSortAlgorithm from './Algorithms/selectionSortAlgorithm'
import insertionSortAlgorithm from './Algorithms/insertionSortAlgorithm'
import mergeSortAlgorithm from './Algorithms/mergeSortAlgorithm'
import quickSortAlgorithm from './Algorithms/quickSortAlgorithm'

const enableAllButtons = () => {
    const allButtons = document.getElementsByClassName('button');
    for (let i = 0; i < allButtons.length - 1; i++) {
        allButtons[i].disabled = false;
        allButtons[i].classList.remove('button__active');
    }
}

const disableAllButtons = () => {
    const allButtons = document.getElementsByClassName('button');
    for (let i = 0; i < allButtons.length - 1; i++) {
        allButtons[i].disabled = true;
    }
}

const buttons = [
    {
        name: "Bubble Sort",
        onClick: (array) => {
            disableAllButtons();
            document.getElementsByClassName('button')[0].classList.add('button__active');
            return bubbleSortAlgorithm(array)
        },
    },
    {
        name: "Selection Sort",
        onClick: (array) => {
            disableAllButtons();
            document.getElementsByClassName('button')[1].classList.add('button__active');
            return selectionSortAlgorithm(array)
        },
    },
    {
        name: "Insertion Sort",
        onClick: (array) => {
            disableAllButtons();
            document.getElementsByClassName('button')[2].classList.add('button__active');
            return insertionSortAlgorithm(array)
        },
    },
    {
        name: "Merge Sort",
        onClick: (array) => {
            disableAllButtons();
            document.getElementsByClassName('button')[3].classList.add('button__active');
            return mergeSortAlgorithm(array)
        },
    },
    {
        name: "Quick Sort",
        onClick: (array) => {
            disableAllButtons();
            document.getElementsByClassName('button')[4].classList.add('button__active');
            return quickSortAlgorithm(array)
        },
    },
    {
        name: "Reset",
        onClick: () => {
            enableAllButtons();
        },
        reset: true
    }
];

export default buttons;