/* 
Arrays são listas que podem armazenar valores de qualquer tipo de dado. 
Os valores são definidos entre colchetes [] e separados por vírgulas (,).
*/
const lista = [1, 2, 3, 4, 5]; // Array de números
console.log(lista); // Exibe a lista no console
console.log(typeof lista); // Exibe o tipo do array (object)

const itens = ["Maxwell", true, 2, 3.14, []]; // Array com diferentes tipos de dados
console.log(itens); // Exibe o array 'itens'
console.log(typeof itens); // Exibe o tipo do array 'itens' (object)

/* 
Propriedades são informações associadas a objetos. Arrays também possuem propriedades, como "length", 
que pode ser acessada usando a notação de ponto ou colchetes (array.prop ou array['prop']).
*/
const numeros = [5, 6, 8, 9];
console.log(numeros.length); // Exibe a quantidade de elementos no array 'numeros'
console.log(numeros['length']); // Acessa a mesma propriedade usando colchetes

// Propriedades também existem para strings
const nome = "Maxwell";
console.log(nome.length); // Exibe o comprimento da string 'nome'

/* 
Podemos acessar elementos individuais de um array utilizando seus índices. 
Lembre-se que os índices começam em 0, ou seja, o primeiro elemento está na posição 0.
*/
const arr = ["a", "d", "f", "t", "o", "p"];
console.log(arr[0]); // Acessa o primeiro elemento (índice 0)
console.log(arr[3]); // Acessa o quarto elemento (índice 3)
console.log(arr[7]); // Tenta acessar um índice fora dos limites do array (indefinido)

/* 
Métodos são funções associadas a objetos. Eles são acessados usando a notação de ponto 
seguida de parênteses (). Arrays, strings e outros tipos de dados em JavaScript possuem métodos nativos.
*/

// Concatenando dois arrays com o método concat
const novosNumeros = [2, 4, 6];
const outroNumero = [1, 3, 5];
const todosOsNumeros = novosNumeros.concat(outroNumero); // Combina os dois arrays
console.log(todosOsNumeros); // Exibe o array concatenado

// Convertendo texto para letras maiúsculas usando o método toUpperCase
const text = "algum texto";
console.log(text.toUpperCase()); // Converte o texto para maiúsculas
console.log(typeof text.toUpperCase); // Verifica o tipo do método (function)

// Encontrando a posição de um caractere em uma string usando o método indexOf
console.log(text.indexOf("g")); // Retorna a posição do caractere 'g' na string 'text'

/* 
Objetos (Object Literals) são coleções de propriedades, que são pares de chave e valor.
Objetos são uma parte essencial da programação orientada a objetos em JavaScript.
*/
const person = {
    nome: "Maxwell",
    idade: 40,
    prof: "Programador"
};
console.log(person); // Exibe o objeto completo
console.log(person.nome); // Acessa a propriedade 'nome' do objeto
console.log(person.idade); // Acessa a propriedade 'idade' do objeto
console.log(person.prof); // Acessa a propriedade 'prof' do objeto
console.log(typeof person); // Verifica o tipo do objeto (object)

/* 
Adicionando e removendo propriedades em objetos. Para adicionar, usamos a notação de ponto e atribuímos um valor.
Para remover, usamos o operador delete na propriedade específica.
*/
const carros = {
    motor: 2.0,
    marca: "VW",
    modelo: "Tiguan",
    km: 20000
};
console.log(carros); // Exibe o objeto 'carros'

carros.portas = 4; // Adiciona a propriedade 'portas' ao objeto 'carros'
console.log(carros); // Exibe o objeto atualizado com a nova propriedade

