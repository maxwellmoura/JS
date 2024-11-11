// Protocolos da Web
/* 
Protocolos da web são conjuntos de regras que determinam como a comunicação deve ocorrer na internet,
permitindo a troca de dados entre clientes (como navegadores) e servidores. Eles garantem que dispositivos
diferentes compreendam e executem operações de maneira consistente. Aqui estão alguns dos principais protocolos:

  - HTTP (Hypertext Transfer Protocol): Um dos protocolos mais utilizados, o HTTP é responsável pela
    transferência de dados na web. Ele define como o cliente solicita informações de um servidor e como 
    o servidor responde. As versões modernas incluem o HTTPS, que oferece segurança com criptografia SSL/TLS.

  - HTTPS (Hypertext Transfer Protocol Secure): Versão segura do HTTP, que utiliza SSL/TLS para criptografar 
    os dados, garantindo que as informações trocadas entre cliente e servidor sejam privadas e íntegras.

  - FTP (File Transfer Protocol): Usado para transferir arquivos entre sistemas, o FTP é útil para baixar ou
    fazer upload de arquivos em servidores. Contudo, por ser menos seguro, é frequentemente substituído por 
    alternativas criptografadas, como SFTP (Secure FTP).

  - SMTP (Simple Mail Transfer Protocol): SMTP é o protocolo principal para envio de e-mails na internet. Ele 
    lida com a comunicação entre servidores de e-mail, permitindo a entrega e o encaminhamento de mensagens.

  - POP3 (Post Office Protocol) e IMAP (Internet Message Access Protocol): Ambos são protocolos para 
    receber e-mails. O POP3 baixa e-mails do servidor para o cliente, enquanto o IMAP permite o gerenciamento
    de mensagens diretamente no servidor, facilitando o acesso de múltiplos dispositivos.

Esses protocolos formam a base da comunicação na web, tornando possível a navegação, transferência de dados e 
comunicação em redes digitais de forma segura e eficiente.
*/

// URLs (Uniform Resource Locators)
/* 
URLs (Localizadores Uniformes de Recursos) são endereços padronizados que identificam recursos na internet,
como páginas web, arquivos, imagens e vídeos, permitindo que os navegadores localizem e acessem esses recursos.
Uma URL típica é composta de várias partes, cada uma com uma função específica:

  - Protocolo: Define o método de comunicação, como `http` ou `https`, que indica se a conexão é segura.
    Exemplo: `https://`

  - Domínio: Nome do servidor ou endereço IP onde o recurso está hospedado. Pode incluir subdomínios.
    Exemplo: `www.exemplo.com`

  - Porta (opcional): Define a porta do servidor que deve ser acessada. A porta padrão para HTTP é 80 e para HTTPS é 443.
    Exemplo: `:8080`

  - Caminho: Especifica a localização do recurso no servidor, geralmente hierárquica.
    Exemplo: `/pasta/arquivo.html`

  - Parâmetros de Consulta (Query Parameters): Dados adicionais na URL que seguem o símbolo `?` e ajudam a
    passar informações para o servidor, como filtros ou configurações. Cada parâmetro é separado por `&`.
    Exemplo: `?busca=javascript&pagina=1`

  - Fragmento (Hash): Identifica uma seção específica da página, usada principalmente para navegação interna.
    Exemplo: `#secao1`

Esses elementos trabalham em conjunto para definir a URL completa, permitindo que os navegadores e servidores
comuniquem-se com precisão para entregar o conteúdo solicitado.
*/

// Conhecendo o HTML
/* 
HTML (HyperText Markup Language) é a linguagem de marcação usada para estruturar e organizar o conteúdo das páginas web.
Por meio de elementos chamados tags, o HTML permite a criação de uma ampla variedade de componentes como títulos, 
parágrafos, imagens, formulários, links, listas e muito mais.

- Estrutura de uma tag HTML: Uma tag básica inclui um nome de tag envolto por `<>` e um conteúdo entre a tag de abertura
  e a de fechamento.
  Exemplo: `<p>Texto</p>` define um parágrafo.

- Tipos de tags:
  - Tags de bloco (block elements): Ocupam a largura total da página (ex: `<div>`, `<h1>`, `<p>`, `<form>`).
  - Tags inline (inline elements): Ocupam somente a largura do conteúdo (ex: `<span>`, `<a>`, `<img>`).

- Atributos: As tags podem conter atributos, que são propriedades extras para definir características do elemento,
  como `id`, `class`, e `src`.
  Exemplo: `<img src="imagem.jpg" alt="Descrição da imagem">`

- HTML e CSS: O HTML define a estrutura e o conteúdo da página, enquanto o CSS (Cascading Style Sheets) é usado para
  estilizar e dar formato aos elementos HTML, permitindo uma experiência visual mais atrativa.

Por meio do HTML, criamos a base da página web que pode ser aprimorada com CSS para design e JavaScript para
funcionalidade, formando assim a base de uma aplicação web.
*/

