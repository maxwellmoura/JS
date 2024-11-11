// Introdução a Bugs, Debugs e Validações

/*
- **Bugs**
    - Bugs são erros ou comportamentos inesperados que ocorrem no software, impedindo seu funcionamento correto.
    - Podem surgir devido a falhas de lógica, erros de sintaxe, interações inesperadas entre diferentes partes do código, 
      ou até mesmo limitações nos dados de entrada.
    - Bugs afetam a experiência do usuário e podem comprometer a segurança, performance ou integridade de um sistema.

- **Debugging (Depuração)**
    - Debugging é o processo de encontrar e corrigir bugs no código.
    - Para isso, usamos ferramentas como `console.log()`, pontos de interrupção (breakpoints),
     e depuradores integrados nos editores de código.
    - Depurar ajuda a entender como o código está sendo executado, permitindo observar valores das variáveis 
    e o fluxo de execução.
    - O objetivo do debugging é identificar a causa raiz dos problemas e aplicar correções.

- **Validações**
    - Validações são verificações feitas no código para garantir que os dados de entrada 
    ou saída atendam aos requisitos especificados.
    - No front-end, validações ajudam a confirmar que os usuários fornecem dados corretos antes de enviar para o servidor.
    - No back-end, garantem que os dados manipulados estejam no formato certo e que o sistema funcione com segurança.
    - Validações reduzem a chance de bugs e melhoram a integridade e segurança do sistema, 
    mantendo um fluxo de dados confiável.
*/

// Strict Mode
/* 
- **Strict Mode**:
    - O "strict mode" (modo estrito) é uma maneira de desenvolver JavaScript de forma mais rigorosa.
    - Deve ser declarado no topo do arquivo ou dentro de uma função com a expressão `"use strict";`.
    - Este modo não limita os recursos do JavaScript, mas ajuda a programar de maneira mais segura e padronizada,
      identificando erros que, sem ele, podem passar despercebidos.
    - Muitas bibliotecas JavaScript populares são escritas em strict mode, ajudando a evitar comportamentos inesperados e a melhorar a segurança do código.

- **Regras e Restrições do Strict Mode**:
    - **Declarações de Variáveis**: O strict mode exige que todas as variáveis sejam declaradas antes de serem usadas. 
      Caso contrário, resultará em erro.
        ```javascript
        "use strict";
        // Erro: opa is not defined
        opa = "teste"; 
        ```

    - **Propriedades de Palavras Reservadas**: Algumas palavras reservadas, como `undefined`, não podem ser sobrescritas.
        ```javascript
        "use strict";
        // Erro: Cannot assign to 'undefined'
        const undefined = 10;
        ```

    - **Propriedades Imutáveis**: Não é permitido apagar propriedades fixas, como o `length` de arrays ou outros objetos nativos.
        ```javascript
        "use strict";
        // Erro: Cannot delete property 'length'
        delete [].length;
        ```

    - **Benefícios**:
        - Evita erros comuns e facilita a depuração.
        - Melhora a segurança ao restringir certas práticas inseguras.
        - Promove um código mais consistente e sustentável.
*/
"use strict";
/* 
Ao ativar o strict mode no JavaScript com a declaração `"use strict";`, o código é executado de maneira mais restritiva.
No exemplo abaixo:
- A declaração `const opa = "teste";` define uma variável constante chamada `opa` com o valor `"teste"`.
- No strict mode, se tentarmos fazer algo não permitido (como declarar uma variável sem `let`, `const` ou `var`), o código geraria um erro.
- O strict mode é especialmente útil para encontrar erros ocultos e tornar o código mais seguro e confiável.

Exemplo de declaração segura e correta no strict mode:
*/

const opa = "teste"; // Correto: Variável declarada com `const`
console.log(opa); // Saída: "teste"

// Método de debug: console.log
/* 
O método `console.log()` é uma ferramenta básica e muito útil para debugar o código em JavaScript.
- Ele exibe mensagens no console do navegador ou do ambiente de desenvolvimento.
- É útil para acompanhar o valor de variáveis ao longo do código e entender o fluxo de execução.

Exemplo abaixo:
- Inicialmente, `a` vale 1 e `b` vale 2.
- Em um bloco `if`, `a` recebe o valor de `b + 2`.
- Dentro do `for`, `a` é incrementado e impresso a cada iteração.
- Ao final, outro `if` altera `a` e, em seguida, seu valor final é exibido.
*/

let a = 1;
let b = 2;

if (a == 1) {
    a = b + 2;
}
console.log(a); // Exibe 4 após o `if`

for (let i = 0; i < b; i++) {
    a = a + 2;
    console.log(a); // Exibe o valor atualizado de `a` em cada iteração do `for`
}

if (a > 5) {
    a = 25;
}
console.log(a); // Exibe 25, valor final de `a` após a última condição

// Método de debug: debugger
/*
O `debugger` é uma instrução que pausa a execução do código, permitindo a análise do estado das variáveis e o
comportamento do código no console do navegador.
- Quando o navegador encontra o `debugger`, a execução é pausada automaticamente.
- Ao pausar, o desenvolvedor pode inspecionar valores das variáveis, seguir o fluxo de execução e avançar linha por linha.
- É útil para analisar o código em tempo real, especialmente em trechos de lógica complexa.
*/