delete carros.km; // Remove a propriedade 'km' do objeto 'carros'
console.log(carros); // Exibe o objeto após a remoção da propriedade 'km'
/*Diferença entre Arrays e Objetos e como utilizá-los adequadamente:
Arrays:
Arrays são usados para armazenar coleções ordenadas de dados.
Os elementos de um array são acessados por índices numéricos, que começam no valor 0.
Eles são ideais quando você precisa armazenar uma lista de itens semelhantes, 
onde a ordem dos elementos é importante (por exemplo, uma lista de números, 
nomes de produtos ou qualquer coleção de dados que precisa ser iterada ou acessada sequencialmente).
Exemplo de uso: lista de itens, resultados de busca, fila de processamento.*/
const frutas = ["maçã", "banana", "laranja"]; // Exemplo de array de strings
console.log(frutas[0]); // Acessa o primeiro item do array ("maçã")
/*Quando usar Arrays:
Quando você precisa armazenar uma coleção de dados ordenados, como uma lista de itens ou resultados de uma consulta.
Quando os dados precisam ser iterados (percorridos um por um) ou ordenados de alguma forma.
Quando a ordem dos dados é importante ou quando você frequentemente precisa acessar elementos com base em sua posição.*/


/*Objetos:
Objetos são usados para armazenar pares de chave-valor, onde cada valor está associado a uma chave única.
Ao contrário dos arrays, os objetos não têm uma ordem definida e são acessados por suas chaves, 
que podem ser strings (ou símbolos).
Objetos são ideais quando você precisa representar entidades mais complexas, como uma pessoa, um carro, 
ou qualquer coisa que tenha várias propriedades com significados específicos.
Exemplo de uso: armazenamento de dados estruturados, como informações de um usuário (nome, idade, email), 
produtos com suas características (nome, preço, descrição).*/
const carro = {
    marca: "Toyota",
    modelo: "Corolla",
    ano: 2022
}; // Exemplo de objeto com várias propriedades
console.log(carro.marca); // Acessa a propriedade "marca" do objeto ("Toyota")
/*Quando usar Objetos:
Quando você precisa representar entidades mais complexas que têm várias características (propriedades).
Quando os dados precisam ser acessados por chaves específicas ao invés de um índice numérico.
Quando você precisa adicionar ou remover propriedades facilmente e não se importa com a ordem dos dados.*/
// Definindo um objeto simples com duas propriedades: 'a' como string e 'b' como booleano.
const obj = {
    a: "teste",
    b: true
}
// Verificando se 'obj' é uma instância de 'Object', o que será verdadeiro para qualquer objeto literal.
console.log(obj instanceof Object)

// Definindo um segundo objeto com uma propriedade 'c', que é um array vazio.
const obj2 = {
    c: []
}
// Usando Object.assign() para copiar as propriedades de 'obj' para 'obj2'.
// Isso copia as propriedades de 'obj' para 'obj2' sem alterar o objeto original 'obj'.
Object.assign(obj2, obj)
console.log(obj2) // 'obj2' agora contém as propriedades de 'obj' junto com suas próprias.

// O método Object.keys() retorna um array contendo as chaves (nomes das propriedades) de um objeto.
// No caso de 'obj', ele retorna ['a', 'b'], e para 'obj2', ele retorna ['c', 'a', 'b'].
console.log(Object.keys(obj))
console.log(Object.keys(obj2))

// Object.keys() aplicado em 'carro' retornará as chaves ['marca', 'modelo'].
console.log(Object.keys(carro))

// Object.entries() retorna um array de arrays, onde cada subarray contém a chave e o valor de uma propriedade do objeto.
console.log(Object.entries(carro)) // Exemplo: [['marca', 'VW'], ['modelo', 'Tiguan']]

/* 
Mutação de Objetos:
Quando um objeto é atribuído a outra variável, a nova variável não cria uma cópia, 
mas sim uma referência ao mesmo objeto. Isso significa que qualquer alteração em um 
afeta o outro, pois ambos apontam para o mesmo espaço na memória.
*/

const a = {
    name: "João"
}
const b = a // 'b' agora é uma referência ao mesmo objeto que 'a'.
console.log(a) // Exibe o objeto { name: "João" }
console.log(b) // Exibe o mesmo objeto { name: "João" }
console.log(a === b) // Verdadeiro, pois ambos referenciam o mesmo objeto na memória.

// Adicionando uma nova propriedade 'age' ao objeto referenciado por 'a' (e também por 'b').
a.age = 31
console.log(a) // { name: "João", age: 31 }
console.log(b) // 'b' reflete a mesma mudança: { name: "João", age: 31 }

// Removendo a propriedade 'age' usando a referência 'b'.
// Como 'a' e 'b' apontam para o mesmo objeto, a alteração afeta ambos.
delete b.age
console.log(a) // { name: "João" }, 'age' foi removido
console.log(b) // Também reflete a remoção da propriedade 'age'

