/*
Programação Assíncrona
----------------------
Programação assíncrona é um paradigma que permite ao código continuar executando outras tarefas 
enquanto aguarda uma operação demorada, como a leitura de um arquivo ou o carregamento de dados 
de um servidor, ser concluída.

Em operações síncronas, cada linha de código é executada uma após a outra, o que significa que, 
se uma tarefa demorar, o restante do código fica "preso" até que essa tarefa termine. 
Isso pode ser problemático em aplicações que precisam de alta performance ou que exigem respostas rápidas, 
como interfaces de usuário interativas ou sistemas de servidores web.

Com a programação assíncrona, podemos iniciar uma operação e "deixá-la em execução em segundo plano", 
permitindo que o código continue sendo executado enquanto essa operação ainda está em andamento.
Assim que a operação termina, ela "avisa" o código que seu resultado está pronto, e a execução do fluxo
pode continuar a partir daquele ponto, sem interromper o restante do código.

Alguns dos recursos mais usados para implementar programação assíncrona em JavaScript são:
1. **Callbacks**: Funções que são passadas como argumento e executadas depois que uma operação assíncrona termina.
2. **Promises**: Um objeto que representa a eventual conclusão (ou falha) de uma operação assíncrona e seu valor 
resultante.
3. **Async/Await**: Uma sintaxe mais recente, baseada em Promises, que torna o código assíncrono mais legível 
e fácil de escrever.

Exemplo de casos onde a programação assíncrona é usada:
- Requisições a APIs e carregamento de dados externos.
- Leituras de arquivos ou operações de banco de dados.
- Operações que envolvem temporizadores, como setTimeout e setInterval.

A programação assíncrona é essencial para tornar o código mais eficiente, evitando que a aplicação
fique bloqueada enquanto espera pela conclusão de operações demoradas.
*/

// const { reject } = require("async");


//Função setTimeout
/* 
A função setTimeout é um exemplo de programação assíncrona em JavaScript. Com ela, é possível agendar uma ação
para ser executada após um intervalo de tempo especificado, sem interromper o restante do código. 

Ao chamar setTimeout, definimos uma função e um tempo (em milissegundos) como parâmetros. O código continua 
sendo executado, e, após o tempo determinado, a função passada ao setTimeout é executada. 
Esse processo permite que operações possam 
ocorrer "em segundo plano", sem bloquear o fluxo principal do programa.

No exemplo abaixo, as mensagens de "Ainda não executou" e "Ainda não executou2" são exibidas primeiro, enquanto o setTimeout
aguarda os 2000ms para então mostrar "Executou depois de 2000ms". Isso exemplifica como a programação assíncrona permite 
o agendamento de tarefas sem interromper a execução do restante do código.
*/

console.log("Ainda não executou"); // Executa imediatamente
setTimeout(function () {
    console.log("Executou depois de 2000ms"); // Executa após 2000ms (2 segundos)
}, 2000);
console.log("Ainda não executou2"); // Executa imediatamente após a primeira mensagem

// Função setInterval
/* 
A função setInterval é uma função de programação assíncrona que permite a execução repetida de um trecho de código
em intervalos de tempo constantes. Ao contrário de setTimeout, que executa a função uma única vez após o tempo especificado, 
setInterval continua executando a função indefinidamente a cada intervalo de tempo definido, até que seja interrompido.

Aqui, no exemplo, setInterval executa a função a cada 3000ms (ou 3 segundos), imprimindo "Intervalo do setInterval" no console
a cada 3 segundos. Esse recurso é útil para tarefas que precisam ocorrer repetidamente, como atualizar dados ou criar um
relógio, mas deve ser utilizado com cuidado para evitar loops infinitos ou execução desnecessária de funções que podem afetar
o desempenho.

Para interromper o setInterval, é possível usar o método clearInterval() e passar como argumento o ID do intervalo retornado
por setInterval.
*/

console.log("Ainda não começou"); // Executa imediatamente
// setInterval(function () {
//     console.log("Intervalo do setInterval"); // Executa a cada 3000ms (3 segundos)
// }, 3000);
console.log("Espere ainda não começou"); // Executa imediatamente após a primeira mensagem

// Promises
/* 
Promises são objetos da programação assíncrona no JavaScript que representam um valor que pode estar disponível
agora, no futuro, ou nunca. São úteis para operações que levam tempo para serem concluídas, como chamadas de API, leitura
de arquivos, ou temporizadores, pois permitem que o código continue executando sem precisar aguardar o resultado imediato.

Uma Promise pode estar em um dos seguintes estados:
  - Pending: estado inicial, ainda não foi concluída.
  - Fulfilled: foi concluída com sucesso e o valor está disponível.
  - Rejected: ocorreu algum erro durante a execução.

No exemplo, a Promise é criada com `Promise.resolve(5 + 5)`, que resolve automaticamente com o valor `10`. 
A execução é então tratada em uma cadeia de `.then()`, onde podemos acessar e transformar o valor resolvido.
 
  - `.then()` manipula o valor da Promise e retorna uma nova Promise com o valor atualizado.
  - A execução dos `.then()` é sequencial: cada um usa o valor retornado do `.then()` anterior.
*/

const promessa = Promise.resolve(5 + 5);
console.log("Algum resultado"); // Executa imediatamente

promessa
    .then((value) => {
        console.log(`A soma é ${value}`); // Imprime "A soma é 10"
        return value;
    })
    .then((value) => value - 1) // Subtrai 1 do valor (10), retornando 9
    .then((value) => console.log(`Agora é ${value}`)); // Imprime "Agora é 9"

console.log("Novo Resultado"); // Executa imediatamente após a primeira mensagem

