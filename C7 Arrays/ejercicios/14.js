function contarElementosMayoresA10(array) {
  // Cuenta y devuelve la cantidad de elementos mayores a 10 en el array de números.
  // Tu código:
  let contar=0
for (let index = 0; index < array.length; index++) {
  let element = array[index];
  if (element>10 ) {
   contar++;
  }
  
}
return contar
}

module.exports = contarElementosMayoresA10;
