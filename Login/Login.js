
// criei uma função e add o async

async function Pesquisar_Livro() {
    // peguei o valor do elemento imput
    var livroQeuquero = document.getElementById("PesquisaLivro").value;

    // peguei a URL da var endpoit e concatenei com o livvro desejado
    var endpoit = `(https://api.itbook.store/1.0/search/mongodb/${livroQeuquero})`;

    // usando a URL para chamar a API, que contém o livro que eu quero
    // como o feth sempre volta uma promessa estou usando o await para esperaar
    var resposta = await feth(endpoit);

    // usando a função .json() para acessar o corpo da resposta
    // coloquei o await pois esta função retorna uma pomessa
    var CorpoJson = await resposta.JSON();

    // peguei a DIV resultado do HTML e criei uma variavel
    var resultado = document.getElementById("resultado");

    // sempre limpo oq está dentro da DIV resultado
    resultado.innerHTML = "";  
    
}

async function entrar() {
    debugger
    const corpo = {
        email: document.getElementById("email").value,
        senha: document.getElementById("senha").value,

    };

    const requisicao = {
        method: 'POST',
        body: JSON.stringify(corpo),
        heders: {
            "content-type": "application/json"
        }
    }
    const resultadoApi = await fetch("https://codifica-demo-api.herokuapp.com/api/v1/users/login", requisicao);
    const resultadojson = await resultadoApi.json();

    alert(resultadojson.mensagem)}

async function entrar() {
    debugger
    const corpo = {
        email: document.getElementById("email").value,
        senha: document.getElementById("senha").value,

    };

    const requisicao = {
        method: 'POST',
        body: JSON.stringify(corpo),
        heders: {
            "content-type": "application/json"
        }
    }
    const resultadoApi = await fetch("https://codifica-demo-api.herokuapp.com/api/v1/users/login", requisicao);
    const resultadojson = await resultadoApi.json();

    alert(resultadojson.mensagem)
}
