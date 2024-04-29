function tienenMismaLongitud(str1, str2) {
  // La función recibe dos argumentos "str1" e "str2" que son strings.
  // Retorna true si los dos strings tienen la misma longitud.
  // De lo contrario, retorna false.
  // Tu código:
  let resultado;
  if (typeof str1 != "string"||typeof str2 != "string") { 
    resultado = false;
   }
else {
  if( str1.length===str2.length) {
    resultado=true;
  }
  else {
    resultado=false;
  }
}
return resultado 
  
}

module.exports = tienenMismaLongitud;