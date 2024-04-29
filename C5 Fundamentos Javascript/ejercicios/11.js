function esMayorDeEdad(fechaNacimiento) {
  // La función recibe un argumento "fechaNacimiento" correspondiente a la fecha
  // de nacimiento de una persona.
  // Determina si esta persona es mayor de edad (tiene 18 años o más).
  // Devuelve true si lo es, caso contrario, retorna false.
  // PISTA: Investiga el método getFullYear() de la clase Date para obtener el año actual.
  // Tu código:
 
    // Obtener la fecha actual
    var fechaActual = new Date();
    
    // Obtener el año de nacimiento
    var yearNacimiento = fechaNacimiento.getFullYear();
    
    // Obtener el año actual
    var yearActual = fechaActual.getFullYear();
    
    // Calcular la edad restando el año actual menos el año de nacimiento
    var edad = yearActual - yearNacimiento;
    
    // Verificar si la edad es mayor o igual a 18
    if (edad >= 18) {
      return true;
    } else {
      return false;
    }


}


module.exports = esMayorDeEdad;