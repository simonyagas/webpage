function actualizarContador() {
  var fechaActual = new Date();
  
  // Ajusta la fecha objetivo con la hora específica (17:45 hora de Argentina)
  var fechaObjetivo = new Date("2023-12-23T17:45:00-03:00"); // Ajusta la fecha y la zona horaria según sea necesario

  var diferencia = fechaObjetivo - fechaActual;

  // Cálculos para obtener días, horas, minutos y segundos
  var segundos = Math.floor(diferencia / 1000);
  var minutos = Math.floor(segundos / 60);
  var horas = Math.floor(minutos / 60);
  var dias = Math.floor(horas / 24);

  horas %= 24;
  minutos %= 60;
  segundos %= 60;

  // Actualizar el contenido del contador en el HTML
  document.getElementById("dias").innerText = dias;
  document.getElementById("horas").innerText = horas;
  document.getElementById("minutos").innerText = minutos;
  document.getElementById("segundos").innerText = segundos;
}

// Actualizar el contador cada segundo
setInterval(actualizarContador, 1000);