function promedioResultadosTest(resultadosTest) {
  // Itera sobre los elementos del arreglo resultadosTest y devuelve el promedio de las notas.
  // Tu código:
  let suma=0
  let promedio
  for (let index = 0; index < resultadosTest.length; index++) {
    let element = resultadosTest[index];
    suma=suma+element
    promedio=suma/resultadosTest.length;
  }
  return promedio;
}

module.exports = promedioResultadosTest;