let c = 1;
let d = 2;

if (c == 1) {
    c = d + 2;
}

//debugger; // O código pausa aqui, permitindo a inspeção de `c` e `d`

for (let i = 0; i < d; i++) {
    c = c + 2;
}

console.log("executou o loop"); // Esta mensagem é exibida após o loop

//debugger; // Outra pausa para análise do valor atualizado de `c`

if (c > 5) {
    c = 25;
}

console.log(c); // Exibe o valor final de `c` após todas as condições serem executadas


// Tratamento de dado por função
/*
Nunca devemos confiar no dado que é passado pelo usuário.
Sempre devemos criar validações e tratamento para garantir que o dado seja confiável e adequado ao uso.
Aqui, fazemos a validação para garantir que o valor seja um número.
*/

function checkNumber(n) {
    // Converte o valor para um número, caso possível
    const result = Number(n);
    
    // Verifica se a conversão para número resultou em NaN (Not-a-Number), indicando que o valor não era numérico
    if (Number.isNaN(result)) {
        console.log("Valor incorreto!");
        return;
    }
    
    console.log("Valor correto!");
    return result; // Retorna o número validado se for válido
}

// Testando com diferentes tipos de entrada
checkNumber(5);       // Saída: "Valor correto!" - Já é um número
checkNumber("10");    // Saída: "Valor correto!" - String numérica "10" é convertida para o número 10

/* 
Explicação:
A string "10" passa na validação porque o método Number("10") converte a string para o valor numérico 10, 
então Number.isNaN(10) retorna false, indicando que o valor é um número.
*/

checkNumber({});      // Saída: "Valor incorreto!" - Um objeto não pode ser convertido para um número
checkNumber("teste"); // Saída: "Valor incorreto!" - String não numérica não pode ser convertida para um número

// Exceptions
/*
As exceptions são erros que nós geramos intencionalmente no programa para interromper a execução.
Esse recurso força o programa a ser abortado ao encontrar uma condição inválida ou inesperada,
como uma verificação de valor. Para isso, utilizamos a expressão `throw new Error`, passando uma
mensagem de erro como argumento.
*/

let x = 10;

// Verifica se o valor de x é diferente de 11
if (x !== 11) {
    // Gera uma exception com uma mensagem explicativa
   // throw new Error("Valor de X não pode ser diferente de 11");
}

// Quando o valor de x é diferente de 11, a execução será interrompida, e a mensagem do erro será exibida.
// Isso é útil para validar condições essenciais para a continuidade do programa e evitar comportamentos indesejados.

// Try Catch
/*
Try catch é um recurso comum nas linguagens de programação, permitindo tratar erros de maneira controlada.
No bloco `try`, tentamos executar uma operação; se ocorrer um erro, a execução é desviada para o bloco `catch`.
Isso é útil para identificar erros durante o desenvolvimento e construir aplicações mais robustas e seguras.

No exemplo abaixo, tentamos realizar uma soma com variáveis que não foram declaradas.
Ao ocorrer o erro, o bloco `catch` é acionado, exibindo uma mensagem no console.
*/

try {
    // Tenta realizar a operação de soma entre duas variáveis não declaradas, 'x' e 'y'
    const soma = x + y;
} catch (error) {
    // O erro gerado pelo código acima é capturado e exibido com uma mensagem no console
    console.log(`Erro no sistema ${error}`);
}

// O bloco `catch` evita que o erro quebre a execução do restante do código, 
// permitindo que o programa continue funcionando após o tratamento da exceção.

//Finally
/*O finally é uma instrução que vai depois do bloco try catch, ela é executada independente de haver algum erro ou nao
no try */

try{
    const value = checkNumber("asd")
    if(!value){
        throw new Error("Valores inválidos")
    }
}catch(error){
    console.log(`Opa, aconteceu um problema ${error}`)
}finally{
    console.log("O código foi executado!")
}

// Assertions
/*
As assertions são verificações utilizadas para garantir que determinadas condições em nosso código
sejam atendidas. Se uma condição não é atendida, um erro é gerado para alertar o desenvolvedor, 
mas essas mensagens não devem ser exibidas para o usuário final. Esse recurso é útil para identificar
erros ou inconsistências durante o desenvolvimento.

No exemplo abaixo, `checkArray` lança um erro caso o array esteja vazio, alertando o desenvolvedor
de que o array precisa ter elementos para seguir com a execução.
*/

function checkArray(arr) {
    // Verifica se o array está vazio e lança um erro se estiver
    if (arr.length === 0) {
        throw new Error("O array precisa ter elementos");
    } else {
        // Caso o array não esteja vazio, exibe o número de elementos
        console.log(`O array tem ${arr.length} elementos`);
    }
}
// checkArray([]) iria apresentar o erro no sistema
// Abaixo, o teste é feito com um array de elementos, evitando o erro
checkArray([1, 2, 3]);



