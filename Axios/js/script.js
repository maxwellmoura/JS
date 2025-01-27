// Verifica se o Axios está instalado e funcionando corretamente
console.log(axios)

// Função para realizar uma requisição GET para obter dados
const getData = async () => {
  try {
    // Realiza uma requisição GET para o endpoint "/users"
    const response = await postsFetch.get("/users", {
      // Define headers personalizados para a requisição
      headers: {
        "Content-Type": "application/json",
        custom: "headers",
      }
    })

    // Imprime a resposta no console
    console.log(response)

    // Retorna os dados da resposta
    return response.data
  } catch (error) {
    // Imprime o erro no console
    console.log(error)
  }
}

// Chama a função getData para obter os dados
getData()

// Seleciona o contêiner para imprimir os dados
const container = document.querySelector("#user-container")

// Função para imprimir os dados
const imprimindo = async () => {
  // Obtem os dados chamando a função getData
  const data = await getData()

  // Imprime os dados no console
  console.log(data)

  // Itera sobre os dados e cria elementos HTML para imprimir
  data.forEach((user) => {
    const div = document.createElement("div")
    const nomeElemento = document.createElement("h2")
    const emailElemento = document.createElement("h4")
    const telElemento = document.createElement("p")

    // Define o conteúdo dos elementos HTML
    nomeElemento.textContent = user.name
    emailElemento.textContent = user.email
    telElemento.textContent = user.phone

    // Adiciona os elementos HTML ao contêiner
    div.appendChild(emailElemento).after(nomeElemento, telElemento)
    container.appendChild(div)
  })
}

// Chama a função imprimindo para imprimir os dados
imprimindo()

// Seleciona o formulário para criar um novo post
const form = document.querySelector("#post-form")

// Seleciona os campos do formulário
const tituloInput = document.querySelector("#title")
const bodyInput = document.querySelector("#body")

// Adiciona um evento de submit ao formulário
form.addEventListener("submit", (e) => {
  // Previne o comportamento padrão do formulário
  e.preventDefault()

  // Realiza uma requisição POST para criar um novo post
  postsFetch.post("/posts", {
    // Define os dados do post
    title: tituloInput.value,
    body: bodyInput.value,
    userId: 1,
  })
})