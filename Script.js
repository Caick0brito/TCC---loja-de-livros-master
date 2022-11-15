
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

    alert(resultadojson.mensagem)
}

function navegarLogin() {
    window.location.href = "Login/Login.html";
}

function navegarHome() {
    window.location.href = "../home.html";
}
// async function SetHome() {
//     // api  

//     // var rodadas = 0;
//     debugger;
//     var response = await fetch("https://api.itbook.store/1.0/new");

//     console.log(response)
//     var json = response.JSON
//     var preco= json.books[0].price
//     alert (preco)
//     var livros = json.books[2].price
//     var idnumber = 1 + rodadas;
//     livros.lenght = rodadas;
//     // infos da api
//     var titulo = document.getElementById("titulo1").innerText = livros.title
//     var preco = document.getElementById("preco" + idnumber).innerText = livros.price;
//     var imagem = document.getElementById("titulo" + idnumber).src = livros.image;
//     alert(livros)
//     // for 





// for (contador = 0; contador < 9; contador++) {
//     var imagemhome = document.getElementById("caixa" + numeroimagem);
//     rodadas = rodadas + 1


// }}

async function Comprar() {
    debugger;
    var response = await fetch("https://api.itbook.store/1.0/new");
    var bodyjson = await response.json()
    var book = bodyjson.books[0].title

    console.log(book)
    alert(book)
}

