function todosIguales(array) {
  // Si todos los elementos del arreglo son iguales, retornar true.
  // Caso contrario, retornar false.
  // Tu código:
  for (let index = 0; index < array.length; index++) {
    let element = array[index];
    if (index < array.length-1) {     
      console.log(index);
      if (element != array[index + 1]) {

        return false;
      }
    }

  }
  return true;
}
todosIguales([20,20,20,20])
module.exports = todosIguales;
