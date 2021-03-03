var json = '{"solicitudes":[\
    {"codigo":0, "nombre":"Luis    ","fechanac":"4-7-2005","notaExpediente":"7.5","admitido":"","causaExclusion":""},\
    {"codigo":1, "nombre":"Marta   ","fechanac":"3-8-2003","notaExpediente":"15.52","admitido":"","causaExclusion":""},\
    {"codigo":2, "nombre":"Ana     ","fechanac":"1-7-1998","notaExpediente":"8.60","admitido":"","causaExclusion":""},\
    {"codigo":3, "nombre":"Maria   ","fechanac":"2000-9-3","notaExpediente":"7.92","admitido":"","causaExclusion":""},\
    {"codigo":4, "nombre":"Juan    ","fechanac":"6-2-2003","notaExpediente":"8.12","admitido":"","causaExclusion":""},\
    {"codigo":5, "nombre":"Jorge   ","fechanac":"9-1-2000","notaExpediente":"9.14","admitido":"","causaExclusion":""},\
    {"codigo":6, "nombre":"Antonio ","fechanac":"6-3-2004","notaExpediente":"6.34","admitido":"","causaExclusion":""},\
    {"codigo":7, "nombre":"Susana  ","fechanac":"9-7-2001","notaExpediente":"7.74","admitido":"","causaExclusion":""},\
    {"codigo":8, "nombre":"Fernando","fechanac":"2-2-2002","notaExpediente":"5.78","admitido":"","causaExclusion":""},\
    {"codigo":9, "nombre":"Alvaro  ","fechanac":"3-1-2001","notaExpediente":"7.58","admitido":"","causaExclusion":""},\
    {"codigo":10,"nombre":"Manuel  ","fechanac":"9-1-2003","notaExpediente":"9.16","admitido":"","causaExclusion":""},\
    {"codigo":11,"nombre":"Jaime   ","fechanac":"6-3-2005","notaExpediente":"6.34","admitido":"","causaExclusion":""},\
    {"codigo":12,"nombre":"Monica  ","fechanac":"9-7-2004","notaExpediente":"7.74","admitido":"","causaExclusion":""},\
    {"codigo":13,"nombre":"Lucia   ","fechanac":"2-2-2003","notaExpediente":"5.78","admitido":"","causaExclusion":""},\
    {"codigo":14,"nombre":"Federico","fechanac":"4-1-2004","notaExpediente":"7.58","admitido":"","causaExclusion":""}\
]}';

var _objeto = JSON.parse(json);
var vector = _objeto.solicitudes;

var expresionFECHA = /^(\d{1,2})(-)(\d{1,2})(-)(\d{4})$/;
var expresionNOTA = /^(\d{1})(.)(\d{2})$/;

var vector_notas = [];

for (var i = 0; i < vector.length; i++) {
    var objeto = vector[i];
    if (expresionFECHA.test(objeto.fechanac) && (expresionNOTA.test(objeto.notaExpediente))) {
        var fecha = objeto.fechanac;
        var anio = fecha.substr(fecha.length - 4, fecha.length);
        var nota = objeto.notaExpediente;
        if ((anio == 2000 || anio == 2001 || anio == 2002 || anio == 2003 || anio == 2004 || anio == 2005) && (nota >= 0 || nota <= 10)) {
            // console.log(fecha);
            // console.log(nota);
            vector_notas.push(nota);
        } else {
            if (nota < 0 || nota > 10) {
                objeto.causaExclusion = "La nota no está entre 0 y 10";
            } else {
                objeto.causaExclusion = "No se trata de una persona nacida entre el año 2000 y 2005";
            }
            objeto.admitido = false;
        }
    } else {
        if (!expresionFECHA.test(objeto.fechanac)) {
            objeto.causaExclusion = "El formato de la fecha es inválida";
        }
        if (!expresionNOTA.test(objeto.notaExpediente)) {
            if (objeto.notaExpediente < 0 || objeto.notaExpediente > 10) {
                objeto.causaExclusion = "La nota no está entre 0 y 10";
            } else {
                objeto.causaExclusion = "El formato de la nota es inválida";
            }
        }
        objeto.admitido = false;
    }
}

vector_notas.sort(function(a, b) {
    return a - b;
});
// console.table(vector_notas);

vector_notas_aprobadas = [vector_notas[vector_notas.length - 1], vector_notas[vector_notas.length - 2], vector_notas[vector_notas.length - 3]];
// console.table(vector_notas_aprobadas);

for (var i = 0; i < vector.length; i++) {
    var objeto = vector[i];
    if (objeto.admitido == "" && objeto.causaExclusion == "") {
        if (objeto.notaExpediente == vector_notas_aprobadas[0] || objeto.notaExpediente == vector_notas_aprobadas[1] || objeto.notaExpediente == vector_notas_aprobadas[2]) {
            objeto.causaExclusion = "Ninguna";
            objeto.admitido = true;
        } else {
            objeto.causaExclusion = "En lista de espera";
            objeto.admitido = false;
        }
    }
}

console.table(vector);
_objeto.solicitudes = vector;
json = JSON.stringify(_objeto);
console.log(json);