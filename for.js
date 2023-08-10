/**
 * O loop for é uma estrutura de controle em JavaScript usada para executar um bloco de código um número específico de vezes.
 * Aqui estão alguns exemplos de como usar o loop for:
 * 
 * Exemplo 1: Contagem Crescente
 * Neste exemplo, usaremos um loop for para contar de 1 até 5 em ordem crescente.
 */

for (let i = 1; i <= 5; i++) {
    console.log(i);
}

/**
 * Exemplo 2: Tabuada
 * Neste exemplo, usaremos um loop for para gerar a tabuada de multiplicação de um número específico (no caso, 7).
 */

let num = 7;

for (let i = 1; i <= 10; i++) {
    let result = num * i;
    console.log(`${num} x ${i} = ${result}`);
}

/**
 * Exemplo 3: Soma de Números Pares
 * Neste exemplo, usaremos um loop for para somar os números pares de 1 a 10.
 */

let sum = 0;

for (let i = 2; i <= 10; i += 2) {
    sum += i;
}

console.log("Soma dos números pares:", sum);

/**
 * Exemplo 4: Percorrendo um Array
 * Neste exemplo, usaremos um loop for para percorrer e exibir os elementos de um array.
 */

let colors = ["red", "green", "blue", "yellow"];

for (let i = 0; i < colors.length; i++) {
    console.log(colors[i]);
}

/**
 * O loop for é uma ferramenta poderosa para executar um bloco de código um número específico de vezes.
 * Ele oferece mais controle sobre o processo de iteração, permitindo que você defina a inicialização, a condição de continuação e a atualização da variável de controle no próprio cabeçalho do loop.
 */