// Loops em arrays
/*
É muito comum percorrer arrays com estruturas de repetição como 'for' e 'while'.
Isso nos permite acessar e utilizar os elementos de forma eficiente, sem duplicar código.
*/

// Definindo um array de usuários
const users = ["Matheus", "Henrique", "João", "Maxwell", "Miguel"]

// Usando um loop 'for' para percorrer cada elemento do array
for (let i = 0; i < users.length; i++) {
    // Exibe o nome de cada usuário no console
    console.log(`Listando o usuário: ${users[i]}`)
}


// Demonstrando o uso dos métodos 'push' e 'pop' em arrays.

/* 
Métodos de manipulação de arrays:

- Push: adiciona um ou mais itens ao final do array.
- Pop: remove o último item do array.

Esses métodos são úteis para modificar dinamicamente os valores do array.
*/

// Definindo um array inicial com os valores ["a", "b", "c"].
const array = ["a", "b", "c"]
console.log(array) // Exibe ["a", "b", "c"]

// Adicionando um novo item "d" ao final do array usando o método 'push'.
array.push("d")
console.log(array) // Exibe ["a", "b", "c", "d"]

// Adicionando múltiplos itens "e", "f", "g" ao final do array de uma só vez.
array.push("e", "f", "g")
console.log(array) // Exibe ["a", "b", "c", "d", "e", "f", "g"]

// Removendo o último item do array usando o método 'pop'.
array.pop()
console.log(array) // Exibe ["a", "b", "c", "d", "e", "f"]

// Salvando o item removido pelo 'pop' em uma variável e exibindo-o.
const itemRemovido = array.pop()
console.log(itemRemovido) // Exibe "f", o item removido.
console.log(array) // Exibe ["a", "b", "c", "d", "e"], já sem o "f".

// Demonstrando o uso dos métodos 'shift' e 'unshift' em arrays.

/* 
Métodos de manipulação de arrays:

- Shift: remove o primeiro item do array.
- Unshift: adiciona um ou mais itens ao início do array.

Esses métodos são úteis quando queremos modificar o array a partir de sua primeira posição.
*/

// Definindo um array inicial com os valores [4, 5, 6].
const arrayShift = [4, 5, 6]
console.log(arrayShift) // Exibe [4, 5, 6]

// Adicionando os itens 1, 2, 3 ao início do array com 'unshift'.
arrayShift.unshift(1, 2, 3)
console.log(arrayShift) // Exibe [1, 2, 3, 4, 5, 6]

// Adicionando o item 0 ao início do array.
arrayShift.unshift(0)
console.log(arrayShift) // Exibe [0, 1, 2, 3, 4, 5, 6]

// Removendo o primeiro item do array usando 'shift' e armazenando-o na variável 'numbers'.
const numbers = arrayShift.shift()
console.log(numbers) // Exibe 0, o item removido.
console.log(arrayShift) // Exibe [1, 2, 3, 4, 5, 6], já sem o 0.

// Demonstrando o uso dos métodos 'indexOf' e 'lastIndexOf' em arrays.

/*
- indexOf: retorna o índice da primeira ocorrência de um elemento no array.
  Caso o elemento não seja encontrado, retorna -1.

- lastIndexOf: retorna o índice da última ocorrência de um elemento no array.
  Isso é útil quando há múltiplas ocorrências de um elemento no array e queremos localizar a última.

Esses métodos são utilizados para encontrar a posição de um elemento dentro do array.
*/

// Definindo um array com alguns elementos, incluindo "Abacate" repetido.
const myElements = ["Morango", "Maçã", "Abacate", "Laranja", "Abacate"]

// Encontrando o índice da primeira ocorrência de "Maçã".
console.log(myElements.indexOf("Maçã")) // Exibe 1 (posição de "Maçã" no array)

// Encontrando o índice da primeira ocorrência de "Abacate".
console.log(myElements.indexOf("Abacate")) // Exibe 2 (primeira ocorrência de "Abacate")

// Acessando diretamente o elemento na posição 2 do array.
console.log(myElements[2]) // Exibe "Abacate"

