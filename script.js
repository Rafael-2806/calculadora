// Variables globales para la operación actual, valor anterior y valor actual
let operacion = '';
let valorActual = '';
let valorPrevio = '';

// Variables para operaciones binarias
let operador = '';  // Variable global para el operador
let primerNumero = '';  // Variable global para el primer operando

// Función para agregar valores (números o puntos decimales) a la pantalla
function agregarValor(num) {
    valorActual += num;  // Concatenar el número o símbolo
    document.getElementById('resultado').value = valorActual;  // Mostrar en el campo de resultado
}

// Función para definir la operación aritmética a realizar
function operar(op) {
    if (valorActual === '') return;  // No hacer nada si no hay valor ingresado
    if (operacion !== '') {
        calcular();  // Si ya hay una operación en curso, calcularla primero
    }
    valorPrevio = valorActual;  // Guardar el valor actual como el valor previo
    operacion = op;  // Establecer la operación actual
    valorActual = '';  // Vaciar el valor actual para el siguiente número
}

// Función para realizar el cálculo basado en la operación seleccionada
function calcular() {
    if (valorPrevio === '' || valorActual === '') return;  // No hacer nada si faltan valores

    let resultado = 0;
    switch (operacion) {
        case '+':
            resultado = parseFloat(valorPrevio) + parseFloat(valorActual);
            break;
        case '-':
            resultado = parseFloat(valorPrevio) - parseFloat(valorActual);
            break;
        case '*':
            resultado = parseFloat(valorPrevio) * parseFloat(valorActual);
            break;
        case '/':
            if (valorActual == '0') {
                alert("Error: División por cero no permitida.");
                limpiar();
                return;
            }
            resultado = parseFloat(valorPrevio) / parseFloat(valorActual);
            break;
        default:
            return;  // Si no hay una operación válida, salir de la función
    }
    document.getElementById('resultado').value = resultado;  // Mostrar el resultado
    valorActual = resultado;  // Guardar el resultado como nuevo valor actual
    operacion = '';  // Resetear la operación
    valorPrevio = '';  // Resetear el valor previo
    rellenar_info(resultado);  // Actualizar la información
}

// Función para limpiar la pantalla y resetear la calculadora
function limpiar() {
    valorActual = '';  // Vaciar el valor actual
    valorPrevio = '';  // Vaciar el valor previo
    operacion = '';  // Resetear la operación
    document.getElementById('resultado').value = '';  // Limpiar el campo de resultado
    document.getElementById('info').textContent = "Info sobre el número";  // Reiniciar el mensaje
}

// Función para calcular el cuadrado del número actual
function cuadrado() {
    if (valorActual === '') return;  // No hacer nada si no hay valor ingresado
    let resultado = parseFloat(valorActual) * parseFloat(valorActual);  // Calcular el cuadrado
    document.getElementById('resultado').value = resultado;  // Mostrar el resultado
    valorActual = resultado;  // Actualizar el valor actual con el resultado
    rellenar_info(resultado);  // Actualizar la información
}

// Función para calcular el módulo del número actual
function mod() {
    if (valorActual === '') return;  // No hacer nada si no hay valor ingresado
    let resultado = Math.abs(parseFloat(valorActual));  // Calcular el valor absoluto (módulo)
    document.getElementById('resultado').value = resultado;  // Mostrar el resultado
    valorActual = resultado;  // Actualizar el valor actual con el resultado
    rellenar_info(resultado);  // Actualizar la información
}

// Función para calcular el factorial del número actual
function fact() {
    if (valorActual === '' || isNaN(valorActual) || valorActual < 0) {
        alert("Error: El factorial solo se define para números enteros no negativos.");
        return;
    }

    let numero = parseInt(valorActual);  // Convertir el valor actual a entero
    let resultado = 1;

    for (let i = 1; i <= numero; i++) {
        resultado *= i;  // Calcular el factorial
    }

    document.getElementById('resultado').value = resultado;  // Mostrar el resultado
    valorActual = resultado;  // Actualizar el valor actual con el resultado
    rellenar_info(resultado);  // Actualizar la información
}

