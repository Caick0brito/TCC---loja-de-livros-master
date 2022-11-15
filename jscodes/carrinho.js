const selectid = (elemento) => document.getElementById(elemento)


async function Addcarrinho(number) {
    var response = await fetch("https://api.itbook.store/1.0/search/love");
    var bodyjson = await response.json();

    var idtitulo = "titulo" + number
    var idpreco = "preco" + number
    var idimg = "img" + number


    // var para usar o valor real do item
    var titulo = bodyjson.books[number].title;
    var preco = bodyjson.books[number].price.replace("$", "R$ ");
    var imagem = bodyjson.books[number].image;
    // uso para cálculo
    var precojson = preco.replace("R$", "");
    var precocalc = parseFloat(precojson)
    var precototal =
        console.log(precototal)



}

function Carrinho() {
    // debugger
    var displaycar = document.getElementById("aside").style.display
    if (selectid("aside").style.display === "none") {
        selectid("aside").style.display = "block"

    } else {
        selectid("aside").style.display = "none"
    }

}