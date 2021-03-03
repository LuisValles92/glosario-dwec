/*
EJERCICIOS IMPORTANTES: 5, 6, 7
jQUERY: 11, 13, 15
*/

function realizarPeticionGetSinParametros(url) {
    var peticion;

    if (window.XMLHttpRequest) {
        peticion = new XMLHttpRequest();
    } else if (window.ActiveXObject) {
        peticion = new ActiveXObject("Microsoft.XMLHTTP");
    }

    peticion.open('GET', url, true);
    peticion.send(null);

    peticion.onreadystatechange = function(evento) {
        if ((peticion.readyState == 4) && ((peticion.status == 200))) {
            // var datos=JSON.parse(peticion.responseText);
            // procesarDatos(datos);
            console.log(peticion.responseText);
        }
    };
}

function realizarPeticionGetConParametros(url) {
    var peticion;

    if (window.XMLHttpRequest) {
        peticion = new XMLHttpRequest();
    } else if (window.ActiveXObject) {
        peticion = new ActiveXObject("Microsoft.XMLHTTP");
    }

    peticion.open('GET', url + "?marca=audi&modelo=A4", true);
    peticion.send(null);

    peticion.onreadystatechange = function(evento) {
        if ((peticion.readyState == 4) && ((peticion.status == 200))) {
            // var datos=JSON.parse(peticion.responseText);
            // procesarDatos(datos);
            console.log(peticion.responseText);
        }
    };
}

function realizarPeticionPostConParametros(url) {
    var peticion;

    if (window.XMLHttpRequest) {
        peticion = new XMLHttpRequest();
    } else if (window.ActiveXObject) {
        peticion = new ActiveXObject("Microsoft.XMLHTTP");
    }

    peticion2.open('POST', url, true);
    peticion2.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
    peticion2.send('marca=audi&modelo=A4');

    peticion.onreadystatechange = function(evento) {
        if ((peticion.readyState == 4) && ((peticion.status == 200))) {
            // var datos=JSON.parse(peticion.responseText);
            // procesarDatos(datos);
            console.log(peticion.responseText);
        }
    };
}