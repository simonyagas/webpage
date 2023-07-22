function tiempoRestanteHastaFecha(fechaObjetivo) {
    // Obtenemos la fecha actual
    var fechaActual = new Date();
  
    // Convertimos la fecha objetivo a un objeto de tipo Date si no lo es
    if (!(fechaObjetivo instanceof Date)) {
      fechaObjetivo = new Date(fechaObjetivo);
    }
  
    // Calculamos la diferencia en milisegundos entre la fecha objetivo y la fecha actual
    var diferencia = fechaObjetivo.getTime() - fechaActual.getTime();
  
    // Calculamos los días, horas, minutos y segundos restantes
    var dias = Math.floor(diferencia / (1000 * 60 * 60 * 24));
    diferencia -= dias * (1000 * 60 * 60 * 24);
  
    var horas = Math.floor(diferencia / (1000 * 60 * 60));
    diferencia -= horas * (1000 * 60 * 60);
  
    var minutos = Math.floor(diferencia / (1000 * 60));
    diferencia -= minutos * (1000 * 60);
  
    var segundos = Math.floor(diferencia / 1000);
  
    return {
      dias: dias,
      horas: horas,
      minutos: minutos,
      segundos: segundos
    };
  }
  
  // Ejemplo de uso
  var fechaObjetivo = new Date('2023-12-31 23:59:59');
  var tiempoRestante = tiempoRestanteHastaFecha(fechaObjetivo);