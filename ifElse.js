/* 
Estruturas de controle de fluxo permitem que o programa altere o seu comportamento com base em condições específicas. 
Os programas são executados de cima para baixo, mas o fluxo de execução pode ser modificado através de estruturas como if, else, e else if.
*/

// Exemplo de if e else
const m = 10; // Define a variável 'm' com valor 10
if (m > 5) { // Verifica se 'm' é maior que 5
    console.log("Maior que 5"); // Se a condição for verdadeira, exibe esta mensagem no console
} 
// else { 
//     console.log("Menor que 5"); // Se a condição for falsa, esta mensagem seria exibida (comentada)
// }

// Verifica se o usuário está logado
const logado = true; // Define a variável 'logado' como verdadeira
if (logado) { // Se 'logado' for verdadeiro
    console.log("Você está logado"); // Exibe mensagem de login
} else {
    console.log("Você não está logado"); // Se 'logado' for falso, exibe mensagem de erro
}

// Utilizando if, else if e else para múltiplas condições
const p = 1; // Define a variável 'p' com valor 1
if (p > 5) { // Verifica se 'p' é maior que 5
    console.log("Maior que 5"); // Exibe mensagem se a condição for verdadeira
} else if (p == 1) { // Verifica se 'p' é igual a 1
    console.log("Igual a 1"); // Exibe mensagem se a condição for verdadeira
} else {
    console.log("Menor que 5"); // Se nenhuma das condições anteriores for verdadeira, exibe esta mensagem
}

// Exemplo de verificação de nome e idade
const userName = "Gracy"; // Define o nome do usuário
const userAge = 37; // Define a idade do usuário
if (userName === "Maria") { // Verifica se o nome do usuário é "Maria"
    console.log("Bem-vinda Maria"); // Exibe mensagem de boas-vindas se a condição for verdadeira
} else if (userName === "Gracy" && userAge === 37) { // Verifica se o nome é "Gracy" e se a idade é 37
    console.log("Bem-vinda Gracy"); // Exibe mensagem de boas-vindas se a condição for verdadeira
} else {
    console.log("Bem-vindo"); // Se nenhuma das condições anteriores for verdadeira, exibe mensagem genérica de boas-vindas
}
