function toggleDetalles() {
    const detalles = document.getElementById("detalles");
    const titulo = document.querySelector(".titulo");

    if (detalles.classList.contains("oculto")) {
        detalles.classList.remove("oculto");
        titulo.innerHTML = "▼ Mostrar más";
    } else {
        detalles.classList.add("oculto");
        titulo.innerHTML = "▶ Mostrar más";
    }
}