//Estrutura do HTML
/* O HTML possui uma estrutura básica que define a organização de uma página web. A estrutura mínima inclui as tags 
essenciais para dar funcionalidade e semântica ao conteúdo da página.

<!DOCTYPE html> 
- Declara o tipo de documento, indicando ao navegador que o documento está em HTML5.

<html> 
- Tag raiz que envolve o conteúdo HTML da página.
  
  <head> 
  - Contém metadados sobre a página, que não são visíveis ao usuário.
    - <meta charset="UTF-8">: Define a codificação de caracteres, garantindo suporte a caracteres especiais.
    - <title>: Define o título da página exibido na aba do navegador.
    - Outras tags como <meta>, <link> e <style> podem ser usadas para incluir CSS, fontes e descrições.

  <body> 
  - Onde o conteúdo visível da página é estruturado.
    - Tags de conteúdo como <header>, <nav>, <main>, <footer> e outras são organizadas para formar a página.
    - Cada seção pode conter elementos específicos como texto (<p>, <h1>),
     imagens (<img>), links (<a>), listas (<ul>, <ol>), entre outros.

Essa estrutura permite a organização de qualquer tipo de página web, mantendo uma hierarquia lógica e facilitando a
interpretação e o carregamento pelo navegador. */

// HTML e JavaScript
/* 
Podemos incorporar JavaScript ao HTML de três maneiras principais:

1. **Tag `<script>` Interna**: Colocando o código diretamente na página HTML, útil para scripts pequenos.
2. **Arquivo Externo**: Referenciando um arquivo JavaScript externo com o atributo `src` na tag `<script>`, 
prática recomendada para código modular e organização.
3. **Atributos de Evento**: Alguns elementos HTML, como `<button>`, 
possuem atributos como `onclick` que permitem executar JavaScript diretamente. No entanto,
 é menos comum em projetos estruturados.

Cada vez que um arquivo externo é linkado, ocorre uma requisição HTTP, 
e JavaScript é fundamental para manipular HTML, modificar estilos, e adicionar interatividade à página.
*/

// JavaScript e o DOM (Document Object Model)
/* 
O JavaScript permite manipular o DOM (Document Object Model), 
que é a representação em árvore dos elementos HTML de uma página.
Com o DOM, JavaScript consegue acessar e modificar dinamicamente o conteúdo, estilos e estrutura dos elementos.

Principais funcionalidades:
  - **Selecionar Elementos**: Métodos como `getElementById`, `querySelector`, e `getElementsByClassName` 
  permitem encontrar elementos específicos no DOM.
  - **Modificar Conteúdo e Atributos**: JavaScript altera textos, imagens, classes e estilos dos elementos.
  - **Eventos**: Adiciona interatividade, como cliques e mudanças, usando métodos como `addEventListener`.
  - **Criar e Remover Elementos**: Pode adicionar ou excluir elementos do DOM em tempo real, tornando a página dinâmica.

Essas capacidades tornam JavaScript essencial para criar interfaces de usuário interativas e responsivas.
*/

// DOM (Document Object Model)
/* 
O DOM (Document Object Model) permite modificar completamente uma página web, 
oferecendo uma interface estruturada para acessar e manipular o conteúdo HTML.
Com o DOM, podemos realizar as seguintes operações:

  - **Alterar Elementos**: Modificamos o texto, imagens, e outros conteúdos diretamente.
  - **Modificar Atributos**: Alteramos atributos de elementos, como `src` de imagens, `href` de links, ou classes CSS.
  - **Estilização**: Mudamos estilos aplicados a elementos, seja adicionando, removendo ou alterando classes CSS.
  - **Adicionar e Remover Elementos**: Podemos criar novos elementos, como parágrafos ou listas, 
  e removê-los conforme necessário.

A estrutura do DOM é frequentemente representada como uma árvore, onde cada elemento HTML é considerado um "nó". 
Os principais tipos de nós incluem:

  - **Nó do Documento**: O nó raiz, representando o documento HTML como um td.
  - **Nó de Elemento**: Representa elementos HTML, como `<div>`, `<p>`, `<img>`, etc.
  - **Nó de Texto**: Contém o texto dentro de um elemento.
  - **Nó de Atributo**: Representa atributos de um elemento, como `class` ou `id`.

Essas operações e estruturas tornam o DOM uma ferramenta poderosa para criar páginas dinâmicas e interativas.
*/

