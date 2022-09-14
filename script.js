var consultaCEP = fetch("http://viacep.com.br/ws/01001000/json/") //fetch é um método assincrono com um parâmetro obrigatório, a URL
  .then((resposta) => resposta.json())
  .then((r) => {
    if (r.erro) { //Caso o formato do CEP seja válido, porém inexistente, o retorno de 'erro' será verdadeiro. https://viacep.com.br/
      throw Error("Erro na requisição, verifique o CEP");
    } else {
      console.log("O endereço encontrado é: " , r);
    }
  })
  .catch((erro) => console.log(erro))  //Catch quando a 'promise' é rejeitada
  .finally(mensagem => (console.log('Processamento concluído'))); //Independentemente da resposta, o "finally" irá acontecer.
console.log(consultaCEP);
