var parrafos = document.querySelectorAll("p")


for (let i = 0; i < parrafos.length; i++) {
    const parrafo = parrafos[i];
    parrafo.addEventListener("click", function(){
        parrafo.classList.toggle("resaltado")
    })
}