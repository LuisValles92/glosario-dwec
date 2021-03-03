function inicioAhorcado() {
    document.getElementById("j-div").style.display = "none";
    document.getElementById("j2-div").style.display = "none";
    rellenarSelect();
}

function rellenarSelect() {
    for (let i = 65; i <= 90; i++) {
        var option = document.createElement("option");
        option.textContent = String.fromCharCode(i);
        option.value = String.fromCharCode(i);
        document.getElementById("letras-select").options.add(option);
    }
    var option = document.createElement("option");
    option.textContent = 'Ñ';
    option.value = 'Ñ';
    document.getElementById("letras-select").options.add(option);
}

function ganarAhorcado() {
    alert("¡Enhorabuena! ¡Ha ganado!");
    document.getElementById("oculta-p").style.backgroundColor = "green";
    finAhorcado();
}

function perderAhorcado() {
    alert("Oh, ha perdido ¡pruebe más suerte la próxima vez!");
    document.getElementById("oculta-p").style.backgroundColor = "red";
    finAhorcado();
    document.getElementById("intentos-p").textContent = 0;
}

function finAhorcado() {
    document.getElementById("oculta-p").style.color = "#f5f5f5";
    document.getElementById("letras-select").disabled = true;
    document.getElementById("j2-b1").disabled = true;
    document.getElementById("solucion-input").disabled = true;
    document.getElementById("j2-b2").disabled = true;
    document.getElementById("oculta-p").textContent = document.getElementById("palabra-input").value.toUpperCase();
}

inicioAhorcado();

document.getElementById("j1-b").addEventListener("click", event => {
    var valor_palabra = document.getElementById("palabra-input").value.toUpperCase();
    var expresion = /^[A-ZÑ]+$/i;
    if (valor_palabra != "" && expresion.test(valor_palabra)) {
        // No admite la Ñ
        // document.getElementById("oculta-p").textContent = valor_palabra.replace(/\w/g, "_ ");
        document.getElementById("oculta-p").textContent = "";
        for (let i = 0; i < valor_palabra.length; i++) {
            document.getElementById("oculta-p").textContent += "_ ";
        }
        document.getElementById("j1-div").style.display = "none";
        document.getElementById("j-div").style.display = "block";
        document.getElementById("j2-div").style.display = "block";
    } else {
        if (valor_palabra == "")
            alert("Error: El campo está vacío");
        else alert("Error: El campo sólo admite letras de la A-Z sin acentos");
    }
});

var contador = 5;
document.getElementById("intentos-p").textContent = contador;
var vector_letras = [];
document.getElementById("j2-b1").addEventListener("click", event => {
    var valor_palabra = document.getElementById("palabra-input").value.toUpperCase();
    var vector = valor_palabra.split("");
    var letra = document.getElementById("letras-select").value;
    var flag = false;
    if (!vector_letras.includes(letra)) {
        vector_letras.push(letra);
        --contador;
        if (vector.includes(letra)) {
            document.getElementById("oculta-p").textContent = "";
            for (let i = 0; i < valor_palabra.length; i++) {
                if (vector_letras.includes(valor_palabra.charAt(i))) {
                    document.getElementById("oculta-p").textContent += valor_palabra.charAt(i) + " ";
                } else {
                    document.getElementById("oculta-p").textContent += "_ ";
                }
            }
            var aux = document.getElementById("oculta-p").textContent.replaceAll(" ", "");
            if (aux == valor_palabra) {
                flag = true;
                ganarAhorcado();
                // Finalizo la función
                // return;
            }
        }
    } else {
        alert("Ya ha seleccionado esa letra");
    }
    if (contador == 0 && !flag) {
        // alert("Se ha quedado sin intentos");
        document.getElementById("letras-select").disabled = true;
        document.getElementById("j2-b1").disabled = true;
    }
    document.getElementById("letras-p").textContent = vector_letras.toString();
    document.getElementById("intentos-p").textContent = contador;
});

document.getElementById("j2-b2").addEventListener("click", event => {
    var solucion = document.getElementById("solucion-input").value.toUpperCase();
    if (solucion != "") {
        if (solucion == document.getElementById("palabra-input").value.toUpperCase()) {
            ganarAhorcado();
        } else {
            perderAhorcado();
        }
    } else {
        alert("El campo está vacío");
    }
});

document.getElementById("j2-b2").addEventListener("contextmenu", event => {
    alert("Desde esta opción solo posee un intento para ganar, haga click izquierdo sobre el botón 'INTRODUCIR' para confirmar");
    // Para deshabilitar el menú contextual
    document.oncontextmenu = function() {
        return false;
    };
});