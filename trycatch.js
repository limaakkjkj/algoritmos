/**
 * O bloco try...catch em JavaScript é usado para lidar com exceções (erros) que podem ocorrer durante a execução do código. Aqui está um exemplo simples de como usar o try...catch para capturar e lidar com uma exceção:
 */

try {
    // Código que pode gerar um erro
    let x = y + 5; // y não está definido
} catch (error) {
    // Lidar com a exceção
    console.error("Ocorreu um erro:", error.message);
}

/**
 * Exemplo de uma função que pode gerar uma exceção:
 * 
 * Neste caso, a função divide verifica se o divisor b é igual a zero e, se for, lança uma exceção usando o throw. O bloco try...catch envolve a chamada da função divide, e se a divisão por zero ocorrer, o bloco catch captura a exceção e lida com ela exibindo uma mensagem de erro.
 * 
 * @param {*} a 
 * @param {*} b 
 * @returns 
 */

function divide(a, b) {
    if (b === 0) {
        throw new Error("Divisão por zero não é permitida");
    }

    return a / b;
}

try {
    let result = divide(10, 0);
    console.log("Resultado:", result);
} catch (error) {
    console.error("Ocorreu um erro:", error.message);
}
