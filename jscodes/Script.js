var corpojsonmain = localStorage.getItem("login")
var corpomain = JSON.parse(corpojsonmain)
// criei uma função e add o async

var CarrinhoArray = []
async function entrar() {
    debugger
    var corpo = {
        email: document.getElementById("email").value,
        senha: document.getElementById("senha").value,
        login: false,
        produtos: []
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
    alert(resultadojson.mensagem)

    if (resultadoApi.ok) {
        corpo.login = true
        corpo.append(CarrinhoArray)
        var corpojson = JSON.stringify(corpo)
        localStorage.setItem("login", corpojson)
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
    console.log(corpomain);
    var response = await fetch("https://api.itbook.store/1.0/new");
    var bodyjson = await response.json()
    var book = bodyjson.books[0].title

    console.log(book)
    alert(book)
}

async function Addcarrinho(number) {
    debugger
    var response = await fetch("https://api.itbook.store/1.0/search/love");
    var bodyjson = await response.json();

    var idtitulo = "titulo" + number;
    var idpreco = "preco" + number;
    var idimg = "img" + number;


    // var para usar o valor literal do item
    var pedido = {
        titulo: bodyjson.books[number].title,
        preco: bodyjson.books[number].price.replace("$", "R$ "),
        imagem: bodyjson.books[number].image,
    }
    // uso para cálculo

    var precojson = pedido.preco.replace("R$", "");
    var precocalc = parseFloat(precojson);
    var precototal = precocalc + precocalc * 2;
    console.log(precototal)


    // area do produto no carrinho
    var addproduto = document.createElement("div");
    addproduto.classList.add("add-produto");

    // area da imagem do produto no carrinho
    var divImg = document.createElement("div");
    divImg.classList.add("div-img-produto-carrinho");
    addproduto.append(divImg);

    // imagem do carrinho
    var Imgdadiv = document.createElement("img")
    Imgdadiv.classList.add("img-produto-carrinho")
    Imgdadiv.setAttribute("id", idimg)
    divImg.append(Imgdadiv)

    //div do titulo do carrinho
    var divTitulo = document.createElement("div")
    divTitulo.classList.add("titulo-produto-carrinho")
    addproduto.append(divTitulo)

    // titulo do carrinho
    var titulocart = document.createElement("p")
    titulocart.classList.add("p-titulo-carrinho")
    titulocart.setAttribute("id", idtitulo)
    divTitulo.append(titulocart)

    // div do preço do carrinho
    var divpreco = document.createElement("div")
    divpreco.classList.add("preco-produto-carrinho")
    addproduto.append(divpreco)

    //preço do carrinho
    var precocart = document.createElement("p")
    precocart.classList.add("p-preco-carrinho")
    precocart.setAttribute("id", idpreco)
    // precocart.innerText =   ;
}