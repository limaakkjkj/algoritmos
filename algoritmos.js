/**
 * 
 * Algoritmos de Ordenação - Array Sort:
 * O Array Sort é um algoritmo de ordenação simples que percorre a lista de várias vezes, comparando elementos adjacentes e trocando-as na ordem errada.
 * 
 * @param {*} arr
 */

function arraySort (arr) {
    let n = arr.length;
    for (let i = 0;i < n-1;i++){
        for (let j = 0;j < n - i; j++) {
            if (arr[j] > arr[j+1]) {
                // Trocar elementos
                let temp = arr[j];
                arr[j] = arr[j + 1];
                arr[j + 1] = temp; 
            }
        }
    }
}


let arr = [64, 34, 25, 12, 22, 11, 90];
arraySort(arr);

console.log("Array ordenado:", arr);

/**
 * Algoritmo de Busca Binária:
 * A Busca Binária é um algoritmo eficiente para buscar um elemento em um array ordenado.
 * 
 * @param {*} arr 
 * @param {*} target 
 * @returns 
 */

function binarySearch(arr, target) {
    let left = 0;
    let right = arr.length - 1;

    while (left <= right) {
        let mid = Math.floor((left + right) / 2);
        if (arr[mid] === target) {
            return mid; // Elemento encontrado
        } else if (arr[mid] < target) {
            left = mid + 1;
        } else {
            right = mid - 1;
        }
    }

    return -1; // Elemento não encontrado
}

let sortedArr = [11, 12, 22, 25, 34, 64, 90];
let target = 25;
let result = binarySearch(sortedArr, target);

console.log(`O elemento ${target} está no índice ${result}`);

/**
 * Algoritmo de Fibonacci - Recursivo:
 * A sequência de Fibonacci é uma série de números em que cada número é a soma dos dois anteriores.
 * 
 * @param {*} n 
 * @returns 
 */

function fibonacciRecursive(n) {
    if (n <= 1) {
        return n;
    }
    return fibonacciRecursive(n - 1) + fibonacciRecursive(n - 2);
}

let n = 6;

console.log(`O termo ${n} da sequência de Fibonacci é ${fibonacciRecursive(n)}`);