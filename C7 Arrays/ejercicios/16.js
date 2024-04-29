function multiplicarElementosPorIndice(array) {
  // Multiplica cada elemento del array por su índice.
  // Devuelve el nuevo arreglo con los resultados.
  // Tu código:
  let nuevo=[]
  for (let index = 0; index < array.length; index++) {
    let element = array[index];
    element=element*index
    nuevo.push(element)
  }
  return nuevo
}

module.exports = multiplicarElementosPorIndice;