// Movendo-se pelo DOM
/* 
No DOM, todos os elementos de uma página podem ser acessados por meio da propriedade `document.body`, que representa o corpo da página HTML. 
A partir de `document.body`, podemos navegar pela estrutura hierárquica de nós, o que permite acessar e modificar os elementos.

Principais métodos e propriedades de navegação no DOM:

  - **`childNodes`**: Retorna uma lista de todos os nós filhos (elementos, texto, comentários) de um elemento, como `document.body.childNodes`.
  - **`firstChild` e `lastChild`**: Retornam o primeiro e o último filho do nó especificado.
  - **`parentNode`**: Acessa o nó pai do elemento atual.
  - **`nextSibling` e `previousSibling`**: Navegam para o próximo ou o anterior irmão (sibling) do nó atual.
  
No exemplo:
  - `document.body.childNodes` acessa todos os nós filhos do body.
  - `document.body.childNodes[1]` acessa o segundo nó filho do body (índice 1).
  - `document.body.childNodes[1].childNodes` acessa os filhos do segundo nó.
  - `document.body.childNodes[1].childNodes[1].textContent` acessa e exibe o conteúdo de texto do 
  segundo nó filho do segundo nó.

Essas propriedades facilitam a navegação e modificação dos elementos na estrutura do DOM.
*/

console.log(document.body);
console.log(document.body.childNodes);
console.log(document.body.childNodes[1]);
console.log(document.body.childNodes[1].childNodes);
console.log(document.body.childNodes[1].childNodes[1].textContent);

// Selecionando elementos
/* 
No DOM, há várias formas de selecionar elementos específicos ou grupos de elementos, permitindo manipulação direta 
de atributos, estilos, ou conteúdo. A diferença entre os métodos de seleção está na abordagem que cada um usa para localizar elementos na página:

  - **`getElementsByTagName`**: Seleciona todos os elementos com uma tag específica (como `div`, `p`, `span`). 
  Retorna uma coleção ao vivo de todos os elementos correspondentes.
  - **`getElementById`**: Seleciona um único elemento pelo seu atributo `id`. 
  Este método é rápido e adequado para selecionar um elemento único e específico.
  - **`getElementsByClassName`**: Seleciona todos os elementos com uma classe específica. Retorna uma coleção ao vivo.
  - **`querySelector`**: Seleciona o primeiro elemento que corresponde a um 
  seletor CSS específico (como `.classe`, `#id`, `tag`). Ideal para localizar um elemento único.
  - **`querySelectorAll`**: Seleciona todos os elementos que correspondem a um seletor CSS, retornando uma 
  `NodeList` estática.

Esses métodos permitem manipular facilmente o DOM, ajustando elementos conforme necessário.
*/

// Encontrando elementos por tag
/* 
O método `getElementsByTagName` permite selecionar todos os elementos de uma página que compartilham uma mesma tag.
Ele retorna uma coleção ao vivo (`HTMLCollection`) de elementos que possuem a tag especificada, 
o que significa que qualquer mudança no DOM refletirá automaticamente nessa coleção. 
Esse método é útil para manipular elementos semelhantes, como listas, imagens, ou parágrafos de maneira coletiva.

  - **Argumento**: Recebe uma string que representa a tag dos elementos que serão selecionados 
  (ex.: `"li"`, `"p"`, `"div"`).
  - **Retorno**: Um `HTMLCollection` com todos os elementos que possuem a tag indicada.
  
No exemplo abaixo, estamos selecionando todos os elementos `<li>` da página e exibindo-os no console.
*/

const listaItens = document.getElementsByTagName("li");
console.log(listaItens);

