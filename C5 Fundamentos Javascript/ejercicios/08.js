const nuevaMultiplicacion = require("./05")

function esNumeroEntero(numero) {
  // La función recibe un argumento "numero".
  // Verifica si este es un número entero o no.
  // Returna true si lo es, de lo contrario, retorna false.
  // Tu código:
  let resultado;
  if (typeof numero != "number") { 
    resultado = false;
   }
else {
  if( numero %1==0) {
    resultado=true;
  }
  else {
    resultado=false;
  }
}
return resultado
}



esNumeroEntero(8)
module.exports = esNumeroEntero;