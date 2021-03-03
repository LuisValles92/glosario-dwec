var var_json = '[\
    {"nombre":"antonio","fechanac":"1954-12-28"},\
    {"nombre":"flora","fechanac":"1901-11-22"},\
    {"nombre":"carmen","fechanac":"1956-10-17"},\
    {"nombre":"luis","fechanac":"1992-11-11"}\
]';

var array = JSON.parse(var_json, function(key, value) {
    if (key == "fechanac") {
        var fecha = new Date(value);
        var dia = fecha.getDate();
        var mes = fecha.getMonth();
        var anio = fecha.getFullYear();
        if (dia % 2 == 0) {
            fecha = new Date(++anio, mes, dia);
            fecha.setTime(fecha.getTime() - fecha.getTimezoneOffset() * 60 * 1000);
            return fecha;
        } else {
            return fecha;
        }
    } else {
        return value;
    }
});
console.log(array);

for (x in array) {
    var obj = array[x];
    var fecha = new Date(obj.fechanac);
    var dia = fecha.getDate();
    var mes = fecha.getMonth();
    var anio = fecha.getFullYear();
    var cadena = anio + "-" + (++mes) + "-" + dia;
    obj.fechanac = cadena;
}

console.log(var_json);
var_json = JSON.stringify(array);
console.log(var_json);