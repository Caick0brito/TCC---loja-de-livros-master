
function MudarPagina() {
    window.location.href = "Home.html"
}













// criei uma função e add o async
// async function entrar() {
//     debugger
//     const corpo = {
//         email: document.getElementById("email").value,
//         senha: document.getElementById("senha").value,

//     };

//     const requisicao = {
//         method: 'POST',
//         body: JSON.stringify(corpo),
//         headers: {
//             "Content-Type": "application/json"
//         }
//     }
//     const resultadoApi = await fetch("https://codifica-demo-api.herokuapp.com/api/v1/users/login", requisicao);
//     const resultadojson = await resultadoApi.json();
//  alert (resultadoApi.status)
//     if (resultadoApi.ok === "Login feito com sucesso" {
//         window.location.href = "../Home.html";

//     } else {
//         alert(resultadojson.mensagem)
//     }

// }
