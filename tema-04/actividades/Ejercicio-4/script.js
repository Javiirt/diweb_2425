document.getElementById("miFormulario").addEventListener("submit", function(event) {
    event.preventDefault(); // Evita el envío normal
    document.getElementById("mensaje").classList.remove("oculto");
    setTimeout(() => {
        document.getElementById("mensaje").classList.add("oculto");
        this.reset();
    }, 3000);
});
