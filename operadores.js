// 1 - Number
/*
O tipo `Number` representa valores numéricos, sejam inteiros, decimais ou negativos.
Aqui, verificamos o tipo de alguns valores usando `typeof`.
*/
console.log(typeof 2); // Resultado: "number"
console.log(typeof 2.2); // Resultado: "number"
console.log(typeof -4); // Resultado: "number"

// 2 - Operações aritméticas
/*
Operações aritméticas básicas como soma, subtração, multiplicação e divisão são suportadas pelo tipo `Number`.
*/
console.log(2 + 4); // Soma: Resultado: 6
console.log(10 - 5); // Subtração: Resultado: 5
console.log(5 * 4); // Multiplicação: Resultado: 20
console.log(10 / 2); // Divisão: Resultado: 5

// 3 - Special Numbers
/*
Valores especiais em JavaScript como `Infinity` e `NaN` representam números fora do intervalo ou resultados indefinidos.
*/
console.log(typeof Infinity); // Resultado: "number", Infinity é um número especial

console.log(12 * "asd"); // Operação inválida, Resultado: NaN (Not a Number)

console.log(typeof NaN); // Resultado: "number", NaN é um valor numérico especial

// 4 - Strings
/*
Strings são representadas por texto entre aspas duplas, simples ou crases.
*/
console.log("Um texto"); // Exemplo de string entre aspas duplas
console.log(`Mais um texto`); // Exemplo de string entre crases

console.log(typeof "Opa"); // Resultado: "string", indica o tipo da variável

// 5 - Símbolos especiais em string
/*
Podemos adicionar caracteres especiais em strings usando `\`, como `\n` para nova linha e `\t` para tabulação.
*/
console.log("Testando \n quebra de linha"); // Adiciona uma quebra de linha
console.log("Espaçamento \t de tab"); // Adiciona uma tabulação

// 6 - Concatenação
/*
A concatenação une duas ou mais strings usando o operador `+`.
*/
console.log("Oi, " + " tudo " + "bem?"); // Concatenação de strings com `+`

console.log(`Testando ` + `Concatenação`); // Concatenação usando crase e `+`

// 7 - Interpolação
/*
A interpolação de strings permite inserir variáveis ou expressões diretamente em uma string usando crases e `${}`.
*/
console.log(`A soma de 2 + 2 é: ${2 + 2}`); // Exibe o resultado da expressão 2 + 2 dentro da string

console.log(`Podemos executar qualquer coisa ${console.log("teste")}`); // Executa `console.log` dentro de uma interpolação

// 8 - Booleans
/*
Booleans representam verdadeiro ou falso e são comuns em operações lógicas.
*/
console.log(5 > 2); // Resultado: true

console.log(30 > 100); // Resultado: false

console.log(typeof true); // Resultado: "boolean"

// 9 - Comparações
/*
Operadores de comparação como `<=`, `<`, `==`, e `!=` retornam booleanos indicando se uma condição é verdadeira ou falsa.
*/
console.log(5 <= 5); // Resultado: true
console.log(5 < 5); // Resultado: false
console.log(10 == 10); // Resultado: true
console.log(10 == 9); // Resultado: false
console.log(10 != 9); // Resultado: true

// 10 - Idêntico
/*
Operadores de igualdade (`==`) e identidade (`===`) comparam valores, mas `===` compara o tipo e valor.
*/
console.log(9 == "9"); // Resultado: true, apenas compara valores
console.log(9 === "9"); // Resultado: false, compara valor e tipo
console.log(9 != "9"); // Resultado: false, compara valores
console.log(9 !== "9"); // Resultado: true, compara valor e tipo

// 11 - Operadores lógicos na prática
/*
Operadores lógicos (`&&`, `||`, `!`) combinam e invertem valores booleanos.
*/
console.log(true && true); // Resultado: true, ambos são verdadeiros
console.log(true && false); // Resultado: false, um é falso
console.log(5 > 2 && 2 < 10); // Resultado: true, ambas as condições são verdadeiras
console.log(5 > 2 && "Matheus" === 1); // Resultado: false, uma condição é falsa
console.log(10 > 2 || 5 > 100); // Resultado: true, uma das condições é verdadeira
console.log(!50 > 10); // Resultado: false, a negação inverte o valor

// 12 - Valores nulos ou indefinidos
/*
`null` e `undefined` representam valores vazios ou não definidos.
*/
console.log(typeof null, typeof undefined); // Resultado: "object undefined"
console.log(null === undefined); // Resultado: false, são tipos diferentes
console.log(null == undefined); // Resultado: true, ambos são vazios
console.log(null == false); // Resultado: false, null não é booleano
console.log(undefined == false); // Resultado: false, undefined não é booleano

// 13 - Mudança de tipos
/*
Operações entre tipos diferentes podem ter resultados inesperados.
*/
console.log(5 * null); // Resultado: 0, null é tratado como 0 em multiplicação
console.log("teste" * "opa"); // Resultado: NaN, strings não podem ser multiplicadas
console.log("10" + 1); // Resultado: "101", concatena a string com o número
console.log("10" - 1); // Resultado: 9, a string é convertida para número e subtraída
