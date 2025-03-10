// Obtener los elementos necesarios
const toggleButton = document.getElementById("toggleMode");
const stylesheet = document.getElementById("stylesheet");

// Función para cambiar el CSS
toggleButton.addEventListener("click", function () {
    // Comprobar qué CSS está activo y cambiarlo
    if (stylesheet.getAttribute("href").includes("Oscuro")) {
        stylesheet.setAttribute("href", stylesheet.getAttribute("href").replace("Oscuro", ""));
        toggleButton.textContent = "Cambiar a Modo Oscuro"; // Cambiar texto del botón
    } else {
        stylesheet.setAttribute("href", stylesheet.getAttribute("href").replace(".css", "Oscuro.css"));
        toggleButton.textContent = "Cambiar a Modo Claro"; // Cambiar texto del botón
    }
});
// Botón de añadir a la cesta
const addToCartButtons = document.querySelectorAll(".product-card button");
const addToCartSound = document.getElementById("addToCartSound");
const cartDialog = document.getElementById("cartDialog");
const closeDialogButton = document.getElementById("cartCloseDialog");


// Añadir evento de clic a los botones de "Añadir al carrito"
addToCartButtons.forEach(button => {
    button.addEventListener("click", function () {
        addToCartSound.play();
        cartDialog.showModal(); // Mostrar el diálogo
    });
});

closeDialogButton.addEventListener("click", function () {
    cartDialog.close(); // Cerrar el diálogo
});


//Mensaje pago
document.getElementById("pagoForm").addEventListener("submit", function(event) {
    event.preventDefault(); // Evita el envío normal
    document.getElementById("mensajePago").classList.remove("oculto");
    setTimeout(() => {
        document.getElementById("mensajePago").classList.add("oculto");
        this.reset();
    }, 3000);
});