

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
        onClick: () => {
            disableAllButtons();
            document.getElementsByClassName('button')[0].classList.add('button__active');
        },
    },
    {
        name: "Selection Sort",
        onClick: () => {
            disableAllButtons();
            document.getElementsByClassName('button')[1].classList.add('button__active');

        },
    },
    {
        name: "Insertion Sort",
        onClick: () => {
            disableAllButtons();
            document.getElementsByClassName('button')[2].classList.add('button__active');

        },
    },
    {
        name: "Merge Sort",
        onClick: () => {
            disableAllButtons();
            document.getElementsByClassName('button')[3].classList.add('button__active');

        },
    },
    {
        name: "Quick Sort",
        onClick: () => {
            disableAllButtons();
            document.getElementsByClassName('button')[4].classList.add('button__active');

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

export { enableAllButtons };
export default buttons;