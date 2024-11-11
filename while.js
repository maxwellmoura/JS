/* 
Estruturas de Repetição são blocos de código que se repetem até que uma condição específica seja satisfeita. 
Elas evitam a repetição de código e incluem as estruturas 'while' e 'for'. 
Embora as sintaxes sejam diferentes, ambas podem alcançar o mesmo resultado.
*/

/* 
A estrutura 'while' executa um bloco de código enquanto uma condição for verdadeira. 
É importante incluir um incrementador, que é uma variável que muda de valor até que a condição de parada seja atendida.
*/

let contador = 0; // Inicializa o contador em 0.

while (contador < 12) { // Enquanto 'contador' for menor que 12:
    console.log("Contador = ", contador); // Exibe o valor atual do contador.
    contador = contador + 1; // Incrementa o contador em 1.
}

// Exemplo de loop infinito (cuidado!)
// let x = 10;
// while (x > 5) {
//     console.log(`Imprimindo x = ${x}`); // Este loop nunca termina porque 'x' não é alterado.
// }

// 'do while'
// A estrutura 'do while' executa o bloco de código pelo menos uma vez antes de verificar a condição.
let o = 10; // Inicializa a variável 'o' com 10.
do {
    console.log(`Imprimindo o = ${o}`); // Exibe o valor atual de 'o'.
    o--; // Decrementa 'o' em 1.
} while (o > 1); // Continua enquanto 'o' for maior que 1.

/* 
A estrutura 'for' é frequentemente preferida, pois condensa toda a lógica em uma única linha, 
incluindo a variável de controle, o incrementador e a condição de parada.
*/
for (let i = 0; i < 10; i++) { // Inicializa 'i' em 0, continua enquanto 'i' for menor que 10, incrementando 'i' em 1 a cada iteração.
    console.log("Repetindo algo..."); // Exibe a mensagem a cada iteração.
}

// Exemplo de uso do 'for' sem inicialização.
let r = 10; // Inicializa 'r' com 10.
for (r; r > 0; r = r - 1) { // Continua enquanto 'r' for maior que 0, decrementando 'r' em 1 a cada iteração.
    console.log(`o r está diminuindo ${r}`); // Exibe o valor atual de 'r'.
}

// Bloco de indentação
for (let u = 0; u < 10; u++) { // Inicializa 'u' em 0 e continua enquanto for menor que 10.
    if (u * 2 > 10) { // Verifica se o dobro de 'u' é maior que 10.
        console.log(`Maior que 10! ${u}`); // Exibe a mensagem se a condição for verdadeira.
    } else if (u / 2 === 0) { // Verifica se 'u' é igual a 0 após ser dividido por 2.
        console.log("Deu 0"); // Exibe a mensagem se 'u' for igual a 0.
    }
}

// 'break' - interrompe a execução do loop.
for (let g = 0; g < 10; g++) { // Inicializa 'g' em 0 e continua enquanto for menor que 10.
    if (g === 5) { // Se 'g' for igual a 5:
        break; // Interrompe o loop.
    }
    console.log(g); // Exibe o valor de 'g' até que 'g' seja 5.
}

for (let y = 20; y > 10; y--) { // Inicializa 'y' em 20 e continua enquanto for maior que 10.
    console.log(`Valor de Y é: ${y}`); // Exibe o valor atual de 'y'.
    if (y === 15) { // Se 'y' for igual a 15:
        console.log("o y é 15"); // Exibe a mensagem correspondente.
        break; // Interrompe o loop.
    }
}

// 'continue' - pula a iteração atual e vai para a próxima.
for (let h = 0; h < 10; h++) { // Inicializa 'h' em 0 e continua enquanto for menor que 10.
    if (h === 5) { // Se 'h' for igual a 5:
        continue; // Pula a iteração atual e vai para a próxima.
    }
    console.log(h); // Exibe o valor de 'h', exceto quando 'h' é 5.
}

for (let b = 1; b < 10; b = b + 1) { // Inicializa 'b' em 1 e continua enquanto for menor que 10.
    // O operador de resto '%' retorna o resto da divisão.
    if (b % 2 === 0) { // Verifica se 'b' é um número par.
        console.log("Número Par!"); // Exibe a mensagem se 'b' for par.
        continue; // Pula a iteração atual e vai para a próxima.
    }
    console.log(b); // Exibe o valor de 'b' apenas se for ímpar.
}
