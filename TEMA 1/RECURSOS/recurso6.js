var cadena = "hola me llamo luis valles pastor";
var array_split = cadena.split(" ");
var cadenamod="";
console.log(array_split);
for (i = 0; i < array_split.length; i++) {
    var elemento = array_split[i];
    var primeraletra = elemento.charAt(0);
    elemento = primeraletra.toUpperCase() + elemento.substring(1, elemento.length);
    console.log(elemento);
    cadenamod=cadenamod+elemento+" ";
}
console.log(cadenamod);