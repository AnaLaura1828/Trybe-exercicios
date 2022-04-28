function stopped(event) {
    event.preventDefault();
};
window.onload = function stop() {
  buttonEnviar = document.getElementById("enviar");
  buttonEnviar.addEventListener("click", stopped)

  let buttonClear = document.getElementById("apagar")
  buttonClear.addEventListener("click",forMyInput)
}
function forMyInput() {
let myArea = document.getElementsByTagName("textarea")
let tent1 = document.getElementsByTagName("input")
for(let i = 0; i < tent1.length; i+=1) {
  let armazena = tent1[i];
  armazena.value = "";
  armazena.checked = false;
}
myArea.value = "";
}