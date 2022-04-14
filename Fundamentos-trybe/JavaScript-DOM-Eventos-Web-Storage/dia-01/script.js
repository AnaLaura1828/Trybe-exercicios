console.log(document.getElementById("page=title"));

function alterarCor (elemento, cor) {
    document.getElementById(elemento).style.backgroundColor = cor;
}
alterarCor("header-container", "green");

function alterarCor2 (elemento2, cor2) {
    document.getElementById(elemento2).style.backgroundColor = cor2 ;
}
alterarCor2("#emergency-tasks", "pink");