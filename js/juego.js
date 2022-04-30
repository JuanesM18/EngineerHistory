/* Activar el evento cuando se da click flecha hacia abajo */
document.addEventListener("keydown", function (tecla) {
  /* Condicional de validación, si se cumple la condición
    de los parentesis el programa hace lo que esta entre las llaves */
  if (tecla.keyCode == 32) {
    console.log("Espacio");
  }

  if (tecla.keyCode == 38) {
    console.log("Flecha arriba");
  }

  if (tecla.keyCode == 37) {
    console.log("Flecha izquierda");
  }
  
  if (tecla.keyCode == 39) {
    console.log("Flecha derecha");
  }
});
