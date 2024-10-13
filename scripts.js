let currentNumber = '';
let previousNumber = '';
let operation = null;

document.addEventListener('keydown', handleKeyPress);

function handleKeyPress(event) {
    const key = event.key;
    if (isNumber(key) || key === ',') {
        appendNumber(key);
    } else if (isOperation(key)) {
        chooseOperation(key);
    } else if (key === 'Enter') {
        calculate();
    } else if (key === 'Backspace') {
        deleteLastDigit();
    }
}

function isNumber(key) {
    return /\d/.test(key);
}

function isOperation(key) {
    return ['+', '-', '*', '/'].includes(key);
}

function appendNumber(number) {
    currentNumber += number;
    updateDisplay();
}

function appendComma() {
    currentNumber += ',';
    updateDisplay();
}

function chooseOperation(op) {
    if (currentNumber === '') return;
    if (previousNumber !== '') {
        calculate();
    }
    operation = op;
    previousNumber = currentNumber;
    currentNumber = '';
}

function calculate() {
    let result;
    const prev = parseFloat(previousNumber.replace(',', '.'));
    const current = parseFloat(currentNumber.replace(',', '.'));
    if (isNaN(prev) || isNaN(current)) return;
    switch (operation) {
        case '+':
            result = prev + current;
            break;
        case '-':
            result = prev - current;
            break;
        case '*':
            result = prev * current;
            break;
        case '/':
            result = prev / current;
            break;
        default:
            return;
    }
    currentNumber = result.toString().replace('.', ',');
    operation = null;
    previousNumber = '';
    updateDisplay();
    rellenar_info(result);
}

function clearDisplay() {
    currentNumber = '';
    previousNumber = '';
    operation = null;
    updateDisplay();
}

function updateDisplay() {
    document.getElementById('display').value = currentNumber;
}

function calculateSquare() {
    if (currentNumber === '') return;
    const number = parseFloat(currentNumber.replace(',', '.'));
    const result = number * number;
    currentNumber = result.toString().replace('.', ',');
    updateDisplay();
    rellenar_info(result);
}

function mod() {
    if (currentNumber === '') return;
    const number = parseFloat(currentNumber.replace(',', '.'));
    const result = Math.abs(number);
    currentNumber = result.toString().replace('.', ',');
    updateDisplay();
    rellenar_info(result);
}

function fact() {
    if (currentNumber === '') return;
    let number = parseInt(currentNumber);
    if (number < 0) return;
    let result = 1;
    for (let i = 1; i <= number; i++) {
        result *= i;
    }
    currentNumber = result.toString();
    updateDisplay();
    rellenar_info(result);
}

function rellenar_info(result) {
    const infoElement = document.getElementById('info');
    if (result < 100) {
        infoElement.textContent = "Info: El resultado es menor que 100";
    } else if (result >= 100 && result <= 200) {
        infoElement.textContent = "Info: El resultado está entre 100 y 200";
    } else {
        infoElement.textContent = "Info: El resultado es superior a 200";
    }
}

function sumatorio() {
    if (currentNumber === '') return;
    const numbers = currentNumber.split(',').map(Number);
    const result = numbers.reduce((acc, num) => acc + num, 0);
    currentNumber = result.toString().replace('.', ',');
    updateDisplay();
    rellenar_info(result);
}

function ordenar() {
    if (currentNumber === '') return;
    const numbers = currentNumber.split(',').map(Number);
    numbers.sort((a, b) => a - b);
    currentNumber = numbers.join(',');
    updateDisplay();
}

function revertir() {
    if (currentNumber === '') return;
    const numbers = currentNumber.split(',');
    numbers.reverse();
    currentNumber = numbers.join(',');
    updateDisplay();
}

function quitar() {
    if (currentNumber === '') return;
    const numbers = currentNumber.split(',');
    numbers.pop();
    currentNumber = numbers.join(',');
    updateDisplay();
}

function deleteLastDigit() {
    currentNumber = currentNumber.slice(0, -1);
    updateDisplay();
}

function changeSign() {
    if (currentNumber === '') return;
    currentNumber = (-parseFloat(currentNumber.replace(',', '.'))).toString().replace('.', ',');
    updateDisplay();
}

function elevarAlCuadrado() {
    if (currentNumber === '') return;
    const number = parseFloat(currentNumber.replace(',', '.'));
    const result = number * number;
    currentNumber = result.toString().replace('.', ',');
    updateDisplay();
    rellenar_info(result);
}

function sumatorio() {
    if (currentNumber === '') return;
    const numbers = currentNumber.split(',').map(Number);
    const result = numbers.reduce((acc, num) => acc + num, 0);
    currentNumber = result.toString().replace('.', ',');
    updateDisplay();
    rellenar_info(result);
}

function ordenar() {
    if (currentNumber === '') return;
    const numbers = currentNumber.split(',').map(Number);
    numbers.sort((a, b) => a - b);
    currentNumber = numbers.join(',');
    updateDisplay();
}

function revertir() {
    if (currentNumber === '') return;
    const numbers = currentNumber.split(',');
    numbers.reverse();
    currentNumber = numbers.join(',');
    updateDisplay();
}

function quitar() {
    if (currentNumber === '') return;
    const numbers = currentNumber.split(',');
    numbers.pop();
    currentNumber = numbers.join(',');
    updateDisplay();
}