/*
LUIS VALLES PASTOR 2ºDAW
---
Ejercicio de expresiones regulares
Vence el 4 de octubre de 2020 23:59
Instrucciones
A partir de una cadena de texto en formato CSV obtener un array bidimensional ordenado con los siguientes campos:
Nombre
DNI
Código postal
Teléfono
Matrícula
Se supone que la cadena de texto contiene 25 valores separados por comas. Cada cinco valores se almacenan datos de una persona (nombre, dni, cp, teléfono y matrícula). Los 5 primeros de una persona, los 5 siguientes de otra y así sucesivamente.
El array bidimensional resultante debe tener las siguientes características:
El primer índice indica la persona
El segundo índice indica el campo de dato de cada persona por el orden especificado
*/
var expresionNOM = /^[a-z -]+$/i;
var expresionDNI = /^\d{8}[A-Z]$/;
var expresionCP = /^[0-9]{5}$/;
var expresionTEL = /^[679](\d{8})$/;
var expresionMAT = /^[0-9]{4}[^AEIOU0123456789Q]{3}$/;
var datos = "Luis,12378831A,47019,983667778,1234VGL,24688930B,Juan,685667778,46009,5678KKL,57010,74246791M,3684JSV,Marcos,746662478,0303JTG,56072,22346891C,932367528,Carmen Pastor,666637218,92334671B,Antonio-Valles,5566SHD,67310";
var array_uni = datos.split(",");

var array_bi = new Array();

var nombre, dni, cp, tel, mat;
for (var i = 0; i < array_uni.length; i++) {
    if (expresionNOM.test(array_uni[i])) {
        nombre = array_uni[i];
    }
    if (expresionDNI.test(array_uni[i])) {
        dni = array_uni[i];
    }
    if (expresionCP.test(array_uni[i])) {
        cp = array_uni[i];
    }
    if (expresionTEL.test(array_uni[i])) {
        tel = array_uni[i];
    }
    if (expresionMAT.test(array_uni[i])) {
        mat = array_uni[i];
    }
    if (nombre != undefined && dni != undefined && cp != undefined && tel != undefined && mat != undefined) {
        array_bi.push([nombre, dni, cp, tel, mat]);
        nombre = undefined;
        dni = undefined;
        cp = undefined;
        tel = undefined;
        mat = undefined;
    }
}

console.log("ARRAY UNIDIMENSIONAL:");
console.log(array_uni);
console.log("El array unidimensional tiene " + array_uni.length + " elementos."); //25
console.log("Posición 1: " + array_uni[1]); //12378831A
console.log("Posición 19: " + array_uni[19]); //Carmen Pastor
console.log("Posición 20: " + array_uni[20]); //666637218
console.log("Bucle for del array unidimensional:");
var vector = "";
for (var i = 0; i < array_uni.length; i++) {
    var dato = array_uni[i];
    vector += dato + " ";
}
console.log(vector);

console.log("\nARRAY BIDIMENSIONAL:");
console.log(array_bi);
console.log("El array bidimensional tiene " + array_bi.length + " elementos."); //5
console.log("Fila 0, Columna 1: " + array_bi[0][1]); //12378831A
console.log("Fila 3, Columna 0: " + array_bi[3][0]); //Carmen Pastor
console.log("Fila 4, Columna 3: " + array_bi[4][3]); //666637218
console.log("Bucle for del array bidimensional:");
for (var fila = 0; fila < array_bi.length; fila++) {
    var persona = "";
    for (var columna = 0; columna < array_bi[fila].length; columna++) {
        var dato = array_bi[fila][columna];
        persona += dato + "\t";
    }
    console.log(persona);
}