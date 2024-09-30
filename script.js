// Variables globales para la operación actual, valor anterior y valor actual
let operacion = '';
let valorActual = '';
let valorPrevio = '';

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
}

// Función para limpiar la pantalla y resetear la calculadora
function limpiar() {
    valorActual = '';  // Vaciar el valor actual
    valorPrevio = '';  // Vaciar el valor previo
    operacion = '';  // Resetear la operación
    document.getElementById('resultado').value = '';  // Limpiar el campo de resultado
}
