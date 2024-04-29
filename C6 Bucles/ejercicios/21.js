function esPotenciaDeDos(numero) {
  // La función recibe un "numero" por argumento.
  // Determina si es una potencia de 2.
  // Devuelve true si lo es, sino devuelve false.
  // PISTA: Utiliza un bucle while.
  // Tu código:
  let aux = 0
  let resultado = 0
  while (resultado < numero) {
    resultado= Math.pow (2, aux)
    aux++
    
   if(resultado==numero) {return true;
    }
    
  }
  return false;
}
  module.exports = esPotenciaDeDos;
