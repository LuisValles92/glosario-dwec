var expresionNOM = /^[a-z -]+$/i;
var expresionDNI = /^\d{8}[A-Z]$/;
var expresionCP = /^[0-9]{5}$/;
var expresionTEL = /^[679](\d{8})$/;
var expresionMAT = /^[0-9]{4}[^AEIOU0123456789Q]{3}$/;

var expresionDATE = /^([2](\d{3})(-)(0[1-9]|1[0-1])(-)([0-2][0-9]|3[0-1]))$/;
console.log(expresionDATE.test("2020-11-31"));
var fecha = new Date(2020, 11, 31);
fecha.setTime(fecha.getTime() - fecha.getTimezoneOffset() * 60 * 1000);
console.log(fecha);

var expresion = /^[0-9,A-Z,a-z]{4}$/;
console.log(expresion.test("zZ11"));

var cadena_CP = "12345";
console.log(cadena_CP.replace(expresionCP, "47009"));