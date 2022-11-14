async function sethome() {

    var endpoint = ("https://api.itbook.store/1.0/new");
    var response = await fetch(endpoint);
    var bodyjson = await response.json()
    var books = bodyjson.book

    var lenghttitulo = 0
    var titulo = books.lenght(lenghttitulo)
    var livros = book.titulo;
    alert(livros)


}