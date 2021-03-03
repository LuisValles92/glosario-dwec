//EJERCICIO 1

var numeros = [1, 4, 12];
console.log('ELIMINA EL PRIMER ELEMENTO');
numeros.splice(0, 1);
console.log(numeros);

numeros = [1, 4, 12];
console.log('ELIMINA EL ÚLTIMO ELEMENTO');
numeros.splice(numeros.length - 1, 1);
//numeros.splice(-1,1);
console.log(numeros);

numeros = [1, 4, 12];
console.log('ELIMINA TODOS LOS ELEMENTOS');
// numeros.splice(0,numeros.length-1);
numeros.splice(0, numeros.length);
console.log(numeros);