var json1 = '{"preguntas":[{"codigo":0,"enunciado":"La capital de España es...","respuesta1":"Madrid","respuesta2":"Barcelona","respuesta3":"Sevilla","correcta":"1"},\
{"codigo":3,"enunciado":"El día de Navidad es el 25 de...","respuesta1":"Enero","respuesta2":"Noviembre","respuesta3":"Diciembre","correcta":"3"},\
{"codigo":1,"enunciado":"La suma de dos y dos son...","respuesta1":"3","respuesta2":"4","respuesta3":"5","correcta":"2"},\
{"codigo":2,"enunciado":"El río Pisuerga pasa por...","respuesta1":"Murcia","respuesta2":"Almería","respuesta3":"Valladolid","correcta":"3"},\
{"codigo":4,"enunciado":"El número de módulos en segundo de DAW es de...","respuesta1":"4","respuesta2":"5","respuesta3":"6","correcta":"2"}]}';

var json2 = '{"examenes":[\
{"nombre":"Marcos","respuestas":[\
{"codigo":"3","respuesta":"3"},\
{"codigo":"2","respuesta":"3"},\
{"codigo":"0","respuesta":"2"},\
{"codigo":"4","respuesta":"1"},\
{"codigo":"1","respuesta":"1"}\
],\
"puntuacion":"0"},\
{"nombre":"Ana","respuestas":[\
{"codigo":"1","respuesta":"2"},\
{"codigo":"0","respuesta":"1"},\
{"codigo":"4","respuesta":"2"},\
{"codigo":"3","respuesta":"3"},\
{"codigo":"2","respuesta":"3"}\
],\
"puntuacion":"0"}\
]}';

var obj1 = JSON.parse(json1);
var array_preguntas = new Array();
array_preguntas = obj1.preguntas;
console.log("ARRAY DE PREGUNTAS:");
console.log(array_preguntas);

var obj2 = JSON.parse(json2);
var array_examenes = new Array();
array_examenes = obj2.examenes;
console.log("\n\nARRAY DE EXÁMENES (SIN PUNTUACIÓN):");
console.log(array_examenes);

var arraybi_respuestas = new Array();
for (x in array_examenes) {
    var obj = array_examenes[x];
    arraybi_respuestas.push(obj.respuestas);
}
console.log("\n\nARRAY BIDIMENSIONAL DE RESPUESTAS:");
console.log(arraybi_respuestas);

var arraybi_respuestas_correctas = new Array();
for (x in array_preguntas) {
    var obj = array_preguntas[x];
    arraybi_respuestas_correctas.push([obj.codigo, obj.correcta]);
}
console.log("\n\nARRAY BIDIMENSIONAL DE RESPUESTAS CORRECTAS:");
console.log(arraybi_respuestas_correctas);

var array_puntuaciones = new Array();
for (var f = 0; f < arraybi_respuestas.length; f++) {
    var puntuacion = 0;
    for (var c = 0; c < arraybi_respuestas[f].length; c++) {
        var obj = arraybi_respuestas[f][c];
        var codigo_respuesta = obj.codigo;
        var respuesta = obj.respuesta;
        for (var i = 0; i < arraybi_respuestas_correctas.length; i++) {
            var codigo_respuesta_correcta = arraybi_respuestas_correctas[i][0];
            var respuesta_correcta = arraybi_respuestas_correctas[i][1];
            if (codigo_respuesta == codigo_respuesta_correcta && respuesta == respuesta_correcta) {
                puntuacion++;
            }
        }
    }
    array_puntuaciones.push(puntuacion);
}
console.log("\n\nARRAY DE PUNTUACIONES:")
console.log(array_puntuaciones);

var numero_aprobados = 0;
var numero_suspensos = 0;
for (x in array_puntuaciones) {
    var puntuacion = array_puntuaciones[x];
    if (puntuacion >= 2.5) {
        numero_aprobados++;
    } else {
        numero_suspensos++;
    }
    for (y in array_examenes) {
        var obj = array_examenes[y];
        if (x == y) {
            obj.puntuacion = puntuacion;
        }
    }
}
console.log("\n\nARRAY DE EXÁMENES (CON PUNTUACIÓN):");
console.log(array_examenes);

obj2.examenes = array_examenes;
console.log("\n\nJSON2 (SIN PUNTUACIÓN):")
console.log(json2);

json2 = JSON.stringify(obj2);
console.log("\n\nJSON2 (CON PUNTUACIÓN):")
console.log(json2);

console.log("\n\nNÚMERO DE APROBADOS: " + numero_aprobados);
console.log("NÚMERO DE SUSPENSOS: " + numero_suspensos);