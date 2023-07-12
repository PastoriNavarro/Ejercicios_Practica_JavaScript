let fecha = new Date();
let hora = fecha.getHours();
let minutos = fecha.getUTCMinutes();
let mes = fecha.getMonth();
let dia = fecha.getDate();
let año = fecha.getFullYear();

let diaSemana = ['Domingo', 'Lunes', 'Martes', 'Miercoles', 'Jueves', 'Viernes', 'Sábado'];
let diaMes = ['Enero','Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio', 'Agosto', 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre'];


console.log(`Hoy es ${diaSemana[fecha.getDay()]}, ${dia} de ${diaMes[fecha.getMonth()]} de ${año}, y son las ${hora}:${minutos} horas. `);

document.getElementById("hora").innerHTML = `<p>Hoy es ${diaSemana[fecha.getDay()]}, ${dia} de ${diaMes[fecha.getMonth()]} de ${año}, y son las ${hora}:${minutos} horas. </p>`
