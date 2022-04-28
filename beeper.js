var boton = document.querySelector("button")
var cuerpo = document.querySelector("body")

var seEjecutaEnEvento = function() {
    cuerpo.insertAdjacentHTML("beforeend", "BEEP <br>")
    cuerpo.classList.toggle("color")
}

boton.addEventListener("click", seEjecutaEnEvento)