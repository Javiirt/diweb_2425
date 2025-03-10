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


// Diálogo login
const loginButton = document.getElementById("loginButton");
const loginGoogleButton = document.getElementById("loginGoogleButton");
const loginDialog = document.getElementById("loginDialog");
const loginCloseButton = document.getElementById("loginCloseDialog");

loginButton.addEventListener("click", function (event) {
    event.preventDefault(); // Evitar el envío del formulario
    loginDialog.showModal(); // Mostrar el diálogo
});

loginGoogleButton.addEventListener("click", function (event) {
    event.preventDefault(); // Evitar el envío del formulario
    loginDialog.showModal(); // Mostrar el diálogo
});

loginCloseButton.addEventListener("click", function () {
    loginDialog.close(); // Cerrar el diálogo
});

// Diálogo registro
const registroButton = document.getElementById("registroButton");
const registroDialog = document.getElementById("registroDialog");
const registroCloseButton = document.getElementById("registroCloseDialog");

registroButton.addEventListener("click", function (event) {
    event.preventDefault(); // Evitar el envío del formulario
    registroDialog.showModal(); // Mostrar el diálogo
});

registroCloseButton.addEventListener("click", function () {
    registroDialog.close(); // Cerrar el diálogo
});

// Diálogo cesta
const pagoButton = document.getElementById("pagoButton");
const pagoDialog = document.getElementById("pagoDialog");
const pagoCloseButton = document.getElementById("pagoCloseDialog");

pagoButton.addEventListener("click", function (event) {
    event.preventDefault(); // Evitar el envío del formulario
    pagoDialog.showModal(); // Mostrar el diálogo
});

pagoCloseButton.addEventListener("click", function () {
    pagoDialog.close(); // Cerrar el diálogo
});

