const btnArriba = document.getElementById("btnTop");

// Para mostrar/ocultar según el scroll
window.addEventListener("scroll", () => {
    if (window.scrollY <= 200) {
        btnArriba.classList.add("d-none"); // Se oculta
    } else {
        btnArriba.classList.remove("d-none"); // Aparece
    }
});

// Para que al hacer clic suba suavemente
btnArriba.addEventListener("click", () => {
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
});