// Acessando o "Abacate" usando o índice retornado por indexOf.
console.log(myElements[myElements.indexOf("Abacate")]) // Exibe "Abacate"

// Encontrando o índice da última ocorrência de "Abacate".
console.log(myElements.lastIndexOf("Abacate")) // Exibe 4 (última ocorrência de "Abacate")

// Tentando encontrar "Mamão" no array (não existe no array).
console.log(myElements.lastIndexOf("Mamão")) // Exibe -1 (não encontrado)

// Demonstrando o uso do método 'slice' em arrays.

/* 
- O método slice() é usado para criar um novo array com uma fatia (subconjunto) de um array existente.
- Ele recebe dois argumentos: o índice de início (inclusive) e o índice de fim (exclusivo). 
O elemento no índice final não é incluído no novo array.
- Se o índice final não for especificado, o slice retorna todos os elementos 
a partir do índice inicial até o final do array.
*/

// Definindo um array de teste.
const testeSlice = ["a", "b", "c", "d", "e", "f", "g", "h"]

// Extraindo uma fatia do array de índice 2 até 4 (não inclui o elemento no índice 4).
const subArray = testeSlice.slice(2, 4)
console.log(subArray) // Exibe ['c', 'd']

// O array original permanece inalterado.
console.log(testeSlice) // Exibe ["a", "b", "c", "d", "e", "f", "g", "h"]

// Extraindo uma fatia que inclui o elemento no índice 4, somando 1 ao índice final.
const subArray2 = testeSlice.slice(2, 4 + 1)
console.log(subArray2) // Exibe ['c', 'd', 'e']

// Tentando extrair uma fatia fora dos limites do array.
const subArray3 = testeSlice.slice(10, 20)
console.log(subArray3) // Exibe [] (não há elementos nos índices indicados)

// Extraindo uma fatia a partir do índice 2 até o final do array.
const subArray4 = testeSlice.slice(2)
console.log(subArray4) // Exibe ['c', 'd', 'e', 'f', 'g', 'h']

//forEach
/*O forEach é como uma estrutura de for ou while porém é um método, que percorre cada um dos elementos do array
para alguuns sua sitaxe pode ser mais simples. */

//COLOCAR AQUI O CONTEUDO DO PC

//Metodos de String.
/*As string tambem são objetos, ou seja, tem métodos e propriedades, Alguma são muito semelhantes aos arrays,
Note que voces podem utilizar length, em uma string ou em um array, tambem pode acessar pelo seu índice */

// Exemplo de uso do método trim.

/*
- O método trim() remove espaços em branco no início e no final de uma string.
- Além de espaços, ele também remove quebras de linha e outros caracteres invisíveis.
- O trim() é frequentemente utilizado em sanitização de dados, especialmente ao lidar com entradas de usuários, 
para garantir que não haja espaços desnecessários.
- Importante: Ele não modifica a string original, apenas retorna uma nova string sem os espaços em branco.
*/

// Definindo uma string com espaços em branco e uma quebra de linha.
const testeTrim = "  Maxwell \n  "

// Exibindo a string original (com espaços e quebra de linha).
console.log(testeTrim)  // Saída: "  Maxwell \n  "

// Usando o método trim() para remover os espaços em branco do início e do fim.
console.log(testeTrim.trim())  // Saída: "Maxwell"

// Verificando o comprimento da string original (com espaços).
console.log(testeTrim.length)  // Saída: 12

// Verificando o comprimento da string após o uso de trim().
console.log(testeTrim.trim().length)  // Saída: 7

// Exemplo de uso dos métodos padStart e padEnd.

/*
- O método padStart() adiciona caracteres ao início de uma string até que ela atinja o comprimento desejado.
- Ele é útil para formatação de textos, como adicionar zeros à esquerda de números.
- O primeiro argumento especifica o comprimento total da string após o preenchimento, 
e o segundo argumento é o caractere que será repetido para o preenchimento (pode ser uma string com mais de um caractere).
*/

const padStartTeste = "1"  // String inicial com apenas 1 caractere

// Usando padStart() para adicionar zeros à esquerda da string até que ela tenha 4 caracteres.
const novoPad = padStartTeste.padStart(4, "0")

