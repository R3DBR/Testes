function pegar_resposta() {
    var resposta = prompt("Digite a resposta");
    if (resposta == "Bem vindo / a")
    {
        window.location.href = "../pag_central.html"
    }
    else{
        alert("Não")
    }
}