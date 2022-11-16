const selectid = (elemento) => document.getElementById(elemento)




function Carrinho() {
    // debugger
    var displaycar = document.getElementById("aside").style.display
    if (selectid("aside").style.display === "none") {
        selectid("aside").style.display = "block"

    } else {
        selectid("aside").style.display = "none"
    }

}