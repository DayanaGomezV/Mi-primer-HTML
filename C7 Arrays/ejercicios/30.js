function encontrarElementoRepetido(numeros) {
  // La función recibe un argumento "numeros" que es un array de números.
  // Retorna el primer elemento repetido que se encuentre en el array.
  // Tu código:
  for (let index = 0; index < numeros.length; index++) {
    let element = numeros[index];
    {
      for (let j = index+1; j < numeros.length; j++) {
        let elemento = numeros[j];
      }
    }
    if (element==elemento)
    {
      return element;
    }
  }
}

module.exports = encontrarElementoRepetido;