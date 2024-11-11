// Orientação a Objetos em JavaScript (OOP)

// - A Programação Orientada a Objetos (OOP) é um paradigma que organiza o código em torno de "objetos".
// - Esses objetos podem representar coisas do mundo real ou conceitos abstratos, com propriedades e comportamentos.

// No JavaScript, podemos criar objetos diretamente usando object literals ou usando funções construtoras e classes.
// Objetos são coleções de dados (propriedades) e funcionalidades (métodos).

// 1. **Propriedades**: São características do objeto. Ex: Nome, idade.
// 2. **Métodos**: São funções dentro do objeto que realizam ações. Ex: Falar, andar.

// Métodos
/* 
- Métodos são funções associadas a um objeto.
- Eles são semelhantes às propriedades, mas em vez de armazenar valores, eles executam uma função.
- Invocamos métodos de um objeto da mesma forma que invocamos funções normais, usando parênteses.
*/

const animal = {
    nome: "Bob",  // Propriedade 'nome'
    latir: function () {  // Método 'latir'
        console.log("Au Au");
    }
};

// Acessando a propriedade 'nome' do objeto
console.log(animal.nome);  // Saída: "Bob"

// Chamando o método 'latir' do objeto
animal.latir();  // Saída: "Au Au"

// Mais sobre métodos
/*
- Métodos podem acessar e manipular as propriedades de seu objeto.
- Usamos a palavra-chave `this` dentro dos métodos para referenciar o próprio objeto e acessar suas propriedades.
- Isso permite exibir ou modificar propriedades diretamente no objeto.
*/

const pessoa = {
    nome: "Maxwell",  // Propriedade 'nome'

    // Método para obter o valor da propriedade 'nome'
    getNome: function () {
        return this.nome;  // 'this' se refere ao objeto 'pessoa'
    },

    // Método para modificar o valor da propriedade 'nome'
    setNome: function (novoNome) {
        this.nome = novoNome;  // 'this' se refere ao objeto 'pessoa'
    }
};

console.log(pessoa.nome);  // Saída: "Maxwell"
console.log(pessoa.getNome());  // Saída: "Maxwell"

pessoa.setNome("Moura");  // Alterando o valor de 'nome' usando o método 'setNome'
console.log(pessoa.getNome());  // Saída: "Moura"

// Prototype
/*
- Prototype é um recurso de herança em JavaScript. 
- Todos objeto tem um "prototype", que permite compartilhar métodos e propriedades entre objetos.
- Se uma propriedade ou método não existe diretamente no objeto, o JavaScript procura no seu prototype (ancestral).
*/

// Prototype na prática
/*
- Quando usamos propriedades ou métodos que não estão diretamente no dado (como o método `.length` em strings),
  o JavaScript procura no prototype do dado.
- Isso é conhecido como "fallback" (quando um recurso ausente é procurado em um nível mais alto na cadeia de protótipos).
*/

const texto = "asd";
console.log(Object.getPrototypeOf(texto));
// Exibe o prototype da string, de onde herda métodos como `.length`

const bool = true;
console.log(Object.getPrototypeOf(bool));
// Exibe o prototype do booleano, de onde herda métodos próprios de booleanos

const arr = [];
console.log(Object.getPrototypeOf(arr));
// Exibe o prototype do array, de onde herda métodos como `.push`, `.map`, etc.

// Mais sobre prototype
/*
- Quando criamos um objeto a partir de outro objeto, o primeiro objeto se torna o prototype do novo objeto.
- Isso significa que o novo objeto herda propriedades e métodos do "objeto pai".
- Se for um objeto simples, ele herda do prototype base `Object`.
- Esta é a base da cadeia de prototype (prototypal inheritance).
*/

const myObject = {
    a: "b"
};

console.log(Object.getPrototypeOf(myObject));
// Exibe o prototype de myObject (o objeto pai é Object)

console.log(Object.getPrototypeOf(myObject) === Object.prototype);
// Verifica se myObject herda de Object.prototype (deve retornar true)

const mySecondObject = Object.create(myObject);
// Cria um novo objeto que tem myObject como seu prototype

console.log(mySecondObject);
// Exibe o novo objeto (herda propriedades de myObject)

console.log(mySecondObject.a);
// Acessa a propriedade 'a' do prototype (myObject), mesmo não estando diretamente em mySecondObject

console.log(Object.getPrototypeOf(mySecondObject) === myObject);
// Verifica se o prototype de mySecondObject é myObject (deve retornar true)

// Classes básicas
/*
- As classes são como "moldes" para criar objetos com propriedades e métodos definidos.
- JavaScript possui classes nativas, mas podemos criar as nossas para organizar o código e implementar,
 a Orientação a Objetos.
- Neste exemplo, usamos prototypes para criar novos objetos a partir de um objeto base (`cachorro`).
*/

