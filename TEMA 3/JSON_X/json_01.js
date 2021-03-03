//json_01.js - Método parse: convertir JSON en objeto

var text = '{"name":"John Johnson","street":"Oslo West 16","phone":"555 1234567"}';
var objeto = JSON.parse(text);

console.log("SE IMPRIME EL OBJETO ENTERO");
console.log(objeto);
console.table(objeto);

console.log("\n\nSE IMPRIME PROPIEDAD POR PROPIEDAD 1:");
for (let propiedad in objeto) {
    console.log(propiedad + "--> " + objeto[propiedad]);
}

console.log("\n\nSE IMPRIME PROPIEDAD POR PROPIEDAD 2:");
console.log(objeto.name);
console.log(objeto.street);
console.log(objeto.phone);