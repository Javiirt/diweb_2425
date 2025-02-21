const button = document.getElementById("toggleButton");
const detalles = document.getElementById("detalles");

button.addEventListener("click", () => {
    if (detalles.classList.contains("hidden")) {
        detalles.classList.remove("hidden");
        button.textContent = "Mostrar más";
    } else {
        detalles.classList.add("hidden");
        button.textContent = "Mostrar menos";
    }
});
