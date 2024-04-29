function filtrarNumerosPares(array) {
  // Devuelve un arreglo solo con los números pares presentes en el array.
  // Tu código:
  let numeros=[]
 for (let index = 0; index < array.length; index++) {
  let element = array[index];
 if (element %2==0) { 

  numeros.push(element);
 }

}
return numeros
 }

module.exports = filtrarNumerosPares;
