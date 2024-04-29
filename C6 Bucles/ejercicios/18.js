function productoEntreNúmeros(a, b) {
  // Dados dos argumentos "a" y "b", devuelve el producto de todos
  // los números entre a y b (inclusive).
  // Tu código:
  let resultado=a
for (let index = a; index <b; index++) {
  resultado=resultado*(index+1)
  
}
if (resultado==-0)
{return 0;
}
return resultado

}

module.exports = productoEntreNúmeros;