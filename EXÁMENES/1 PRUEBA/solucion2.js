var json1 = '{"preguntas":[{"codigo":0,"enunciado":"La capital de España es...","respuesta1":"Madrid","respuesta2":"Barcelona","respuesta3":"Sevilla","correcta":"1"},\
{"codigo":1,"enunciado":"La suma de dos y dos son...","respuesta1":"3","respuesta2":"4","respuesta3":"5","correcta":"2"},\
{"codigo":2,"enunciado":"El río Pisuerga pasa por...","respuesta1":"Murcia","respuesta2":"Almería","respuesta3":"Valladolid","correcta":"3"},\
{"codigo":3,"enunciado":"El día de Navidad es el 25 de...","respuesta1":"Enero","respuesta2":"Noviembre","respuesta3":"Diciembre","correcta":"3"},\
{"codigo":4,"enunciado":"El número de módulos en segundo de DAW es de...","respuesta1":"4","respuesta2":"5","respuesta3":"6","correcta":"2"}]}';

var json2 = '{"examenes":[\
{"nombre":"Marcos","respuestas":[\
{"codigo":"0","respuesta":"2"},\
{"codigo":"1","respuesta":"1"},\
{"codigo":"2","respuesta":"3"},\
{"codigo":"3","respuesta":"3"},\
{"codigo":"4","respuesta":"1"}\
],\
"puntuacion":"0"},\
{"nombre":"Ana","respuestas":[\
{"codigo":"0","respuesta":"1"},\
{"codigo":"1","respuesta":"2"},\
{"codigo":"2","respuesta":"3"},\
{"codigo":"3","respuesta":"3"},\
{"codigo":"4","respuesta":"2"}\
],\
"puntuacion":"0"}\
]}';

var plantilla = [];

var estadisticas = { aprobados: 0, suspensos: 0 };

var objPreguntas = JSON.parse(json1, function(k, v) {
    if (k == "codigo") {
        plantilla[v] = this.correcta;
    }
    return v;
});

var objRespuestas = JSON.parse(json2, function(k, v) {
    if (k == "respuestas") {
        this.puntuacion = corregir(plantilla, v);
    }
    return v;
});

function corregir(_plantilla, _respuestas) {
    var puntos = 0;
    _respuestas.forEach((x) => {
        x.respuesta == _plantilla[x.codigo] ? puntos++ : puntos = puntos;
    });
    return puntos;
}

var jsonCorregido = JSON.stringify(objRespuestas, function(k, v) {
    if (k == "puntuacion") {
        (v >= 2.5) ? estadisticas.aprobados++: estadisticas.suspensos++;
    }
    return v;
});

console.log(json2);
console.log("\n\n");
console.log(jsonCorregido);
console.log(estadisticas);