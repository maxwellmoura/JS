// Estrutura de Programação

// Declaração de Variáveis
// 'let' permite declarar variáveis que podem ter seus valores alterados ao longo do tempo.
let nome = "Maxwell"; // Inicializa a variável 'nome' com o valor "Maxwell".
console.log(nome); // Exibe o valor atual de 'nome'.
nome = "Maxwell Christino de Moura"; // Atualiza o valor da variável 'nome'.
console.log(nome); // Exibe o novo valor de 'nome'.

// 'const' é usado para declarar variáveis cujo valor não pode ser alterado após a inicialização.
const idade = 40; // Inicializa 'idade' com o valor 40.
console.log(idade); // Exibe o valor da variável 'idade'.

// 'var' permite declarar variáveis que podem ser alteradas, mas tem um escopo mais amplo que 'let' e 'const'.
var ano = 2024; // Inicializa 'ano' com o valor 2024.
console.log(ano); // Exibe o valor atual de 'ano'.
ano = 2025; // Atualiza o valor da variável 'ano'.
console.log(ano); // Exibe o novo valor de 'ano'.

// typeof
// O operador 'typeof' retorna o tipo da variável.
console.log(typeof nome); // Exibe o tipo da variável 'nome'.
console.log(typeof ano); // Exibe o tipo da variável 'ano'.
console.log(typeof idade); // Exibe o tipo da variável 'idade'.

// Mais sobre variáveis
// É possível declarar várias variáveis em uma única linha usando 'let'.
let a = 19, b = 10, c = 15; // Declaração de múltiplas variáveis.
console.log(a, b, c); // Exibe os valores de 'a', 'b' e 'c'.
console.log(a + b * c); // Exibe o resultado da expressão: a + (b * c).

// Case Sensitive
// JavaScript é sensível a maiúsculas e minúsculas, o que significa que 'nomecompleto' e 'nomeCompleto' são variáveis distintas.
let nomecompleto = "Maxwell Christino de Moura"; // 'nomecompleto' com todas letras minúsculas.
let nomeCompleto = "Jose da Silva"; // 'nomeCompleto' com 'C' maiúsculo.
console.log(nomecompleto); // Exibe o valor da variável 'nomecompleto'.
console.log(nomeCompleto); // Exibe o valor da variável 'nomeCompleto'.

// Caracteres especiais em variáveis
// É permitido o uso de caracteres especiais como '$' e '_' ao nomear variáveis.
let nome$ = "Pablo"; // Variável com o caractere especial '$'.
let _nome = "Pablito"; // Variável começando com o caractere especial '_'.
console.log(nome$); // Exibe o valor da variável 'nome$'.
console.log(_nome); // Exibe o valor da variável '_nome'.
