



window.onload = async function sethome() {


    var response = await fetch("https://api.itbook.store/1.0/search/love");
    var bodyjson = await response.json();
    var contador = 0




    for (contador; contador < 9; contador++) {
        if (window.location.href === "../Main/Home.html")
            debugger
        var idtitulo = "titulo" + contador
        var idpreco = "preco" + contador
        var idimg = "img" + contador

        var tituloapi = bodyjson.books[contador].title;
        var precoapi = bodyjson.books[contador].price;
        var imagemapi = bodyjson.books[contador].image;

        var preco = precoapi.replace("$", "R$  ")

        document.getElementById(idtitulo).innerText = tituloapi
        document.getElementById(idpreco).innerText = preco
        document.getElementById(idimg).src = imagemapi


    }
    // Uncaught(in promise) TypeError: Cannot set properties of null(setting 'innerText'

}