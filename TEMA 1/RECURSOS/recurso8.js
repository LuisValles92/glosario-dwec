var cadena = "Hola, me llamo Luis Valles Pastor.";
cadena = cadena.replace(",", "");
cadena = cadena.replace(".", "");
var arraydepalabras = cadena.split(" ");
console.log(arraydepalabras);
var contadordeunaletra = 0;
var contadordedosletra = 0;
var contadordetresletra = 0;
var contadordecuatroletra = 0;
var contadordecincoletra = 0;
var contadordeseisletra = 0;
var contadordemasletra = 0;
for (i = 0; i < arraydepalabras.length; i++) {
    var palabra = arraydepalabras[i];
    if (palabra.length == 1 || palabra.length == 2 || palabra.length == 3 || palabra.length == 4 || palabra.length == 5 || palabra.length == 6) {
        if (palabra.length == 1) {
            contadordeunaletra++;
        }
        if (palabra.length == 2) {
            contadordedosletra++;
        }
        if (palabra.length == 3) {
            contadordetresletra++;
        }
        if (palabra.length == 4) {
            contadordecuatroletra++;
        }
        if (palabra.length == 5) {
            contadordecincoletra++;
        }
        if (palabra.length == 6) {
            contadordeseisletra++;
        }
    } else {
        contadordemasletra++;
    }
}
console.log("1 LETRA: ", contadordeunaletra, "\n", "2 LETRAS: ", contadordedosletra, "\n", "3 LETRAS: ", contadordetresletra, "\n", "4 LETRAS: ", contadordecuatroletra, "\n", "5 LETRAS: ", contadordecincoletra, "\n", "6 LETRAS: ", contadordeseisletra, "\n")