// Encontrando elementos por id
/* 
O método `getElementById` permite selecionar um único elemento HTML por seu `id`. Como cada `id` 
é exclusivo dentro de uma página HTML, esse método sempre retorna apenas um elemento 
ou `null` se o `id` não for encontrado. 

  - **Argumento**: Recebe uma string que representa o `id` do elemento a ser selecionado 
  (ex.: `"title"`, `"header"`, `"footer"`).
  - **Retorno**: O elemento HTML que possui o `id` especificado, ou `null` se o elemento não existir.

No exemplo abaixo, estamos selecionando o elemento com o `id` `"title"` e exibindo-o no console.
*/

const listaId = document.getElementById("title");
console.log(listaId);

// Encontrando elementos por classes

/* 
O método `getElementsByClassName` permite selecionar um grupo de elementos HTML que compartilham a mesma classe.
Esse método retorna uma coleção de elementos que possuem a classe especificada, permitindo manipulação em massa.

  - **Argumento**: Recebe uma string que representa o nome da classe (ex.: `"produtos"`, `"itens"`, `"menu"`).
  - **Retorno**: Uma coleção de elementos com a classe especificada, ou uma lista vazia se não houver correspondências.

No exemplo abaixo, estamos selecionando todos os elementos com a classe `"produtos"` e exibindo a coleção no console.
*/

const listaClasse = document.getElementsByClassName("produtos");
console.log(listaClasse);

// Encontrando elementos por CSS

/* 
Os métodos `querySelector` e `querySelectorAll` permitem selecionar elementos HTML usando seletores CSS.
Esses métodos são flexíveis e aceitam qualquer seletor válido de CSS, como classes (`.classe`), IDs (`#id`), ou tags (`tag`).

  - **querySelector**: Retorna o primeiro elemento que corresponde ao seletor especificado.
  - **querySelectorAll**: Retorna uma coleção de todos os elementos que correspondem ao seletor, permitindo uma seleção em massa.

No exemplo abaixo, `querySelectorAll` seleciona todos os elementos com a classe `"produtos"`, 
enquanto `querySelector` seleciona apenas o elemento com o ID `"main-container"`.
*/

const produtosQuery = document.querySelectorAll(".produtos");
console.log(produtosQuery);

const mainContainer = document.querySelector("#main-container");
console.log(mainContainer);

// Alterando o HTML
/* 
Com o DOM, podemos modificar praticamente toda a estrutura da página HTML, incluindo adicionar, remover e até clonar elementos.
Alguns métodos comuns para essas manipulações são:

- `insertBefore`: insere um novo elemento antes de um elemento específico.
- `appendChild`: adiciona um novo elemento como o último filho de um elemento pai.
- `replaceChild`: substitui um elemento filho por um novo elemento.

Esses métodos permitem controlar e atualizar a estrutura da página de forma dinâmica. 
*/

// InsertBefore
/* 
O `insertBefore` insere um novo elemento antes de um elemento de referência específico na estrutura do DOM. 
Para usá-lo, é necessário:

1. Criar o novo elemento usando `document.createElement`.
2. Selecionar o elemento de referência e o elemento pai onde a inserção ocorrerá.
3. Chamar `insertBefore`, passando o novo elemento e o elemento de referência.

Neste exemplo, um parágrafo `<p>` é criado e inserido antes do elemento `title` dentro do `header`.
*/

const p = document.createElement("p"); // Cria um novo elemento <p>
console.log(p);

const header = title.parentElement; // Obtém o elemento pai de "title"
header.insertBefore(p, title); // Insere o novo <p> antes do elemento "title"

// appendChild
/* 
O `appendChild` permite adicionar um elemento como último filho dentro de outro elemento, 
criando uma relação de hierarquia entre o elemento pai e o novo elemento filho.

Neste exemplo, selecionamos a lista `<ul>` dentro de uma `<nav>` e adicionamos um novo item de lista `<li>` 
como o último filho da `<ul>`.
*/

const navLinks = document.querySelector("nav ul"); // Seleciona a lista <ul> dentro da <nav>
const li = document.createElement("li"); // Cria um novo elemento <li>
navLinks.appendChild(li); // Adiciona o novo <li> como o último filho de <ul>
console.log(navLinks); // Exibe o novo elemento no console

// replaceChild
/* 
O método `replaceChild` é utilizado para substituir um elemento filho dentro de um elemento pai por outro elemento. 
Precisamos de um elemento pai, o elemento que será substituído e o novo elemento que ocupará seu lugar.

No exemplo, criamos um novo elemento `<h2>` com o texto "Meu novo Título" e o substituímos pelo elemento `title` 
original dentro do elemento `header`.
*/

