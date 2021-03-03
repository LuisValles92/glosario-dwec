var fechauno = new Date(); //Fecha actual
var fechados = new Date(2020, 11, 28); //Fecha del próximo cumpleaños de padre
console.log("Fecha actual: " + fechauno.toString());
console.log("Fecha del próximo cumpleaños de padre: " + fechados.toString());
console.log("Día de la semana (lunes) del cumpleaños de padre: " + fechados.getDay()); //1 (Lunes)
console.log("Día del mes del cumpleaños de padre: " + fechados.getDate()); //28
console.log("Mes del año (diciembre) del cumpleaños de padre: " + fechados.getMonth()); //11
console.log("Año del cumpleaños de padre: " + fechados.getFullYear()); //2020
// fechauno.setDate(fechauno.getDate() + 1);
// console.log("A la fecha del día actual le sumo un día: " + fechauno.toString());
var contador_de_dias = 0;
for (i = fechauno; i <= fechados; fechauno.setDate(fechauno.getDate() + 1)) {
    contador_de_dias++;
}
console.log("Faltan " + contador_de_dias + " días para el próximo cumpleaños de padre.");