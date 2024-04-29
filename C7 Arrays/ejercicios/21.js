function mesesDelAño(array) {
  // El array contiene algunos meses del año desordenados. Debes recorrerlo, buscar los meses "Enero",
  // "Marzo" y "Noviembre", guardarlos en un nuevo arreglo y retornarlo.
  // Si alguno de los meses no está, retornar el string: "No se encontraron los meses pedidos".
  // Tu código:
  let mesesNuevos=[]
  for (let index = 0; index < array.length; index++) {
    let element = array[index];
    if (element=="Enero"|| element=="Marzo"|| element=="Noviembre") {
      mesesNuevos.push(element);

    }
  }

  if(mesesNuevos.length!=3) {
    return "No se encontraron los meses pedidos";
  }
  return mesesNuevos
}

module.exports = mesesDelAño;