const cachorro = {
    raca: null  // Propriedade que define a raça do cachorro
};

const pastorAlemao = Object.create(cachorro);  // Cria um novo objeto com `cachorro` como prototype
pastorAlemao.raca = "Pastor Alemão";  // Define a raça para pastor alemão
console.log(pastorAlemao);  // Exibe o objeto com a raça definida

const bulldog = Object.create(cachorro);  // Cria um novo objeto com `cachorro` como prototype
bulldog.raca = "Bulldog";  // Define a raça para bulldog
console.log(bulldog);  // Exibe o objeto com a raça definida

// Classes baseadas em funções construtoras
/*
- Em JavaScript, é possível usar funções como "classes" para criar objetos, e chamamos essas funções de funções,
 construtoras.
- A função construtora inicializa as propriedades do objeto e retorna uma nova instância.
*/

function criarDogs(nome, raca) {
    const cachorro = Object.create({});  // Cria um novo objeto sem prototype específico
    cachorro.nome = nome;  // Define a propriedade 'nome' do cachorro
    cachorro.raca = raca;  // Define a propriedade 'raça' do cachorro

    return cachorro;  // Retorna o objeto criado com as propriedades definidas
}

const bob = criarDogs("Bob", "Vira Lata");  // Cria um novo cachorro chamado "Bob" de raça "Vira Lata"
console.log(bob);  // Exibe o objeto do cachorro "Bob"

const jack = criarDogs("Jack", "Pincher");  // Cria um novo cachorro chamado "Jack" de raça "Pincher"
console.log(jack);  // Exibe o objeto do cachorro "Jack"

// Verifica o prototype de 'jack' (não há um prototype comum além do objeto base)
console.log(Object.getPrototypeOf(jack) === Object.getPrototypeOf(bob));

// Classes baseadas em funções com 'new'
/*
- Em JavaScript, a palavra-chave 'new' é usada para criar uma nova instância de um 
objeto a partir de uma função construtora.
- Quando usamos 'new', a função é chamada como um construtor e um novo objeto é criado automaticamente.
*/

function Cachorro(nome, raca) {
    this.nome = nome;  // Define a propriedade 'nome' para a instância
    this.raca = raca;  // Define a propriedade 'raça' para a instância
}

const husky = new Cachorro("Ozzy", "Husky");  // Cria um novo objeto 'Cachorro' usando 'new'
console.log(husky);  // Exibe o objeto do cachorro 'husky'

// Classes de funções com métodos no prototype
/*
- Em JavaScript, podemos adicionar métodos ao 'prototype' de uma função construtora.
- Isso permite que todos os objetos criados com essa função compartilhem o mesmo método, economizando memória.
*/

Cachorro.prototype.uivar = function () {
    console.log("Auuuuuu!");
};

/* Como o método 'uivar' foi adicionado ao prototype, todos os objetos criados com a 
função construtora 'Cachorro' terão acesso a ele.*/
husky.uivar();  // Saída: "Auuuuuu!"

// Classes ES6
/*
- Com a introdução do ES6, o JavaScript passou a oferecer uma sintaxe mais moderna e próxima 
de outras linguagens para criar classes.
- Em uma classe ES6, usamos o 'constructor' para inicializar as propriedades do objeto.
- A palavra-chave 'new' ainda é usada para criar uma instância da classe.
*/

class CachorroClasse {
    constructor(nome, raca) {
        this.nome = nome;
        this.raca = raca;
    }
}

// Criando uma instância da classe CachorroClasse
const jeff = new CachorroClasse("Jeff", "Labrador");
console.log(jeff);  // Saída: CachorroClasse { nome: 'Jeff', raca: 'Labrador' }

// Verificando o protótipo da instância 'jeff'
console.log(Object.getPrototypeOf(jeff));  // Saída: CachorroClasse.prototype

// Mais sobre Classes
/*
- Em classes, propriedades são geralmente definidas no constructor e acessíveis com o `this`.
- Métodos também podem acessar propriedades através de `this` e não precisam da palavra 'function' em classes.
- É uma forma organizada e eficiente de definir comportamentos que todas as instâncias da classe compartilham.
*/

class Caminhao {
    constructor(eixos, cor) {
        this.eixos = eixos;  // Propriedade 'eixos' inicializada
        this.cor = cor;      // Propriedade 'cor' inicializada
    }

    // Método para descrever o caminhão
    descreverCaminhao() {
        console.log(`Este caminhão tem ${this.eixos} e é da cor ${this.cor}`);
    }
}