console.log(padStartTeste)  // Saída: "1" (string original)
console.log(novoPad)  // Saída: "0001" (com zeros à esquerda)

/*
- O método padEnd() funciona de maneira semelhante ao padStart(), mas adiciona os caracteres no final da string.
- Assim como o padStart, o primeiro argumento determina o comprimento final da string, 
e o segundo argumento define o caractere a ser repetido no preenchimento.
*/

// Usando padEnd() para adicionar o número "2" ao final da string até que ela tenha 10 caracteres.
const padEndTeste = novoPad.padEnd(10, "2")
console.log(padEndTeste)  // Saída: "0001222222" (com '2' repetido no final)

// Exemplo de uso do método split para dividir uma string.

/*
- O método split() é utilizado para dividir uma string em um array de substrings, com base em um separador especificado.
- O separador pode ser qualquer caractere ou sequência de caracteres, como espaço, vírgula, ponto, 
ou qualquer outro delimitador.
- O split é muito útil para transformar uma string em uma lista de palavras ou partes específicas.
*/

const testeSplit = "Maxwell Christino de Moura"  // String de exemplo

// Usando o split() para dividir a string onde houver espaços, transformando cada palavra em um elemento de um array.
const arraySplit = testeSplit.split(" ")
console.log(arraySplit)  // Saída: ['Maxwell', 'Christino', 'de', 'Moura']

// Exemplo de uso do método join para unir os elementos de um array em uma string.

/*
- O método join() é utilizado para juntar os elementos de um array em uma única string.
- Você pode especificar um separador entre os elementos na string resultante. Se nenhum separador for especificado, 
os elementos serão concatenados sem espaçamento.
- É muito útil para criar strings formatadas a partir de arrays, como reconstruir uma frase a partir de palavras, 
ou criar um formato customizado para listas.
*/

const testeJoin = [
    "Maxwell",
    "Christino",
    "de",
    "Moura"
]

// Usando o join() para unir os elementos do array em uma string, com um espaço (" ") como separador.
const novoJoin = testeJoin.join(" ")
console.log(novoJoin)  // Saída: 'Maxwell Christino de Moura'

// Exemplo de uso do método repeat para repetir uma string várias vezes.

/*
- O método repeat() é usado para repetir uma string um número específico de vezes.
- Ele recebe como argumento um número inteiro que indica quantas vezes a string será repetida.
- Isso é útil quando você precisa gerar padrões repetitivos, como preenchimento de caracteres ou criação de texto replicado.
*/

const listaRepeat = "Maça"

// Usando o repeat() para repetir a string "Maça" 5 vezes.
console.log(listaRepeat.repeat(5))  // Saída: 'MaçaMaçaMaçaMaçaMaça'

// Exemplo de uso do Rest Operator para receber múltiplos argumentos em uma função.

/*
- O Rest Operator (...) permite que uma função receba um número indefinido de argumentos como um array.
- Ele coleta todos os argumentos passados para a função e os agrupa em uma única variável.
- Isso é útil quando você não sabe de antemão quantos argumentos serão passados para a função, 
tornando-a mais flexível e reutilizável.
*/

const somaInfinita = (...args) => {  // Usando o Rest Operator para agrupar os argumentos em 'args'
    let total = 0
    // Loop para somar todos os valores recebidos como argumentos
    for (let i = 0; i < args.length; i++) {
        total += args[i]
    }
    return total
}

// Chamando a função com diferentes quantidades de argumentos
console.log(somaInfinita(1, 2, 3))           // Saída: 6
console.log(somaInfinita(1, 34, 67, 78, 90, 102))  // Saída: 372

// Exemplo de uso da estrutura de repetição for...of

/*
- O for...of é utilizado para percorrer elementos de estruturas iteráveis, como arrays.
- Diferente do for tradicional, não é necessário gerenciar o índice dos elementos, o que simplifica o código.
- Em vez de acessar o índice para cada iteração, podemos diretamente interagir com os valores dos elementos.
*/

const forOf = (...args) => {  // Usando o Rest Operator para receber múltiplos argumentos
    let total = 0
    // O for...of percorre cada elemento de 'args' diretamente, sem a necessidade de acessar índices
    for (let num of args) {
        total += num  // Soma o valor de cada elemento ao total
    }
    return total  // Retorna o valor total
}

