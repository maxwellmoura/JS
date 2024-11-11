// Função prompt: exibe um diálogo solicitando ao usuário que insira um valor. 
// O valor inserido é armazenado na variável 'name'.
const name = prompt("Qual seu nome"); 
console.log(`Seu nome é: ${name}`); // Exibe o nome inserido pelo usuário no console.

// Função alert: exibe uma mensagem em um diálogo modal ao usuário. 
alert("Bem-vindo"); // Mensagem de boas-vindas ao usuário.

/* 
O objeto Math fornece uma variedade de funções matemáticas para cálculos comuns, como:
- encontrar a raiz quadrada.
- determinar o maior valor em uma lista de números.
- arredondar números.
*/

console.log(Math.max(1, 9, 10, 11, 12, 15, 16, 19, 20)); // Encontra e exibe o maior número da lista.
console.log(Math.floor(4.9)); // Arredonda o número para baixo, resultando em 4.
console.log(Math.ceil(4.1)); // Arredonda o número para cima, resultando em 5.

/* 
O objeto console é uma ferramenta de depuração que fornece métodos para interagir com a aba de console 
do navegador. Ele possui várias funções, incluindo:
- console.log: exibe mensagens de informação.
- console.error: exibe mensagens de erro em vermelho.
- console.warn: exibe mensagens de alerta em amarelo.
*/

console.log("console"); // Exibe uma mensagem padrão no console.
console.error("Erro!"); // Exibe uma mensagem de erro no console.
console.warn("Cuidado!"); // Exibe uma mensagem de aviso no console.
