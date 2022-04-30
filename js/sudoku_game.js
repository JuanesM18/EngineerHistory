/* Indent: Shift + Alt + F */
const fps = 10;
var xEscenario = 0;

/* Función flecha atacar */
const atacar = () => {
  console.log("Has atacado");
};

/* Función anónima mueveEscenario */
const mueveEscenario = function () {
  xEscenario++;
  console.log(xEscenario);
};

/* Comentarios: Shift + Alt + A */
/* Función flecha que muestra mensaje por consola */
const principal = () => {
  mueveEscenario();
};

/* setInterval es una función que ejecuta la función principal cada cierto tiempo 
Esta función se ejecuta cada 0,1 segundos */
setInterval(principal, 1000 / fps);
