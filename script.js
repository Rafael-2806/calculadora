let currentNumber = '';

function appendNumber(number) {
    currentNumber += number;
    updateDisplay();
}

function clearDisplay() {
    currentNumber = '';
    updateDisplay();
}

function updateDisplay() {
    const display = document.getElementById('display');
    display.value = currentNumber;
}
