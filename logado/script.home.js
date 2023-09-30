let usuario = JSON.parse(localStorage.getItem("logado"));
document.getElementById("titulo").innerHTML = "Bem vindo(a), " + usuario.login + "!"
function voltar(){
    window.location.href = "../index.html"
}