"use strict";
// Obtener el elemento con id="theme"
const themeButton = document.querySelector("#theme");

// Obtener el elemento con la etiqueta body
const body = document.body;

// Recuperar el estado inicial del tema de localStorage y transformarlo a booleano
const themeStorage = JSON.parse(localStorage.getItem("theme"));

// Definir si el estado inicial del tema es dark o no
let isDarkTheme = themeStorage ? themeStorage : false;

themeButton.textContent = isDarkTheme ? "☀️" : "🌙";

// Guardar el estado del tema en localStorage
localStorage.setItem("theme", isDarkTheme);

// Si isDarkTheme es true, agregar la clase dark al body
if (isDarkTheme) {
  body.classList.toggle("dark");
}

// Al hacer clic en el botón
themeButton.addEventListener("click", () => {
  // Agregar o quitar la clase dark del body
  body.classList.toggle("dark");

  // Cambiar el valor de isDarkTheme
  isDarkTheme = !isDarkTheme;
  console.log("isDarkTheme es:", isDarkTheme);

  // Cambiar el texto del botón
  themeButton.textContent = isDarkTheme ? "☀️" : "🌙";

  // Guardar el estado del tema en localStorage
  localStorage.setItem("theme", isDarkTheme);
});
