/**
 * A estrutura condicional if é uma parte fundamental da programação em JavaScript.
 * Ela permite que você execute um bloco de código se uma determinada condição for verdadeira.
 * Aqui estão alguns exemplos de como usar a estrutura if em JavaScript:
 * 
 * Exemplo 1: Verificação de Idade
 * Neste exemplo, usaremos uma estrutura if para verificar se uma pessoa é maior de idade (idade igual ou maior que 18) e exibir uma mensagem apropriada.
 */

let idade = 20;

if (idade >= 18) {
    console.log("Você é maior de idade.");
} else {
    console.log("Você é menor de idade.");
}

/**
 * Exemplo 2: Verificação de Número Par ou Ímpar
 * Neste exemplo, usaremos uma estrutura if para verificar se um número é par ou ímpar.
 */

let numero = 7;

if (numero % 2 === 0) {
    console.log("O número é par.");
} else {
    console.log("O número é ímpar.");
}

/**
 * Exemplo 3: Classificação de Números
 * Neste exemplo, usaremos uma estrutura if para classificar três números em ordem crescente.
 */

let a = 5;
let b = 12;
let c = 8;

if (a <= b && a <= c) {
    console.log(a);

    if (b <= c) {
        console.log(b);
        console.log(c);
    } else {
        console.log(c);
        console.log(b);
    }
} else if (b <= a && b <= c) {
    console.log(b);

    if (a <= c) {
        console.log(a);
        console.log(c);
    } else {
        console.log(c);
        console.log(a);
    }
} else {
    console.log(c);

    if (a <= b) {
        console.log(a);
        console.log(b);
    } else {
        console.log(b);
        console.log(a);
    }
}

/**
 * Exemplo 4: Verificação de String Vazia
 * Neste exemplo, usaremos uma estrutura if para verificar se uma string está vazia.
 */

let texto = "Olá, mundo!";

if (texto === "") {
    console.log("A string está vazia.");
} else {
    console.log("A string não está vazia.");
}

/**
 * Esses exemplos ilustram diferentes cenários em que a estrutura if é usada para tomar decisões com base nas condições especificadas.
 * Você pode combinar várias estruturas if, usar else if para lidar com várias condições alternativas e usar else para tratar casos que não correspondem a nenhuma das condições anteriores.
 */
