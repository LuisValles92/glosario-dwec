var var_json = '[\
    {"nombre":"antonio","fechanac":"1954-12-28"},\
    {"nombre":"paco","fechanac":"1954-11-18"},\
    {"nombre":"pepe","fechanac":"1954-3-11"},\
    {"nombre":"flora","fechanac":"1901-11-22"},\
    {"nombre":"carmen","fechanac":"1956-10-17"},\
    {"nombre":"luis","fechanac":"1992-11-11"}\
]';

var array = JSON.parse(var_json, function(key, value) {
    if (key == "fechanac") {
        var fecha = new Date(value);
        // fecha.setTime(fecha.getTime() - fecha.getTimezoneOffset() * 60 * 1000);
        return fecha.getTime();
    } else {
        return value;
    }
});
console.log(array);

//FUNCIÓN MUY IMPORTANTE
var array_ordenado = array.sort(function(a, b) {
    if (a.fechanac < b.fechanac) return -1;
    if (a.fechanac > b.fechanac) return 1;
    return 0;
});
console.log(array_ordenado);

for (x in array_ordenado) {
    var obj = array_ordenado[x];
    var fecha = new Date(obj.fechanac);
    var dia = fecha.getDate();
    var mes = fecha.getMonth();
    var anio = fecha.getFullYear();
    var cadena = anio + "-" + (++mes) + "-" + dia;
    obj.fechanac = cadena;
}
console.log(array_ordenado);

console.log("--->El/La más mayor: " + array_ordenado[0].nombre);
console.log("--->El/La más joven: " + array_ordenado[array_ordenado.length - 1].nombre);

console.log(var_json);
var_json = JSON.stringify(array_ordenado);
console.log(var_json);