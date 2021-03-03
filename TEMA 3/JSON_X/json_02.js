//json_02.js - Método stringify: pasar un objeto a texto JSON

var persona = {
    nombre: "luis",
    apellidos: ["perez", "garcia"],
    edad: 34
};
console.log(typeof(persona));

var texto = JSON.stringify(persona);

console.log(persona); //objeto
console.log("SE IMPRIME LA CADENA JSON");
console.log(texto); //json