const h2 = document.createElement("h2"); // Cria um novo elemento <h2>
h2.textContent = "Meu novo Título"; // Define o conteúdo do <h2>
header.replaceChild(h2, title); // Substitui o elemento `title` pelo novo <h2>
console.log(h2); // Exibe o novo elemento no console

// Criando nós de texto
/*
Textos podem ser manipulados no DOM usando o método `createTextNode`, que cria um nó de texto simples. 
Esse nó pode então ser inserido em um elemento para adicionar conteúdo textual.

No exemplo, criamos um nó de texto com `createTextNode`, o anexamos a um elemento `<h3>`, 
e finalmente inserimos o `<h3>` no `mainContainer`.
*/

const myText = document.createTextNode("Agora temos dois títulos"); // Cria um nó de texto
console.log(myText); // Exibe o nó de texto no console

const h3 = document.createElement("h3"); // Cria um novo elemento <h3>
h3.appendChild(myText); // Adiciona o nó de texto ao <h3>
console.log(h3); // Exibe o elemento <h3> no console

mainContainer.appendChild(h3); // Adiciona o <h3> ao mainContainer

// Trabalhando com atributos
/*
É possível ler e modificar os valores dos atributos de um elemento no DOM.
Para ler um atributo, usamos o método `getAttribute`, e para modificá-lo, usamos `setAttribute`.
O método `setAttribute` recebe o nome do atributo e o novo valor a ser atribuído.

No exemplo, selecionamos o primeiro link dentro de `navLinks`, alteramos seu `href` para o link do Google,
e adicionamos o atributo `target` para abrir em uma nova aba.
*/

const primeiroLink = navLinks.querySelector("a"); // Seleciona o primeiro link em navLinks
console.log(primeiroLink); // Exibe o elemento <a> no console

primeiroLink.setAttribute("href", "https://www.google.com"); // Define o href para o Google
console.log(primeiroLink.getAttribute("href")); // Lê e exibe o valor de href

primeiroLink.setAttribute("target", "_blank"); // Define o target para abrir o link em uma nova aba

// Altura e largura dos elementos
/*
Podemos obter a altura e a largura de um elemento no DOM usando `offsetWidth` e `offsetHeight`, que incluem 
as bordas e as margens internas (padding). Se quisermos medir apenas o conteúdo e o padding, excluindo as bordas, 
usamos `clientWidth` e `clientHeight`.

No exemplo, selecionamos o elemento `<footer>` e exibimos suas dimensões, com e sem bordas.
*/

const footer = document.querySelector("footer");

console.log(footer.offsetWidth);  // Largura incluindo bordas e padding
console.log(footer.offsetHeight); // Altura incluindo bordas e padding
console.log(footer.clientWidth);  // Largura excluindo bordas
console.log(footer.clientHeight); // Altura excluindo bordas

// Posição do elemento
/*
Usando o método `getBoundingClientRect`, podemos obter várias informações de posição e dimensão sobre um elemento no DOM. 
Isso inclui a posição no eixo X e Y em relação ao viewport, além de altura, largura e outros dados úteis.

No exemplo, selecionamos o primeiro item da lista `listaClasse` e exibimos seu `getBoundingClientRect()` 
para ver suas dimensões e posição.
*/

const produtoNovo = listaClasse[0];
console.log(produtoNovo.getBoundingClientRect());

// Estilo com JS
/*
Todos os elementos no DOM possuem uma propriedade chamada `style`, permitindo a manipulação direta de regras CSS. 
No JavaScript, as propriedades CSS com hífens são convertidas para camelCase. 
Por exemplo, `background-color` torna-se `backgroundColor`.

No exemplo abaixo, aplicamos estilo ao elemento `mainContainer`, alterando a cor do texto, a cor de fundo e o espaçamento inferior.
*/

mainContainer.style.color = "red";
mainContainer.style.backgroundColor = "#333";
mainContainer.style.paddingBottom = "15px";

// Estilizando múltiplos elementos
/*
Quando selecionamos vários elementos, como `HTMLCollection` ou `NodeList`, podemos iterar por cada um usando `for...of`.
Assim, é possível aplicar estilos individualmente a cada item na coleção.

No exemplo, cada item da `listaItens` recebe uma cor de fundo vermelha.
*/

for (const li of listaItens) {
  li.style.backgroundColor = "red";
}
