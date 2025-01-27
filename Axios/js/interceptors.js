// Interceptação de requisições
postsFetch.interceptors.request.use(
    // Função chamada antes da requisição ser enviada
    function (config) {
      console.log("Antes da requisição...")
      // Retorna a configuração da requisição para prosseguir com a requisição
      return config
    },
    // Função chamada se ocorrer um erro na requisição
    function (error) {
      // Retorna uma promessa rejeitada com o erro
      return Promise.reject(error)
    }
  )
  
  // Interceptação de respostas
  postsFetch.interceptors.response.use(
    // Função chamada quando a resposta é recebida
    function (resposta) {
      console.log("Antes da resposta...")
      // Retorna a resposta para prosseguir com o processamento
      return resposta
    },
    // Função chamada se ocorrer um erro na resposta
    function (error) {
      // Retorna uma promessa rejeitada com o erro
      return Promise.reject(error)
    }
  )