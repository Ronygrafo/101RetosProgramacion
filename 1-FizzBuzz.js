/*
 * Escribe un programa que muestre por consola (con un print) los
 * números de 1 a 100 (ambos incluidos y con un salto de línea entre ✅
 * cada impresión), sustituyendo los siguientes:
 * - Múltiplos de 3 por la palabra "fizz". ✅
 * - Múltiplos de 5 por la palabra "buzz". ✅
 * - Múltiplos de 3 y de 5 a la vez por la palabra "fizzbuzz". ✅
 */

for (let i = 1; i <= 100; i++) {

    let result = "";

    // Si NO es múltiplo de 3 o 5, muestre el Número
    if (i % 3 !== 0 && i % 5 !== 0) {
        result = i
    }

    // Si lo es: Modifique el String del resultado
    else {

        if (i % 3 === 0) {
            result = result + "Fizz"
        }

        if (i % 5 === 0) {
            result = result + "Buzz"
        }
    }

    // Imprima Resultado e itere
    console.log(result)

}