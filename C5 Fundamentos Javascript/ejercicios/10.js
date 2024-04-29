function esFechaValida(fecha) {
  // La función recibe un argumento "fecha".
  // Comprueba si este corresponde a una fecha válida.
  // Si es así, retorna true, sino retorna false.
  // Tu código:
  const formatoValido = /^\d{4}-\d{2}-\d{2}$/;
  if(fecha instanceof Date){
    const año = fecha.getFullYear();
    const mes = fecha.getMonth();
    const dia = fecha.getDate();
    let fechaFinal = año+"-"+mes+"-"+dia
    if (!formatoValido.test(fechaFinal)) {
  
      return false;
    }else{
      return true
    }
  }else{
    return false;

  }

}


  
module.exports = esFechaValida;