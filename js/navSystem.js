const nav = document.querySelector("#nav");
const abrir = document.querySelector("#abrir");
const cerrar = document.querySelector("#cerrar");

abrir.addEventListener("click", () => {
  nav.classList.add("visible");
  nav.classList.remove("cerrada");
})

cerrar.addEventListener("click", () => {
  nav.classList.remove("visible");
  nav.classList.add("cerrada");
})