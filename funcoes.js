// Funções permitem que a gente divida o código em partes menores e reutilizáveis, 
// ajudando a evitar a repetição e a organizar melhor o código.

// Para criar uma função, usamos a palavra-chave 'function', 
// em seguida damos um nome para identificá-la, e dentro dos parênteses () 
// colocamos os parâmetros (caso a função precise deles). 
// O corpo da função, onde o código é executado, fica entre chaves {}.

function minhaFuncao() {
    console.log("Testando");
}
minhaFuncao(); // Chamando a função 'minhaFuncao'.

// Funções também podem ser atribuídas a variáveis. 
// Nesse caso, usamos uma função anônima, ou seja, sem nome, 
// e atribuímos à variável 'minhaFuncaoEmVariavel'. 
// Diferente de funções nomeadas, funções em variáveis não podem ser reatribuídas ao longo do projeto.

const minhaFuncaoEmVariavel = function () {
    console.log("Função na variável");
};
minhaFuncaoEmVariavel(); // Chamando a função atribuída à variável.

// Funções podem receber parâmetros, que são valores passados quando a função é chamada.
// Esses parâmetros são usados dentro do corpo da função para realizar alguma operação.

function funcaoComParametro(txt) {
    console.log(`Imprimindo: ${txt}`); // Exibindo o valor passado como argumento.
}
funcaoComParametro("Imprimindo alguma coisa"); // Passando "Imprimindo alguma coisa" como argumento.

// Retorno das Funções
// Funções podem retornar um valor usando a palavra-chave 'return'.
// O retorno permite que a função processe um valor e o envie de volta ao ponto onde foi chamada.

const a = 10;
const b = 20;
const c = 30;
const d = 40;

// Esta função faz cálculos usando quatro números passados como parâmetros.
function calculo(n1, n2, n3, n4) {
    return n1 + n2 * n3 - n4; // O resultado da operação será retornado.
}

const resultado = calculo(a, b, c, d); // Armazenando o resultado da função na variável 'resultado'.
console.log(resultado); // Exibindo o resultado armazenado.

// Alternativamente, podemos chamar a função diretamente dentro de 'console.log' sem usar uma variável temporária.
console.log(calculo(a, b, c, d)); // O resultado será o mesmo.


// Escopo das Funções
/* Funções possuem um escopo próprio, separado do escopo global do programa. 
Isso significa que podemos declarar variáveis dentro de uma função sem afetar o escopo externo. */

let y = 10;
function testandoEscopo() {
    let y = 20; // Variável 'y' dentro da função não afeta a 'y' do escopo global.
    console.log(`Y dentro da função é: ${y}`);
}
testandoEscopo(); // Mostra 'Y dentro da função é: 20'
y = 15; // Alterando o valor de 'y' no escopo global.
console.log(`Y fora da função é: ${y}`); // Mostra 'Y fora da função é: 15'
testandoEscopo(); // Chama a função novamente, exibindo o valor local de 'y'.

// Escopo aninhado (Nested Scopes)
/* Usando 'let' e 'const', é possível criar variáveis em escopos aninhados, ou seja, 
em blocos de código internos que possuem seu próprio escopo separado do exterior. */

let m = 10;
function escopoAninhado() {
    let m = 20; // 'm' local da função.
    if (true) {
        let m = 30; // 'm' dentro do bloco 'if'.
        if (true) {
            let m = 40; // 'm' dentro do bloco aninhado.
            console.log(m); // Mostra 40, valor do escopo mais interno.
        }
        console.log(m); // Mostra 30, valor do escopo do 'if'.
    }
    console.log(m); // Mostra 20, valor da função.
}
escopoAninhado();
console.log(m); // Mostra 10, valor do escopo global.

// Arrow Functions
/* Arrow functions são uma forma compacta de criar funções. Elas possuem uma sintaxe reduzida 
e são amplamente usadas em frameworks modernos como React, Angular, e Vue.js. */

const arrowFunction = () => {
    console.log("Esta é uma arrow function");
};
arrowFunction(); // Chamando a arrow function.

const parOuImpar = (n) => {
    if (n % 2 === 0) {
        console.log("Par");
        return;
    }
    console.log("Ímpar");
};
parOuImpar(5); // Mostra 'Ímpar'
parOuImpar(2); // Mostra 'Par'

// Arrow function resumida
/* Para funções simples, é possível omitir as chaves '{}' e o 'return', 
criando uma versão ainda mais compacta da função. */

const raizQuadrada = (x) => x * x; // Forma resumida.
console.log(raizQuadrada(4)); // Mostra 16

const helloWord = () => console.log("Hello World");
helloWord(); // Mostra "Hello World"

// Argumentos opcionais
/* Em funções, podemos definir valores padrão para parâmetros. 
Se um argumento não for passado, o valor padrão será utilizado. */

