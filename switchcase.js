/**
 * O switch...case é uma estrutura de controle em JavaScript usada para testar um valor em relação a vários casos possíveis. Aqui estão alguns exemplos de como usar o switch...case:
 * 
 * Exemplo 1: Dia da Semana
 * Neste exemplo, usaremos o switch...case para determinar o nome do dia da semana com base em um número.
 */

/**
 * 
 */

let day = 3; // 1 representa Domingo, 2 representa Segunda, e assim por diante

switch (day) {
    case 1:
        console.log("Domingo");
        break;
    case 2:
        console.log("Segunda-feira");
        break;
    case 3:
        console.log("Terça-feira");
        break;
    case 4:
        console.log("Quarta-feira");
        break;
    case 5:
        console.log("Quinta-feira");
        break;
    case 6:
        console.log("Sexta-feira");
        break;
    case 7:
        console.log("Sábado");
        break;
    default:
        console.log("Dia inválido");
}

/**
 * Exemplo 2: Tipo de Animal
 * Neste exemplo, usaremos o switch...case para determinar o tipo de som que um animal faz.
 */

let animal = "cachorro";

switch (animal) {
    case "cachorro":
        console.log("Latindo");
        break;
    case "gato":
        console.log("Miando");
        break;
    case "vaca":
        console.log("Mugindo");
        break;
    case "galinha":
        console.log("Cocoricando");
        break;
    default:
        console.log("Não sei que som esse animal faz");
}

/**
 * Exemplo 3: Nota Escolar
 * Neste exemplo, usaremos o switch...case para atribuir um conceito de nota escolar com base em uma pontuação.
 */

let pontuacao = 85;

switch (true) {
    case pontuacao >= 90:
        console.log("Conceito A");
        break;
    case pontuacao >= 80:
        console.log("Conceito B");
        break;
    case pontuacao >= 70:
        console.log("Conceito C");
        break;
    case pontuacao >= 60:
        console.log("Conceito D");
        break;
    default:
        console.log("Conceito F");
}

/**
 * O switch...case é útil quando você tem várias opções diferentes para testar em relação a um valor ou expressão.
 * Cada case representa um caso possível e o bloco switch executa o código correspondente ao caso que corresponde ao valor testado.
 * O break é usado para sair do bloco switch após um caso ser correspondido e executado.
 * O bloco default é opcional e é executado quando nenhum dos casos corresponde ao valor testado.
 */