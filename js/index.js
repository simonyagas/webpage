// Función para actualizar el contador
function actualizarContador() {
  var fechaActual = new Date();
  var fechaObjetivo = new Date("2023-12-23"); // Establece la fecha objetivo aquí (formato: año-mes-día)

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