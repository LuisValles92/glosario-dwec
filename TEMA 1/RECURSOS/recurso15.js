var nombre = "Luis Valles";
var altura = 202;

var concatenacion = nombre + " " + altura;

var datos = document.getElementById("datos");
datos.innerHTML = `
    <h1>Soy la caja de datos</h1>
    <h2>Mi nombre es: ${nombre}</h2>
    <h3>Mido: ${altura} cm</h3>
`;

if (altura >= 185) {
    datos.innerHTML += `<h4>Eres una persona ALTA</h1>`;
} else {
    datos.innerHTML += `<h4>Eres una persona BAJA</h1>`;
}

function MuestraMiCoche(marca, modelo) {
    var datos_coche = `
    <h5>Datos del coche</h5>
    <h6>La marca es ${marca}<br>
    El modelo es ${modelo}</h6>`;

    return datos_coche;
}

function imprimirCoche() {
    var datos = document.getElementById("datos");
    datos.innerHTML += MuestraMiCoche("Audi", "A4");
}

imprimirCoche();

var array_nombre_padres = ["Antonio", "Carmen"];
alert(array_nombre_padres[0] + " es tu padre");
alert(array_nombre_padres[1] + " es tu madre");

datos.innerHTML += "Padres de " + nombre + ":<br>";
datos.innerHTML += "Funci&oacute;n callback:<br>";
array_nombre_padres.forEach(function(nombre) {
    datos.innerHTML += nombre + "<br>";
});
datos.innerHTML += "Funci&oacute;n flecha:<br>";
array_nombre_padres.forEach(nombre =>
    datos.innerHTML += nombre + "<br>");

var arraybi_domicilio = [
    ["Calle", "N&uacute;mero", "Piso", "Letra", "CP", "Localidad"],
    ["Morena", 2, 11, "D", "47009", "Valladolid"],
    ["Garnacha", 6, , , "47194", "Fuensalda&ntilde;a"]
];

datos.innerHTML += "<h2>" + "Domicilios de " + nombre + "</h2>";

document.write("<table border = 2; width = 300; height =300;>");
for (var f = 0; f < arraybi_domicilio.length; f++) {
    if (f == 0) {
        document.write("<tr class='bg_red'>");
    } else {
        document.write("<tr class='bg_yellow'>");
    }
    for (var c = 0; c < arraybi_domicilio[f].length; c++) {
        document.write("<td>");
        if (arraybi_domicilio[f][c] == undefined) {
            arraybi_domicilio[f][c] = "";
        } else {
            document.write(arraybi_domicilio[f][c]);
        }
        document.write("</td>");
    }
    document.write("</tr>");
}
document.write("</table>");

document.write("Funci&oacute;n callback:<br>");
arraybi_domicilio.forEach(function(array_fila) {
    document.write(array_fila + "<br>");
});
document.write("Funci&oacute;n flecha:<br>");
arraybi_domicilio.forEach(fila =>
    document.write(fila + "<br>"));
document.write("Funci&oacute;n callback 2:<br>");
arraybi_domicilio.forEach(function(array_fila, numero_fila) {
    document.write(numero_fila + "<br>");
    document.write(array_fila + "<br>");
});