function agregarItemAlComienzoDelArray(array, elemento) {
  // Agrega el "elemento" al comienzo del arreglo recibido.
  // Retorna el arreglo.
  // Tu código:
  console.log(elemento);
  array.unshift(elemento);
  return array
}

module.exports = agregarItemAlComienzoDelArray;