// Chamando a função com diferentes números de argumentos
console.log(forOf(1, 2, 3, 6, 7))           // Saída: 19
console.log(forOf(78, 90, 766, 21, 2))      // Saída: 957

// Exemplo de Destructuring em Objetos

/*
- O destructuring permite "desestruturar" um objeto ou array e extrair suas propriedades 
ou elementos diretamente em variáveis.
- Isso simplifica o acesso às propriedades sem a necessidade de usar notação de ponto repetidamente.
*/

const userDatalhes = {
    primeiroNome: "Maxwell",
    ultimoNome: "Moura",
    trabalha: "Téc de TI"
}

// Usando destructuring para extrair as propriedades do objeto em variáveis
const { primeiroNome, ultimoNome, trabalha } = userDatalhes

// As variáveis "primeiroNome", "ultimoNome" e "trabalha" agora contêm os valores correspondentes do objeto
console.log(primeiroNome, ultimoNome, trabalha)  // Saída: Maxwell Moura Téc de TI

// Renomeando variáveis durante o destructuring
/*
- Podemos renomear as variáveis durante o processo de destructuring.
- O nome da propriedade é mantido, mas a variável pode ter um nome diferente no escopo.
*/
const { primeiroNome: pName } = userDatalhes

// Agora, "pName" contém o valor de "primeiroNome"
console.log(pName)  // Saída: Maxwell

// Destructuring em Arrays

/*
- O destructuring também funciona com arrays. 
- A sintaxe utiliza colchetes [] em vez de chaves {}, já que arrays não possuem nomes de propriedades como objetos.
- Os valores dos elementos do array são extraídos e atribuídos diretamente às variáveis na ordem em que aparecem.
*/

const minhaLista = ["Avião", "Submarino", "Carro"]

// Usando destructuring para extrair os valores do array em variáveis
const [veiculoA, veiculoB, veiculoC] = minhaLista

// As variáveis "veiculoA", "veiculoB" e "veiculoC" agora contêm os valores correspondentes do array
console.log(veiculoA, veiculoB, veiculoC)  // Saída: Avião Submarino Carro

// JSON
/*
- JSON (JavaScript Object Notation) é um formato de texto usado para estruturar dados, 
principalmente na comunicação entre servidores e front-end.
- Segue uma formatação rigorosa:
    1. Somente aspas duplas são permitidas em torno de chaves e strings.
    2. Não aceita comentários.
*/

// Definindo uma string JSON
const myJson = '{"nome": "Maxwell", "idade": 40, "skill": ["HTML", "CSS", "JavaScript"]}'

// Exibe a string JSON
console.log(myJson) 
// Saída: {"nome": "Maxwell", "idade": 40, "skill": ["HTML", "CSS", "JavaScript"]}

console.log(typeof myJson)  // Verifica o tipo (string)
// Saída: string

// Convertendo JSON para objeto JavaScript com JSON.parse()
const myObject = JSON.parse(myJson)

// Exibe o objeto convertido
console.log(myObject)  
// Saída: { nome: 'Maxwell', idade: 40, skill: [ 'HTML', 'CSS', 'JavaScript' ] }

console.log(myObject.nome)  // Acessa propriedades do objeto
// Saída: Maxwell

console.log(typeof myObject)  // Verifica o tipo (objeto JavaScript)
// Saída: object

// Adicionando uma nova propriedade ao objeto
myObject.isOpenToWork = true
console.log(myObject)  
// Saída: { nome: 'Maxwell', idade: 40, skill: [ 'HTML', 'CSS', 'JavaScript' ], isOpenToWork: true }

// Convertendo o objeto de volta para JSON com JSON.stringify()
const myNewJson = JSON.stringify(myObject)

// Exibindo o novo JSON
console.log(myNewJson)
// Saída: {"nome":"Maxwell","idade":40,"skill":["HTML","CSS","JavaScript"],"isOpenToWork":true}

console.log(typeof myNewJson)  // Verifica o tipo (string)
// Saída: string

// //JSON invalido
// const badJson = '{"name": Maxwell, "age": 40}'
// const myBadObject = JSON.parse(badJson)


