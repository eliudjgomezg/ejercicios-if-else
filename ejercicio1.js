/*
Definir una variable con un numero y Desarrollar una funcion que verifique
si este numero es negativo.

La respuesta se debe ver asi:
¿El numero ingresado es negativo?: no, es positivo
¿El numero ingresado es negativo?: si, es negativo

Dato: Se considera que un numero es positivo cuando es mayor a cero y 
negativo cuando es menor a cero.
*/

let number = 5

function isNegative() {
    if (number < 0) {
        return 'si, es negativo'
    }else {
        return 'no, es positivo'
    }
}

let resultado = isNegative()

console.log('¿El numero ingresado es negativo?:', resultado)