// Función para rellenar el <h2> con información según el resultado
function rellenar_info(resultado) {
    const infoElement = document.getElementById('info');
    
    if (resultado < 100) {
        infoElement.textContent = "Info: El resultado es menor que 100";
    } else if (resultado >= 100 && resultado <= 200) {
        infoElement.textContent = "Info: El resultado está entre 100 y 200";
    } else {
        infoElement.textContent = "Info: El resultado es superior a 200";
    }
}

// --- Operaciones binarias ---

// Función para la suma
function add() {
    if (valorActual === '') return;  // No hacer nada si no hay valor
    primerNumero = valorActual;  // Guardar el valor actual como el primer número
    operador = '+';  // Guardar el operador de suma
    valorActual = '';  // Resetear el valor actual para el siguiente número
}

// Función para la multiplicación
function mul() {
    if (valorActual === '') return;  // No hacer nada si no hay valor
    primerNumero = valorActual;  // Guardar el valor actual como el primer número
    operador = '*';  // Guardar el operador de multiplicación
    valorActual = '';  // Resetear el valor actual para el siguiente número
}

// Función para calcular el resultado (se invoca al presionar el botón igual)
function eq() {
    if (primerNumero === '' || valorActual === '') return;  // No hacer nada si faltan números

    let resultado = 0;
    switch (operador) {
        case '+':
            resultado = parseFloat(primerNumero) + parseFloat(valorActual);
            break;
        case '*':
            resultado = parseFloat(primerNumero) * parseFloat(valorActual);
            break;
        default:
            return;  // Si no hay una operación válida, salir de la función
    }

    document.getElementById('resultado').value = resultado;  // Mostrar el resultado
    valorActual = resultado;  // Guardar el resultado como nuevo valor actual
    operador = '';  // Resetear el operador
    primerNumero = '';  // Resetear el primer número
    rellenar_info(resultado);  // Actualizar la información
}

// --- Funciones para operaciones en formato CSV ---

// Función para calcular el sumatorio
function sumatorio() {
    if (valorActual === '') return;  // No hacer nada si no hay valor
    let numeros = valorActual.split(',').map(Number);  // Convertir a array de números
    let resultado = numeros.reduce((a, b) => a + b, 0);  // Calcular la suma
    document.getElementById('resultado').value = resultado;  // Mostrar el resultado
    valorActual = resultado;  // Actualizar el valor actual con el resultado
    rellenar_info(resultado);  // Actualizar la información
}

// Función para ordenar los números
function ordenar() {
    if (valorActual === '') return;  // No hacer nada si no hay valor
    let numeros = valorActual.split(',').map(Number);  // Convertir a array de números
    numeros.sort((a, b) => a - b);  // Ordenar en orden ascendente
    valorActual = numeros.join(',');  // Convertir de nuevo a string
    document.getElementById('resultado').value = valorActual;  // Mostrar el resultado
}

// Función para revertir el orden de los números
function revertir() {
    if (valorActual === '') return;  // No hacer nada si no hay valor
    let numeros = valorActual.split(',');  // Convertir a array de strings
    numeros.reverse();  // Revertir el orden
    valorActual = numeros.join(',');  // Convertir de nuevo a string
    document.getElementById('resultado').value = valorActual;  // Mostrar el resultado
}

// Función para quitar los dos últimos elementos
function quitar() {
    if (valorActual === '') return;  // No hacer nada si no hay valor
    let numeros = valorActual.split(',');  // Convertir a array de strings
    if (numeros.length > 2) {
        numeros.splice(-2, 2);  // Quitar los dos últimos elementos
    } else {
        numeros = [];  // Si hay menos de 2 elementos, vaciar el array
    }
    valorActual = numeros.join(',');  // Convertir de nuevo a string
    document.getElementById('resultado').value = valorActual;  // Mostrar el resultado
}
