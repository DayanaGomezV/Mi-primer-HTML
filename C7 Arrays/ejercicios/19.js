function multiplicarArgumentos() {
  // Usa la palabra clave `arguments` para multiplicar todos los argumentos y devolver el producto.
  // Si no se pasan argumentos retorna 0. Si se pasa un argumento, simplemente retórnalo.
  // [PISTA]: "arguments" es un arreglo.
  // Tu código:
  if(arguments.length === 0){
    return 0
  }
  let multiplicacion = 1;
  for (let index = 0; index < arguments.length; index++) {
    let element = arguments[index];
    multiplicacion=multiplicacion*element
  }
  return multiplicacion;
  
  
}

module.exports = multiplicarArgumentos;
