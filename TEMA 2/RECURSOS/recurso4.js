var myCar = new Object();
myCar.make = 'Ford';
myCar.model = 'Mustang';
myCar.year = 1969;
console.log(myCar);
console.log(Object.assign(myCar, { doors: 5 }));
Object.assign(myCar, { model: 'Fiesta' }); //Se sobrescribe dicha propiedad
console.log(myCar);

function* generador(i) {
    yield ++i;
    yield i++;
}
var gen = (generador(11));
console.log(gen.next().value);
console.log(gen.next().value);
//
console.log(gen.next().value);
console.log(gen.next().value);