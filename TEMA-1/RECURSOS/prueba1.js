// var cadena = "47009";
// var cadena = "1234VGL";
// var cadena = "VA2991AF";
// var cadena = "685207334";
// var cadena = "12413841M";
// var cadena = "Luis Valles Pastor";
var cadena = "luisvalles92@hotmail.com";

var expresionCP = /^[0-9]{5}$/;
var expresionMAT1 = /^[0-9]{4}[^AEIOU0123456789Q]{3}$/;
var expresionMAT2 = /^[A-Z]{1,2}\d{4}[A-Z]{1,2}$/;
// var expresionTEL = /^[679][0-9]{9}$/;//MAL
var expresionTEL = /^[679](\d{8})$/;
var expresionDNI = /^\d{8}[A-Z]$/;
var expresionNOM = /^[a-z -]+$/i;
var expresionCOR = /^[_a-z0-9-]+(.[_a-z0-9-]+)*@[a-z0-9-]+(.[a-z0-9-]+)*(.[a-z]{2,4})$/;


if (expresionCP.test(cadena) == true || expresionMAT1.test(cadena) == true || expresionMAT2.test(cadena) == true || expresionTEL.test(cadena) == true || expresionDNI.test(cadena) == true || expresionNOM.test(cadena) == true || expresionCOR.test(cadena) == true) {
    if (expresionCP.test(cadena) == true) {
        console.log("La cadena es un código postal");
    }
    if (expresionMAT1.test(cadena) == true) {
        console.log("La cadena es una matrícula actual");
    }
    if (expresionMAT2.test(cadena) == true) {
        console.log("La cadena es una matrícula de antes");
    }
    if (expresionTEL.test(cadena) == true) {
        console.log("La cadena es un teléfono");
    }
    if (expresionDNI.test(cadena) == true) {
        console.log("La cadena es un DNI");
    }
    if (expresionNOM.test(cadena) == true) {
        console.log("La cadena es un nombre");
    }
    if (expresionCOR.test(cadena) == true) {
        console.log("La cadena es un correo electrónico")
    }
} else {
    console.log("La cadena no se ajusta a ninguna expresión regular");
}
// https://programacion.net/articulo/25_expresiones_regulares_que_todo_programador_web_deberia_conocer_1213
// https://www.arumeinformatica.es/blog/expresiones-regulares-conceptos-basicos/
// https://en.wikipedia.org/wiki/Email_address#Syntax