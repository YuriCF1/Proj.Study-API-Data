// FAZENDO O FETCH COM VÁRIOS 'THEN', CONHECIDO COMO THEN HELL

// var consultaCEP = fetch("http://viacep.com.br/ws/01001000/json/") //fetch é um método assincrono com um parâmetro obrigatório, a URL
//   .then((resposta) => resposta.json())
//   .then((r) => {
//     if (r.erro) {
//       //Caso o formato do CEP seja válido, porém inexistente, o retorno de 'erro' será verdadeiro. https://viacep.com.br/
//       throw Error("Erro na requisição, verifique o CEP");
//     } else {
//       console.log("O endereço encontrado é: ", r);
//     }
//   })
//   .catch((erro) => console.log(erro)) //Catch quando a 'promise' é rejeitada
//   .finally((mensagem) => console.log("Processamento concluído")); //Independentemente da resposta, o "finally" irá acontecer.
// console.log(consultaCEP);

// USANDO FUNÇÕES ASYNC AWAIT, COM O USO DE TRY DE CATCH

async function buscaEndereco(cep) {
  try {
    // var consultaCEP = await fetch("http://viacep.com.br/ws/01001000/json/"); //fetch é um método assincrono com um parâmetro obrigatório, a URL
    var consultaCEP = await fetch(`http://viacep.com.br/ws/${cep}/json/`); //fetch é um método assincrono com um parâmetro obrigatório, a URL
    var consultaCEPConvertida = await consultaCEP.json();
    if (consultaCEPConvertida.erro) {
      throw Error("CEP não existente");
    }
    console.log(consultaCEPConvertida);
  } catch (erro) {
    console.log(erro);
  }
}

var cep = document.getElementById("cep");
cep.addEventListener("focusout", () => buscaEndereco(cep.value));

// buscaEndereco();

// USANDO PROMISSE ALL
// async function buscaEndereco(cep) {
//   try {
//     var consultaCEP = await fetch(`http://viacep.com.br/ws/${cep}/json/`); //fetch é um método assincrono com um parâmetro obrigatório, a URL
//     var consultaCEPConvertida = await consultaCEP.json();
//     if (consultaCEPConvertida.erro) {
//         throw Error ("CEP não existente");
//     }
//     console.log(consultaCEPConvertida);
//     return consultaCEPConvertida;
//   } catch (erro) {
//     console.log(erro);
//   }
// }

// let ceps = ['01001000', '01001001'];
// let conjuntoCeps = ceps.map(valores => buscaEndereco(valores))
// console.log(conjuntoCeps);
// Promise.all(conjuntoCeps).then(resposta => console.log(resposta))
