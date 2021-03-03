var primera_fecha = new Date(2020, 0, 1);
var ultima_fecha = new Date(2020, 11, 31);
console.log("Primera fecha del año 2020:\n" + primera_fecha.toString());
console.log("Última fecha del año 2020:\n" + ultima_fecha.toString());
var array_meses = [];
for (i = primera_fecha.getMonth(); i <= ultima_fecha.getMonth(); i++) {
    array_meses.push(i);
}
console.log("ARRAY DE MESES:");
console.log(array_meses);
var array_dias = [];
var contador_de_dias = 0;
for (j = 1; j <= 12; j++) {
    contador_de_dias = 0;
    for (i = primera_fecha; i < new Date(2020, j, 1); primera_fecha.setDate(primera_fecha.getDate() + 1)) {
        contador_de_dias++;
    }
    array_dias.push(contador_de_dias);
}
console.log("ARRAY DE DÍAS:");
console.log(array_dias);
var array_inicio_semana = [];
for (i = 0; i < 12; i++) {
    array_inicio_semana.push(new Date(2020, i, 1).getDay());
}
console.log("ARRAY DE INICIOS DE SEMANA:");
console.log(array_inicio_semana);
var array_contador_semanas = [5, 5, 6, 5, 5, 5, 5, 6, 5, 5, 6, 5]; //A MANO
console.log("ARRAY DE CONTADOR DE SEMANAS:");
console.log(array_contador_semanas);
var arraybi_enero = new Array();
var arraybi_febrero = new Array();
var arraybi_marzo = new Array();
var arraybi_abril = new Array();
var arraybi_mayo = new Array();
var arraybi_junio = new Array();
var arraybi_julio = new Array();
var arraybi_agosto = new Array();
var arraybi_septiembre = new Array();
var arraybi_octubre = new Array();
var arraybi_noviembre = new Array();
var arraybi_diciembre = new Array();
var numero = 0;
for (y = 0; y < 12; y++) {
    for (i = 0; i < array_contador_semanas[y]; i++) {
        var array_numeros = [];
        if (i == 0) {
            if (array_inicio_semana[y] == 0) { //Para evitar conflicto con los domingos
                array_inicio_semana[y] = 7;
            }
            for (x = 0; x < array_inicio_semana[y] - 1; x++) {
                array_numeros.push("");
            }
            for (j = array_inicio_semana[y] - 1; j < 7; j++) {
                if (numero < array_dias[y]) {
                    numero++;
                    array_numeros.push(numero);
                }
            }
        } else {
            for (j = 0; j < 7; j++) {
                if (numero < array_dias[y]) {
                    numero++;
                    array_numeros.push(numero);
                } else { //LÍNEAS DE LOS DOS ÚLTIMOS CUADRITOS EN BLANCO DEL HTML
                    array_numeros.push("");
                }
            }
        }
        if (y == 0) {
            arraybi_enero.push(array_numeros);
        }
        if (y == 1) {
            arraybi_febrero.push(array_numeros);
        }
        if (y == 2) {
            arraybi_marzo.push(array_numeros);
        }
        if (y == 3) {
            arraybi_abril.push(array_numeros);
        }
        if (y == 4) {
            arraybi_mayo.push(array_numeros);
        }
        if (y == 5) {
            arraybi_junio.push(array_numeros);
        }
        if (y == 6) {
            arraybi_julio.push(array_numeros);
        }
        if (y == 7) {
            arraybi_agosto.push(array_numeros);
        }
        if (y == 8) {
            arraybi_septiembre.push(array_numeros);
        }
        if (y == 9) {
            arraybi_octubre.push(array_numeros);
        }
        if (y == 10) {
            arraybi_noviembre.push(array_numeros);
        }
        if (y == 11) {
            arraybi_diciembre.push(array_numeros);
        }
    }
    numero = 0;
}
var array_vec = [arraybi_enero, arraybi_febrero, arraybi_marzo, arraybi_abril, arraybi_mayo, arraybi_junio, arraybi_julio, arraybi_agosto, arraybi_septiembre, arraybi_octubre, arraybi_noviembre, arraybi_diciembre];
console.log(array_vec);
console.log("Bucle for del array bidimensional del array multidimensional:");
for (f = 0; f < array_vec.length; f++) {
    var arrayb = array_vec[f];
    document.write("<table width=300; height=300; border='2'; style='text-align:center; margin-left:auto; margin-right:auto;'>");
    var nombremes = "";
    if (f == 0) {
        nombremes = "MES DE ENERO";
    }
    if (f == 1) {
        nombremes = "MES DE FEBRERO";
    }
    if (f == 2) {
        nombremes = "MES DE MARZO";
    }
    if (f == 3) {
        nombremes = "MES DE ABRIL";
    }
    if (f == 4) {
        nombremes = "MES DE MAYO";
    }
    if (f == 5) {
        nombremes = "MES DE JUNIO";
    }
    if (f == 6) {
        nombremes = "MES DE JULIO";
    }
    if (f == 7) {
        nombremes = "MES DE AGOSTO";
    }
    if (f == 8) {
        nombremes = "MES DE SEPTIEMBRE";
    }
    if (f == 9) {
        nombremes = "MES DE OCTUBRE";
    }
    if (f == 10) {
        nombremes = "MES DE NOVIEMBRE";
    }
    if (f == 11) {
        nombremes = "MES DE DICIEMBRE";
    }
    document.write("<tr><td colspan=7; style='color: white; background-color: black;'><b>" + nombremes + "</b></td></tr>");
    document.write("<tr style='color: white; background-color: blue;'><td>L</td><td>M</td><td>X</td><td>J</td><td>V</td><td>S</td><td>D</td></tr>");
    for (fila = 0; fila < arrayb.length; fila++) {
        var semana = "";
        document.write("<tr>");
        for (columna = 0; columna < arrayb[fila].length; columna++) {
            var dia = arrayb[fila][columna];
            semana += dia + "\t";
            // https://www.calendario-365.es/dias-festivos/2020.html
            if (f == 0) {
                if (dia == 1 || dia == 6) { //DÍAS FESTIVOS
                    document.write("<td style=background-color:red;>");
                    document.write(dia);
                    document.write("</td>");
                } else {
                    document.write("<td>");
                    document.write(dia);
                    document.write("</td>");
                }
            }
            if (f == 1) {
                if (dia == 2 || dia == 23 || dia == 28) { //DÍAS FESTIVOS
                    document.write("<td style=background-color:red;>");
                    document.write(dia);
                    document.write("</td>");
                } else {
                    document.write("<td>");
                    document.write(dia);
                    document.write("</td>");
                }
            }
            if (f == 2) {
                if (dia == 1 || dia == 19 || dia == 29) { //DÍAS FESTIVOS
                    document.write("<td style=background-color:red;>");
                    document.write(dia);
                    document.write("</td>");
                } else {
                    document.write("<td>");
                    document.write(dia);
                    document.write("</td>");
                }
            }
            if (f == 3) {
                if (dia == 5 || dia == 6 || dia == 7 || dia == 8 || dia == 9 || dia == 10 || dia == 11 || dia == 12 || dia == 13 || dia == 23) { //DÍAS FESTIVOS
                    document.write("<td style=background-color:red;>");
                    document.write(dia);
                    document.write("</td>");
                } else {
                    document.write("<td>");
                    document.write(dia);
                    document.write("</td>");
                }
            }
            if (f == 4) {
                if (dia == 1 || dia == 2 || dia == 15) { //DÍAS FESTIVOS
                    document.write("<td style=background-color:red;>");
                    document.write(dia);
                    document.write("</td>");
                } else {
                    document.write("<td>");
                    document.write(dia);
                    document.write("</td>");
                }
            }
            if (f == 5) {
                if (dia == 1 || dia == 11) { //DÍAS FESTIVOS
                    document.write("<td style=background-color:red;>");
                    document.write(dia);
                    document.write("</td>");
                } else {
                    document.write("<td>");
                    document.write(dia);
                    document.write("</td>");
                }
            }
            if (f == 6) {
                if (dia == 25) { //DÍAS FESTIVOS
                    document.write("<td style=background-color:red;>");
                    document.write(dia);
                    document.write("</td>");
                } else {
                    document.write("<td>");
                    document.write(dia);
                    document.write("</td>");
                }
            }
            if (f == 7) {
                if (dia == 9 || dia == 15) { //DÍAS FESTIVOS
                    document.write("<td style=background-color:red;>");
                    document.write(dia);
                    document.write("</td>");
                } else {
                    document.write("<td>");
                    document.write(dia);
                    document.write("</td>");
                }
            }
            if (f == 8) {
                document.write("<td>");
                document.write(dia);
                document.write("</td>");
            }
            if (f == 9) {
                if (dia == 12 || dia == 25) { //DÍAS FESTIVOS
                    document.write("<td style=background-color:red;>");
                    document.write(dia);
                    document.write("</td>");
                } else {
                    document.write("<td>");
                    document.write(dia);
                    document.write("</td>");
                }
            }
            if (f == 10) {
                if (dia == 1 || dia == 9) { //DÍAS FESTIVOS
                    document.write("<td style=background-color:red;>");
                    document.write(dia);
                    document.write("</td>");
                } else {
                    document.write("<td>");
                    document.write(dia);
                    document.write("</td>");
                }
            }
            if (f == 11) {
                if (dia == 6 || dia == 8 || dia == 25) { //DÍAS FESTIVOS
                    document.write("<td style=background-color:red;>");
                    document.write(dia);
                    document.write("</td>");
                } else {
                    document.write("<td>");
                    document.write(dia);
                    document.write("</td>");
                }
            }
        }
        document.write("</tr>");
        console.log(semana);
    }
    document.write("</table><br>");

}