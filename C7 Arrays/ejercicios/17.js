function agregarNumeros(arrayOfNums) {
  // Suma todos los elementos de arrayOfNums y retorna el resultado.
  // Tu código:
  
  let Suma=0
  for (let index = 0; index < arrayOfNums.length; index++) {
    let element = arrayOfNums[index];
    Suma=Suma+element
  }
  return Suma;
}

module.exports = agregarNumeros;