// Criando uma instância da classe Caminhao
const scania = new Caminhao(6, "Vermelho");
console.log(scania);  // Saída: Caminhao { eixos: 6, cor: 'Vermelho' }
scania.descreverCaminhao();  // Saída: Este caminhão tem 6 eixos e é da cor Vermelho

// Override nas propriedades via prototype
/*
- Quando uma propriedade é definida no `prototype`, todas as instâncias da classe têm acesso a essa propriedade.
- A propriedade do `prototype` só será usada se ela não existir na instância.
- Podemos definir ou modificar propriedades diretamente na instância ou no `prototype`.
*/

class Humano {
    constructor(nome, idade) {
        this.nome = nome;  // Propriedade 'nome' inicializada
        this.idade = idade;  // Propriedade 'idade' inicializada
    }
}

// Criando uma instância da classe Humano
const maxwell = new Humano("Maxwell", 40);
console.log(maxwell);  // Saída: Humano { nome: 'Maxwell', idade: 40 }

// Modificando o prototype para definir uma idade padrão
Humano.prototype.idade = "Não definida";

// A propriedade 'idade' na instância 'maxwell' sobrepõe a do prototype
console.log(maxwell.idade);  // Saída: 40

// Acessando a idade diretamente no prototype da classe
console.log(Humano.prototype.idade);  // Saída: Não definida

// Symbols em Classes
/*
- O uso de `Symbol` em classes permite criar propriedades únicas e imutáveis, garantindo que não serão sobrescritas.
- Isso é útil para propriedades que devem ser exclusivas em cada instância da classe.
*/

class Aviao {
    constructor(marca, turbinas) {
        this.marca = marca;
        this.turbinas = turbinas;
    }
}

// Definindo Symbols para propriedades únicas
const asas = Symbol("asas");
const pilotos = Symbol("pilotos");

// Associando as propriedades únicas ao prototype
Aviao.prototype[asas] = 2;
Aviao.prototype[pilotos] = 3;

const boing = new Aviao("Boing", 10);
console.log(boing);  // Saída: Aviao { marca: 'Boing', turbinas: 10 }
// As propriedades acessadas por Symbols não aparecem diretamente

// Getters e Setters
/*
- `get` é usado para acessar valores de uma maneira encapsulada.
- `set` permite a modificação de uma propriedade, possibilitando a validação ou transformação dos 
dados antes de armazená-los.
*/

class Post {
    constructor(titulo, descricao, tags) {
        this.titulo = titulo;
        this.descricao = descricao;
        this.tags = tags || [];
    }

    // Getter para exibir o título formatado
    get exibirTitulo() {
        return `Você está lendo: ${this.titulo}`;
    }

    // Setter para adicionar tags transformando uma string em array
    set adicionarTags(tags) {
        const tagsArray = tags.split(", ");
        this.tags = tagsArray;
    }
}

const myPost = new Post("Algum post", "É um post sobre programação");
console.log(myPost);  // Saída inicial do objeto

// Usando o getter para exibir o título
console.log(myPost.exibirTitulo);  // Saída: Você está lendo: Algum post

// Usando o setter para adicionar tags
myPost.adicionarTags = "programação, javascript, js";
console.log(myPost);  // Saída final do objeto com tags atualizadas

// Herança
/*
- A herança permite que uma classe derive características e comportamentos de outra, usando `extends`.
- A palavra `super` chama o construtor da classe pai, permitindo que a classe filha utilize e configure 
propriedades da classe pai.
*/

class Mamifero {
    constructor(patas) {
        this.patas = patas;
    }
}

// A classe Lobo herda de Mamifero
class Lobo extends Mamifero {
    constructor(patas, nome) {
        // Chama o construtor da classe pai (Mamifero) com o valor de patas
        super(patas);
        this.nome = nome;  // Propriedade exclusiva da classe filha Lobo
    }
}

// Criando uma instância da classe Lobo
const shark = new Lobo(4, "Shark");
console.log(shark);  // Saída: Lobo { patas: 4, nome: 'Shark' }
console.log(shark.patas);  // Saída: 4, herdado de Mamifero

// Operador instanceof
/*
- O operador `instanceof` verifica se um objeto é uma instância de uma classe específica ou de uma classe ancestral.
- Diferente de `typeof`, `instanceof` determina a relação de herança, 
verificando se um objeto foi criado pela classe especificada ou sua cadeia prototípica.
*/

console.log(shark instanceof Lobo);         // true, pois `shark` foi criado pela classe `Lobo`
console.log(Lobo instanceof Mamifero);      // false, pois `Lobo` é uma classe, não uma instância
console.log(new Lobo(4, "teste") instanceof Mamifero); // true, pois `Lobo` herda de `Mamifero`
console.log(new Post("a", "b") instanceof Lobo);       // false, pois `Post` e `Lobo` não têm relação
