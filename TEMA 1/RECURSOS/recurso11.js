var fecha_nacimiento = new Date(1992, 10, 11); //11 de Noviembre de 1992
var fecha_actual = new Date();
var anio_actual = fecha_actual.getFullYear();
console.log("Fecha de nacimiento: " + fecha_nacimiento);
console.log("Fecha actual: " + fecha_actual);
console.log("Año actual: " + anio_actual);
for (i = anio_actual; i < anio_actual + 5; i++) {
    fecha_nacimiento.setFullYear(i);
    console.log("En el año " + i + " mi cumpleaños cae en " + devolverDia(fecha_nacimiento.getDay()) + ".");
}

function devolverDia(num) {
    if (num == 0) {
        return "domingo";
    }
    if (num == 1) {
        return "lunes";
    }
    if (num == 2) {
        return "martes";
    }
    if (num == 3) {
        return "miércoles";
    }
    if (num == 4) {
        return "jueves";
    }
    if (num == 5) {
        return "viernes";
    }
    if (num == 6) {
        return "sábado";
    }
}