// O que são os eventos?
/*
Eventos são ações que ocorrem em resposta a interações do usuário ou a mudanças no navegador, como cliques,
pressionamento de teclas, movimentos do mouse, entre outros. Com eventos, é possível executar uma função
ou lógica específica sempre que uma dessas interações acontecer.

Os eventos podem ser associados a elementos específicos, permitindo uma resposta direta a essa interação.
Esse conceito de associar uma função a um evento é chamado de "event handler" (manipulador de eventos).
Exemplos comuns incluem `onclick` para cliques ou `onkeydown` para teclas pressionadas.
*/

// Adicionando eventos
/*
Para associar um evento a um elemento, primeiro selecionamos o elemento que irá disparar o evento.
Usamos o método `addEventListener`, onde especificamos o tipo do evento (por exemplo, "click") 
e uma função de callback que será executada quando o evento ocorrer.

No exemplo, selecionamos um botão (`#myButton`) e adicionamos um evento de clique a ele. 
Quando o botão é clicado, a função de callback é acionada e a mensagem "Clicou aqui" é exibida no console.
*/

const btn = document.querySelector("#myButton");
btn.addEventListener("click", function () {
  console.log("Clicou aqui");
});


// Removendo Eventos
/*
Em alguns casos, é necessário remover um evento de um elemento. Para isso, usamos o método `removeEventListener`.
Esse método precisa do tipo do evento e da função que foi previamente associada ao evento como argumentos.

No exemplo, adicionamos um evento de clique ao botão `segundoBtn`, que exibe "Clicou" no console.
Depois, um segundo botão `terceiroBtn` remove o evento de clique do `segundoBtn` ao ser clicado, 
o que impede que a mensagem "Clicou" seja exibida novamente no console ao clicar no `segundoBtn`.
*/

const segundoBtn = document.querySelector("#btn"); // Seleciona o botão com o id `btn`

function imprimirMensagem() {
  console.log("Clicou"); // Exibe "Clicou" no console ao ser chamado
}

segundoBtn.addEventListener("click", imprimirMensagem); // Adiciona o evento de clique ao `segundoBtn`

const terceiroBtn = document.querySelector("#outro-btn"); // Seleciona o botão com o id `outro-btn`

terceiroBtn.addEventListener("click", () => {
  console.log("Click Removido"); // Exibe "Click Removido" no console quando o `terceiroBtn` é clicado
  segundoBtn.removeEventListener("click", imprimirMensagem); // Remove o evento de clique do `segundoBtn`
});

// Objeto do evento
/*
Todos os eventos possuem um argumento especial, geralmente chamado `event` ou `e`, que contém informações sobre o evento.
Esse objeto `event` oferece detalhes específicos, como o tipo do evento, o alvo (elemento que disparou o evento), 
e várias outras propriedades úteis.

No exemplo, adicionamos um evento de clique ao `meuTitulo`, e ao clicar, exibimos no console:
1. O objeto completo `event` com todas as informações do evento.
2. A coordenada horizontal do clique relativa ao elemento com `offsetX`.
3. O tipo de dispositivo que iniciou o evento com `pointerType`.
4. O alvo do evento (elemento onde o evento foi acionado) com `event.target`.
*/

const meuTitulo = document.querySelector("#meu-titulo"); // Seleciona o elemento com o id `meu-titulo`

meuTitulo.addEventListener("click", (event) => {
  console.log(event); // Exibe o objeto do evento completo no console
  console.log(event.offsetX); // Exibe a posição X do clique relativa ao elemento
  console.log(event.pointerType); // Exibe o tipo de dispositivo que acionou o evento (ex: mouse, touch)
  console.log(event.target); // Exibe o elemento alvo do evento (meuTitulo)
});

// Propagação
/*
Quando um evento é acionado em um elemento filho, ele pode "propagar" para seus elementos ancestrais, 
ativando os eventos desses elementos também. Esse comportamento é chamado de propagação de eventos. 

Para impedir que um evento se propague e ative outros eventos em elementos ancestrais, usamos o método `stopPropagation`.

No exemplo, temos dois eventos:
1. Um evento de clique no `containerBtn`, que exibe "Evento 1" no console.
2. Outro evento de clique no `btnInsideContainer`, que exibe "Evento 2" e usa `e.stopPropagation()` 
   para impedir que o clique se propague para o `containerBtn`, impedindo "Evento 1" de ser exibido ao clicar em `btnInsideContainer`.
*/

const containerBtn = document.querySelector("#btn-container"); // Seleciona o contêiner do botão
const btnInsideContainer = document.querySelector("#div-btn"); // Seleciona o botão dentro do contêiner

containerBtn.addEventListener("click", () => {
  console.log("Evento 1"); // Exibe "Evento 1" no console ao clicar no contêiner, se o evento não for interrompido
});

btnInsideContainer.addEventListener("click", (e) => {
  e.stopPropagation(); // Interrompe a propagação do evento para o elemento pai
  console.log("Evento 2"); // Exibe "Evento 2" no console ao clicar no botão
});

// Ações preventDefault
/*
Alguns elementos HTML possuem comportamentos padrão, como links (`<a>`) que redirecionam o usuário para outra página.
Podemos evitar esses comportamentos padrão usando o método `preventDefault` em um evento.

No exemplo, selecionamos um link (`<a>`) e adicionamos um evento de clique. 
Usamos `e.preventDefault()` para impedir que o link redirecione para outra página e, em vez disso, exibimos a mensagem 
"Não acessou a página" no console.
*/

const a = document.querySelector("a"); // Seleciona o elemento <a>

a.addEventListener("click", (e) => {
  e.preventDefault(); // Impede o redirecionamento padrão do link
  console.log("Não acessou a página"); // Exibe a mensagem no console
});

