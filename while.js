/**
 * O loop while em JavaScript é usado para executar um bloco de código repetidamente enquanto uma condição específica for verdadeira.
 * Aqui estão alguns exemplos de como usar o loop while:
 * 
 * Exemplo 1: Contagem Regressiva
 * Neste exemplo, usaremos um loop while para contar de 5 até 1 em ordem decrescente.
 */

let count = 5;

while (count >= 1) {
    console.log(count);
    count--;
}

/**
 * Exemplo 2: Geração de Números Aleatórios
 * Neste exemplo, usaremos um loop while para gerar números aleatórios até que um número maior que 0,8 seja gerado.
 */

let randomNumber;

while ((randomNumber = Math.random()) > 0.8) {
    console.log("Número gerado:", randomNumber);
}

/**
 * Exemplo 3: Calculando Potências
 * Neste exemplo, usaremos um loop while para calcular a potência de 2 elevado a um valor até que a potência seja maior que 1000.
 */

let base = 2;
let exponent = 1;
let result = 1;

while (result <= 1000) {
    result = base ** exponent;
    console.log(`2^${exponent} = ${result}`);
    exponent++;
}

/**
 * Lembre-se de que é importante ter cuidado ao usar loops while, pois se a condição não se tornar falsa em algum momento, o loop pode continuar indefinidamente, resultando em um loop infinito.
 * Certifique-se sempre de que a condição eventualmente se torne falsa para que o loop possa terminar.
 * Os exemplos acima ilustram diferentes cenários em que um loop while pode ser usado para executar um bloco de código repetidamente com base em uma condição.
 */