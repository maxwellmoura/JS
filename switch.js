// Switch Case
/* O 'switch' é uma estrutura de controle útil para organizar múltiplas condições, 
especialmente quando temos muitos 'if/else'. Cada 'if' é representado por um 'case', 
e o 'break' é utilizado para interromper a execução após encontrar o caso correspondente.
O 'default' funciona como um 'else', ou seja, é executado se nenhum dos 'case' for atendido. */

const job = "Tecnico";

switch (job) {
    case "Programador":
        console.log("Você é um programador");
        break; // Interrompe a execução aqui, se o 'case' for atendido.
    case "Enfermeiro":
        console.log("Você é um enfermeiro");
        break;
    case "Tecnico":
        console.log("Você é um técnico");
        break;
    case "Advogado":
        console.log("Você é um advogado");
        break;
    default:
        console.log("Profissão não encontrada"); // Executa se nenhum 'case' corresponder.
}

// Switch sem 'break' (errado)
/* Sem o uso do 'break', o JavaScript continua a executar todos os 'case' subsequentes, 
mesmo que um 'case' já tenha sido atendido. Isso pode causar comportamentos indesejados. */

const l = 100;

switch (l) {
    case 200:
        console.log("l é 200");
    case 100:
        console.log("l é 100"); // Sem 'break', ele continua executando os próximos cases.
    case 10:
        console.log("l é 10");
    case 300:
        console.log("l é 300");
    default:
        console.log("l não encontrado"); // Todos os 'case' acima serão executados até chegar aqui.
}

// Conveção de Nomes de Variáveis
/* Em JavaScript, a convenção mais comum para nomear variáveis é o formato CamelCase.
Essa prática melhora a legibilidade do código. */

let programdorcadastrado; // Não recomendado, difícil de ler.
let programador_cadastrado; // Convencional em algumas linguagens, mas não comum em JavaScript.
let ProgramadorCadastrado; // PascalCase, geralmente usado para classes ou construtores.
let programadorCadastrado; // CamelCase: a prática mais comum e recomendada.