const multiplicacao = (m, n = 2) => m * n; // 'n' tem valor padrão de 2.
console.log(multiplicacao(5)); // Usa o valor padrão de 'n', resultando em 10.
console.log(multiplicacao(5, 3)); // Passando '3' para 'n', resultado 15.

// Exemplo do mundo real
const greeting = (nome) => {
    if (!nome) {
        console.log("Olá!");
        return;
    }
    console.log(`Olá, ${nome}!`);
};
greeting(); // Mostra "Olá!" (sem nome).
greeting("Maxwell"); // Mostra "Olá, Maxwell!"

// Argumento com valor default
/* Quando um valor padrão é atribuído a um parâmetro, ele será utilizado se nenhum valor for passado 
durante a chamada da função. Caso contrário, o valor passado substitui o padrão. */

const saudacao = (nome, saudar = "Olá") => `${saudar}, ${nome}!`;
console.log(saudacao("Moura")); // Usa o valor padrão "Olá", resultado: "Olá, Moura!"
console.log(saudacao("Maxwell", "Bom dia")); // Passando "Bom dia", resultado: "Bom dia, Maxwell!"

// Baseado em loops
/* Podemos usar loops dentro de funções para repetir operações. Aqui, usamos um laço 'for' 
para repetir o texto um número de vezes definido no argumento. */

const repeteTexto = (texto, repete = 2) => {
    for (let i = 0; i < repete; i++) {
        console.log(texto);
    }
};
repeteTexto("Testando"); // Repete "Testando" 2 vezes (valor padrão).
repeteTexto("Agora repete 5 vezes", 5); // Repete "Agora repete 5 vezes" 5 vezes.


/* Closure, é um conjunto de funções onde temos o reapreoveitamento do escopo interno de uma função
esse escopo nao pode ser utilizado fora do bloco*/
function soFunction(){
    let txt = "Alguma Coisa"
    function display(){
        console.log(txt)
    }
    display()
}
soFunction()

// Função que retorna outra função, criando uma closure
const multiplicacaoClosure = (n) => {
    return (m) => {
        return n * m; // 'n' é capturado pela closure e mantém seu valor
    }
}

// Criamos duas instâncias da função com valores diferentes para 'n'
const c1 = multiplicacaoClosure(5); // Aqui, 'n' será 5
const c2 = multiplicacaoClosure(10); // Aqui, 'n' será 10

// Ao chamar 'c1' e 'c2', nada será impresso, pois ainda não fornecemos o segundo valor
console.log(c1); // [Function: m] - A função é retornada, mas não executada
console.log(c2); // [Function: m]

// Agora, passamos o valor 'm' para executar a multiplicação
console.log(c1(5));  // 25 - (5 * 5)
console.log(c2(10)); // 100 - (10 * 10)

//Outro exemplo incrementação de valor inicial
const incrementoClosure = (inicial) =>{
    let contador = inicial
    return () => {
        contador += 1
        return contador
    }
}
//Criando uma instância da função com valor incial de 0
const contador1 = incrementoClosure(0)
console.log(contador1()) //1
console.log(contador1()) //2
console.log(contador1()) //3

//Criando uma nova instância com valor inicial diferente
const contador2 = incrementoClosure(10)
console.log(contador2()) //11
console.log(contador2()) //12
console.log(contador2()) //13
/*Quando você cria incrementoClosure(0), o valor inicial inicial é armazenado na variável contador, 
e a função retornada tem acesso a esse valor, mesmo após a execução inicial.
A cada chamada da função retornada, o valor de contador é incrementado e retornado, 
aproveitando o fato de que a closure mantém o estado entre execuções*/

/*Recursão, umso permite a função se autoinvocar continuamente, uma especia de loop, ele vai chamar ate que a gente
defina uma condição final para para a execução*/

// Função recursiva que diminui 'n' até que seja menor ou igual a 10
const ateDez = (n , m) =>{
    if(n <= 10){ // Condição de parada
        console.log("A função parou de executar!")
    }else{
        const x = n - m
        console.log(x)
        ateDez(x, m) // Chama a função recursivamente com o novo valor de 'x'
    }
}
// Chamando a função com n = 100 e m = 7
ateDez(100, 7) // A função vai diminuindo o valor de n em 7 a cada chamada até que ele se torne menor que 10, momento em que a recursão é interrompida.

//Outro exemplo com fatorial
function fatorial(x){
    if(x === 0){ // Caso base: o fatorial de 0 é 1
        return 1
    }else{
        return x * fatorial(x - 1) // Multiplica 'x' pelo fatorial de (x - 1)
    }
}
const num = 6
const result = fatorial(num)
console.log(`O fatorial do numero ${num} e ${result}`)