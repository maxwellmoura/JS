// Criação de uma instância personalizada do Axios
const postsFetch = axios.create({
    // Definição da URL base para todas as requisições
    baseURL: "https://jsonplaceholder.typicode.com",
    
    // Definição dos headers padrão para todas as requisições
    headers: {
      // Tipo de conteúdo aceito
      Accept: "application/json",
      
      // Token de autorização (note que há um erro de digitação: "Authorizarion" deve ser "Authorization")
      Authorizarion: "meunovotoken"
    }
  })