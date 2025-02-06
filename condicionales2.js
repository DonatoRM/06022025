'use strict';
// Condicionales
// Los condicionales permiten ejecutar bloques de código dependiendo de si una condición es verdadera o falsa. Las estructuras condicionales más comunes en JavaScript son if, else, else if, y switch.

// if
// La estructura if se utiliza para ejecutar un bloque de código si una condición es verdadera. Si la condición es falsa, el bloque de código no se ejecuta.

let if_numero = 5;
if (if_numero > 0) {
  console.log('El número es positivo');
}

// else
// La estructura else se utiliza para ejecutar un bloque de código si la condición de un if es falsa.
let else_numero = -5;
if (else_numero > 0) {
  console.log('El número es positivo');
} else {
  console.log('El número es negativo');
}

// else if
// La estructura else if se utiliza para evaluar múltiples condiciones. Si la condición de un if es falsa, se evalúa la siguiente condición.
let else_if_numero = 0;
if (else_if_numero > 0) {
  console.log('El número es positivo');
} else if (else_if_numero < 0) {
  console.log('El número es negativo');
} else {
  console.log('El número es cero');
}

// switch
// La estructura switch se utiliza para evaluar una expresión y ejecutar diferentes bloques de código dependiendo del valor de la expresión.
let switch_day = 'Lunes';
switch (switch_day) {
  case 'Lunes':
    console.log('Hoy es lunes');
    break;
  case 'Martes':
    console.log('Hoy es martes');
    break;
  default:
    console.log('Hoy no es lunes ni martes');
}

//ejercicio condicionales
// 1. Escribe un programa que determine si un número es par o impar con un console log donde el usuario pueda escribie el numero

const numero = prompt('Escribe un número: ');

if (numero % 2 === 0) {
  console.log('El número es par');
} else {
  console.log('El número es impar');
}

// 2. Escribe un programa que determine si un número es positivo, negativo o cero con un console log donde el usuario pueda escribir el número

let if_numero2 = prompt('Escribe un número: ');
if_numero2 = parseInt(if_numero2);
if (if_numero2 > 0) {
  console.log('El número es positivo');
} else if (if_numero2 < 0) {
  console.log('El número es negativo');
} else {
  console.log('El número es cero');
}

// 3. Escribe un programa que determine si un número es mayor, menor o igual a 100 con un console log donde el usuario pueda escribir el número
let if_numero3 = prompt('Escribe un número: ');
if_numero3 = parseInt(if_numero3);
if (if_numero3 > 100) {
  console.log('El número es mayor a 100');
} else if (if_numero3 < 100) {
  console.log('El número es menor a 100');
} else {
  console.log('El número es igual a 100');
}

// 4. Escribe un programa que determine si un número es mayor, menor o igual a 100 con un console log donde el usuario pueda escribir el número
let if_numero4 = prompt('Escribe un número: ');
if_numero4 = parseInt(if_numero4);
if (if_numero4 > 100) {
  console.log('El número es mayor a 100');
} else if (if_numero4 < 100) {
  console.log('El número es menor a 100');
} else {
  console.log('El número es igual a 100');
}

// 5. Escribe un programa que determine si un número es mayor, menor o igual a 100 con un console log donde el usuario pueda escribir el número
let if_numero5 = prompt('Escribe un número: ');
if_numero5 = parseInt(if_numero5);
if (if_numero5 > 100) {
  console.log('El número es mayor a 100');
} else if (if_numero5 < 100) {
  console.log('El número es menor a 100');
} else {
  console.log('El número es igual a 100');
}