// Falhas usando Promise
/* 
Promises podem conter erros se, por exemplo, uma operação gera um valor inesperado ou não numerável.
No exemplo abaixo, temos uma multiplicação incorreta (4 * "maxwell") que gera `NaN`, resultando em um erro.

Usamos `catch` para capturar o erro gerado:
  - O `catch` é um manipulador de erro para Promises que permite interceptar exceções, facilitando o tratamento
    de falhas em operações assíncronas sem quebrar a execução do programa.
  - Caso o valor gerado seja `NaN`, lançamos um erro customizado usando `throw new Error("Valor inválido")`,
    que o `catch` então captura e exibe.

  Esse tipo de tratamento é importante para garantir uma execução confiável, mesmo em caso de erros.
*/

Promise.resolve(4 * "maxwell") // A multiplicação inválida resulta em NaN
    .then((n) => {
        if (Number.isNaN(n)) {
            throw new Error("Valor inválido"); // Lança um erro customizado
        }
    })
    .catch((err) => console.log(`Um erro ocorreu: ${err}`)); // Captura e exibe o erro

// Rejeitando Promises
/* 
Rejeitar uma Promise ocorre quando, ao invés de um erro ser gerado automaticamente, nós manualmente "rejeitamos" a operação.
Isso é feito com o método `reject`, útil quando queremos sinalizar que uma condição específica não foi atendida.

No exemplo abaixo, a função `checkNumber` retorna uma Promise que será:
  - "resolvida" com uma mensagem se `b` for maior que 10.
  - "rejeitada" com uma mensagem de erro se `b` for 10 ou menos, utilizando `reject(new Error("Numero muito baixo"))`.

No código:
  - `a` e `b` são Promises para `checkNumber`, passando 20 e 11 como argumentos, respectivamente.
  - `then` captura o resultado de uma Promise resolvida e exibe o valor.
  - `catch` captura a Promise rejeitada e exibe o erro.
  Isso permite tratar casos de sucesso e rejeição de forma organizada.
*/

function checkNumber(b) {
    return new Promise((resolve, reject) => {
      if (b > 10) {
        resolve("Número é maior que 10"); // Resolve a Promise
      } else {
        reject(new Error("Número muito baixo")); // Rejeita a Promise
      }
    });
  }
  
  const a = checkNumber(20); // Deve ser resolvida
  const b = checkNumber(5);  // Deve ser rejeitada
  
  a.then((v) => console.log(`O resultado é ${v}`)).catch((err) =>
    console.log(`Um erro ocorreu: ${err}`)
  );
  b.then((v) => console.log(`O resultado é ${v}`)).catch((err) =>
    console.log(`Um erro ocorreu: ${err}`)
  );

// Resolvendo várias Promises
/*
O método `Promise.all` permite resolver várias Promises ao mesmo tempo. 
Ele aceita um array de Promises como entrada e retorna uma única Promise que:
  - Será resolvida quando todas as Promises no array forem resolvidas, retornando um array com os valores resolvidos.
  - Será rejeitada se qualquer uma das Promises for rejeitada, disparando o erro assim que ocorre.

No exemplo:
  - `p1` é uma Promise que será resolvida após 1 segundo com o valor 10.
  - `p2` é uma Promise resolvida imediatamente com o valor 20.
  - `p3` é uma Promise que será resolvida imediatamente com o valor 30 (já que a condição `30 > 10` é verdadeira).

Quando todas as Promises (p1, p2 e p3) são resolvidas, 
`Promise.all` retorna uma Promise com um array dos valores `[10, 20, 30]`, exibido no console pelo método `then`.
*/

const p1 = new Promise((resolve) => {
    setTimeout(function () {
      resolve(10);
    }, 1000);
  });
  
  const p2 = Promise.resolve(10 + 10);
  
  const p3 = new Promise((resolve, reject) => {
    if (30 > 10) {
      resolve(30);
    } else {
      reject("Erro!");
    }
  });
  
  Promise.all([p1, p2, p3]).then((values) => console.log(values)); // Saída: [10, 20, 30]
  
//Async Functions
/*As async functons são funções que retornam Promises, cosequentimente há uma possibilidade de receber o resultado delas,
depois, além da utilização dos métodos de Promise */

async function somaComDelay(c,d) {
    return c + d
}
somaComDelay(2,4).then((value) => {
    console.log(`O valor da soma é ${value}`)
})
console.log("Teste Async")

// Instrução async await
/*
A instrução `await` é usada para pausar a execução de uma função `async` até que a Promise seja resolvida,
simplificando o tratamento assíncrono sem precisar usar `.then()` diretamente.

Neste exemplo:
  - A função `resolverComDelay` cria uma Promise que resolve após 5 segundos.
  - Em `chamadaAsync`, usamos `await resolverComDelay()` para esperar a resolução da Promise.
  - O código dentro da função `chamadaAsync` segue uma ordem linear, o que facilita a leitura e entendimento.

Ao usar `await`, o código fica mais fácil de manter, especialmente em situações onde precisamos esperar múltiplas Promises de maneira sequencial.
*/

function resolverComDaley() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve("Resolveu a Promise");
    }, 5000);
  });
}

async function chamadaAsync() {
  console.log("Chamando a promise, e esperando o resultado");
  const result = await resolverComDaley();
  console.log(`O resultado chegou: ${result}`);
}

chamadaAsync(); // Executa a função e aguarda o resultado da Promise antes de seguir

//Genarators
/*Generators funcionam de forma semelhante as promises, ações pode ser pausadas e continuadas depois, temos novos
operadores, como o function* e yield*/

function* generator(){
  yield 1
  yield 2
}
const gen = generator()
console.log(gen.next().value)
console.log(gen.next().value)