// Eventos de tecla
/*
Os eventos de tecla monitoram ações no teclado, permitindo interagir com o pressionamento de teclas.
Temos dois principais eventos: `keyup` e `keydown`.
- `keyup` é acionado quando a tecla é liberada.
- `keydown` é acionado quando a tecla é pressionada.

No exemplo, adicionamos um ouvinte para `keyup` que exibe uma mensagem no console quando a tecla é solta, 
e outro para `keydown` que exibe uma mensagem quando a tecla é pressionada.
*/

document.addEventListener("keyup", (e) => {
  console.log(`Soltou a tecla ${e.key}`); // Exibe a tecla liberada
});

document.addEventListener("keydown", (e) => {
  console.log(`Apertou a tecla ${e.key}`); // Exibe a tecla pressionada
});

// Eventos de Mouse
/*
O mouse pode disparar vários tipos de eventos que podemos monitorar:
- `mousedown`: acionado quando o botão do mouse é pressionado.
- `mouseup`: acionado quando o botão do mouse é solto.
- `dblclick`: acionado ao realizar um duplo clique com o mouse.

No exemplo, associamos três eventos ao elemento `mouse` para detectar quando o botão é pressionado, solto, 
ou quando ocorre um duplo clique, e exibimos mensagens no console para cada ação.
*/

const mouse = document.querySelector("#mouse");

mouse.addEventListener("mousedown", () => {
  console.log("Pressionou o mouse"); // Mensagem ao pressionar o botão do mouse
});

mouse.addEventListener("mouseup", () => {
  console.log("Soltou o mouse"); // Mensagem ao soltar o botão do mouse
});

mouse.addEventListener("dblclick", () => {
  console.log("Duplo clique do mouse"); // Mensagem ao fazer um duplo clique
});

/*
Podemos ativar um evento ao movimentar o mouse usando o evento `mousemove`. 
Com o objeto de evento `e`, é possível capturar a posição atual do ponteiro do mouse na tela.

No exemplo, registramos um evento de `mousemove` no documento para exibir as coordenadas X e Y 
do mouse no console sempre que ele se move.
*/

// document.addEventListener("mousemove", (e) => {
//     console.log(`no eixo X: ${e.clientX}`); // Exibe a posição do mouse no eixo X
//     console.log(`no eixo Y: ${e.clientY}`); // Exibe a posição do mouse no eixo Y
//   });

// Evento de Scroll
/*
Podemos adicionar um evento de scroll à página usando o evento `scroll`. 
Isso permite detectar quando o usuário rola a página e executar uma ação com base na posição do scroll.

No exemplo, adicionamos um evento de scroll à janela. 
Se a posição vertical do scroll (`pageYOffset`) for maior que 15px, ele exibe uma mensagem no console.
*/

window.addEventListener("scroll", (e) => {
  if (window.pageYOffset > 15) {
    console.log("Passamos dos 15px"); // Exibe mensagem quando o scroll passa de 15px
  }
});

// Evento por Foco
/*
O evento `focus` é ativado quando um elemento recebe o foco, enquanto o evento `blur` é ativado quando o elemento perde o foco.
Esses eventos são comumente usados em elementos interativos, como inputs.

No exemplo, selecionamos o elemento input com o id `meu-input`.
Quando o input recebe o foco, ele exibe "Entrou no input" no console, e quando perde o foco, exibe "Saiu no input".
*/

const input = document.querySelector("#meu-input"); // Seleciona o elemento input com id "meu-input"

input.addEventListener("focus", (e) => {
  console.log("Entrou no input"); // Exibe mensagem quando o input recebe foco
});

input.addEventListener("blur", (e) => {
  console.log("Saiu no input"); // Exibe mensagem quando o input perde foco
});

// Carregamento de Página
/*
Podemos adicionar eventos para quando a página é carregada completamente (`load`) e para quando o usuário tenta sair da página (`beforeunload`).

No exemplo, o evento `load` exibe uma mensagem no console assim que a página é carregada.
O evento `beforeunload` solicita uma confirmação ao usuário ao tentar sair da página, prevenindo uma saída acidental e alertando sobre a perda de dados.
*/

window.addEventListener("load", () => {
  console.log("A página carregou!"); // Exibe mensagem quando a página é carregada
});

window.addEventListener("beforeunload", (e) => {
  e.preventDefault(); // Evita a saída imediata da página
  e.return = "Se você atualizar perderá todos os dados"; // Mensagem de alerta para o usuário
});

// Debounce
/*
O debounce é uma técnica usada para limitar a frequência de execução de uma função, reduzindo o número de vezes que um evento é disparado em um curto intervalo.
Isso otimiza o uso da memória e melhora o desempenho, especialmente para eventos que disparam constantemente, como o `mousemove`.

No exemplo, a função `debounce` recebe uma função (`f`) e um atraso (`delay`). Ela cria um timer (`timeout`) que é redefinido sempre que o evento é disparado.
Somente após o intervalo especificado (400ms no exemplo), a função será executada.

Aplicado no `mousemove`, o evento só será processado a cada 400ms enquanto o usuário mover o mouse, em vez de disparar constantemente.
*/

const debounce = (f, delay) => {
  let timeout;
  return (...args) => {
    if (timeout) {
      clearTimeout(timeout); // Limpa o timeout anterior se o evento ocorrer antes do tempo
    }
    timeout = setTimeout(() => {
      f.apply(null, args); // Executa a função após o atraso se não houver nova ativação
    }, delay);
  };
};

window.addEventListener("mousemove", debounce(() => {
  console.log("Executando a cada 400ms"); // Exibe mensagem a cada 400ms enquanto o mouse se move
}, 400));

