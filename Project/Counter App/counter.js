let count = 0;

const updateCountDisplay = () => {
    document.getElementById('countDisplay').innerText = count;
};

document.getElementById('increaseButton').addEventListener('click', () => {
    count++;
    updateCountDisplay();
});

document.getElementById('decreaseButton').addEventListener('click', () => {
    count--;
    updateCountDisplay();
});

document.getElementById('resetButton').addEventListener('click', () => {
    count = 0;
    updateCountDisplay();
});
