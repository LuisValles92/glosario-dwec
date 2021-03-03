var coche = new Object();
coche.marca = "Audi";
coche.modelo = "A4";
coche.color = "Azul";
//FOR...IN
for (let propiedad in coche) {
    console.log(coche[propiedad]);
}