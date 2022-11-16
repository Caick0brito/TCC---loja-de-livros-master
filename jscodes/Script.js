
// criei uma função e add o async
var CarrinhoArray  = []
async function entrar() {
    debugger
    var corpo = {
        email: document.getElementById("email").value,
        senha: document.getElementById("senha").value,

    };

    const requisicao = {
        method: 'POST',
        body: JSON.stringify(corpo),
        headers: {
            "Content-Type": "application/json"
        }
    }
    const resultadoApi = await fetch("https://codifica-demo-api.herokuapp.com/api/v1/users/login", requisicao);
    const resultadojson = await resultadoApi.json();
    alert (resultadojson.mensagem)

    if (resultadoApi.ok){

        window.location.href = "../Main/Home.html";

    } else {
        alert(resultadojson.mensagem)
    }
    
}

function navegarLogin() {
    window.location.href = "../Login/login.html";
}

function navegarHome() {
    window.location.href = "../Main/home.html";
}

async function Comprar() {
    debugger;
    var response = await fetch("https://api.itbook.store/1.0/new");
    var bodyjson = await response.json()
    var book = bodyjson.books[0].title

    console.log(book)
    alert(book)
}

async function Addcarrinho(number) {
    var response = await fetch("https://api.itbook.store/1.0/search/love");
    var bodyjson = await response.json();
 var pedido = {
    idtitulo: "titulo" + number,
    idpreco: "preco" + number,
    idimg: "img" + number
 }

    // var para usar o valor literal do item
    var titulo = bodyjson.books[number].title;
    var preco = bodyjson.books[number].price.replace("$", "R$ ");
    var imagem = bodyjson.books[number].image;
    
    // uso para cálculo

    var precojson = preco.replace("R$", "");
    var precocalc = parseFloat(precojson);
    var precototal = precocalc + precocalc * 2;
        console.log(precototal)



}