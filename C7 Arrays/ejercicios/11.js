function duplicarElementos(array) {
  // Duplica (multiplica x2) cada elemento del array de números.
  // Devuelve un array con los duplicados.
  // Tu código:
  let arregloMultiplicado=[]
  for (let index = 0; index < array.length; index++) {
    let element = array[index]; 
    element=element*2;
  arregloMultiplicado.push(element)
  } 
return arregloMultiplicado

}

module.exports = duplicarElementos;
