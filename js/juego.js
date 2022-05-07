/* Creamos función para pulsar la tecla A */
const pulsarA = () => {
  console.log("Presionaste la tecla a");
};

const pulsarAB = () => {
  console.log("Presionaste la tecla a y b");
};

const pulsarIzqDer = () => {
  console.log("Presionaste izquierda y derecha");
};

const configuracionTeclado = { prevent_repeat: true };
const eventoTeclado = new window.keypress.Listener(this, configuracionTeclado);
eventoTeclado.simple_combo("a", pulsarA);
eventoTeclado.simple_combo("a b", pulsarAB);
eventoTeclado.simple_combo("left right", pulsarIzqDer);


