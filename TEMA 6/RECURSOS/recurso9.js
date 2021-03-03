var cadena_json = '{"campos":[\
	{"id":"nombre","name":"nombre","type":"text","placeholder":"Escribe el nombre"},\
	{"id":"clave","name":"clave","type":"password"},\
	{"id":"mayorEdad","name":"mayorEdad","type":"checkbox","checked":"checked"},\
	{"id":"modulo","name":"modulo","type":"radio","opciones":[\
	{"value":"servidor","texto":"Prog.Servidor"},\
	{"value":"cliente","texto":"Prog.Cliente"},\
	{"value":"diseño","texto":"Diseño"}]},\
	{"id":"descripcion","name":"descripcion","type":"textarea","placeholder":"Escribe la descripción","rows":"5","cols":"50"},\
	{"id":"nacionalidades","name":"nacionalidades","type":"select","opciones":[\
	{"value":"es","texto":"Española"},\
	{"value":"fr","texto":"Francesa"},\
	{"value":"de","texto":"Alemana"},\
	{"value":"pt","texto":"Portuguesa"},\
	{"value":"uk","texto":"Británica"}]}\
	]}';
var objeto = JSON.parse(cadena_json);
objeto.campos.forEach(x => { console.log(x); });
/*
var array = objeto.campos;
for (let i = 0; i < array.length; i++) {
    console.log(array[i]);
}
*/
//Object.keys(objeto) Devuelve un array de las claves de ese objeto como string
//Para acceder al valor de esa clave utilizar el formato corchete objeto['clave']
JSON.parse(cadena_json).campos.forEach(x => {
    Object.keys(x).forEach(y => {
        console.log(y + " -> " + typeof y + " : " + x[y] + " -> " + typeof x[y]);
        //Si es un object o array, en este caso
        //z es un objeto de ese array de objetos
        if (typeof x[y] === "object") {
            console.log("ENCONTRADO");
            x[y].forEach(z => { Object.keys(z).forEach(i => { console.log(i + " -> " + typeof i + " : " + z[i] + " -> " + typeof z[i]); }); });
        }
    });
});