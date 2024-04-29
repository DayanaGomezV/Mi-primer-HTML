const esNumeroEntero = require("./08");

function esNuloOIndefinido(valor) {
  // La función recibe un argumento "valor".
  // Si este valor es null o undefined, retorna true.
  // De lo contrario, retorna false.
  // Tu código:
  let resultado;
  if ( valor == null || typeof valor=== "undefined") { 
    resultado = true;
   }
  else {
resultado= false }
return resultado
}
esNuloOIndefinido(1)
module.exports = esNuloOIndefinido;