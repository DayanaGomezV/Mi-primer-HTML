function convertirStringAMayusculas(array) {
  // Convierte a mayúsculas todos los strings del array.
  // Retorna el arreglo resultante.
  // Tu código:
  let texto=[]
  for (let index = 0; index < array.length; index++) {
    let element = array[index];
  texto.push(element.toUpperCase())

}
return texto;
}

module.exports = convertirStringAMayusculas;
