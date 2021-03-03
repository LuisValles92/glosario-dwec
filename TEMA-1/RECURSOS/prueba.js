var expresion = /la*/;
//La a esta para despistar, tiene que estar 0 o mas veces, la van juntas
// /(la)*/ con esto es distinto
console.log("*");
console.log(expresion.test("perro")); //false
console.log(expresion.test("pelrro")); //true
console.log(expresion.test("perra")); //false
console.log(expresion.test("perrla")); //true
console.log(expresion.test("perrlga")); //true
//Hay una l o cero o una a
expresion = /la?/;
console.log("?");
console.log(expresion.test("perro")); //false
console.log(expresion.test("pelrro")); //true
console.log(expresion.test("perra")); //false
console.log(expresion.test("perrla")); //true
console.log(expresion.test("perrlga")); //true
expresion = /^[0-9]{5}$/; //CP Llaves cuantificador {5,6} Es de 5 o 6 digitos
console.log("CP");
console.log(expresion.test("47009")); //true
console.log(expresion.test("4709t")); //false
console.log(expresion.test("4709")); //false
expresion = /^[0-9]{4}[^AEIOU0123456789Q]{3}$/; //Matricula 4 número y 3 letras sin vocales
console.log("MATRICULA");
console.log(expresion.test("1234VAL")); //false
console.log(expresion.test("12344BB")); //false
console.log(expresion.test("1234BBB")); //true
//MATRICULA - DE OTRA FORMA
expresion1 = /^[0-9]{4}[A-Z]{3}$/;
expresion2 = /^[0-9]{4}[^AEIOUQ]{3}$/;
console.log("MATRICULA - DE OTRA FORMA");
var cadena = "1234BBB";
console.log(expresion1.test(cadena) && expresion2.test(cadena));
//MATRICULAS DE ANTES 1 O 2 4 NUMEROS Y 1 O 2 LETRAS
var expresion3 = /^[A-Z]{1,2}\d{4}[A-Z]{1,2}$/;
//TELEFONO
var expresion4 = /^[679][0-9]{9}$/; //que empiece por 6, 7 o 9
//DNI
var expresion5 = /^\d{8}[A-Z]$/;
//CUENTA BANCARIA ES Y X NUMEROS (PROBAR)
//FECHA (PROBAR)
//CORREO ELECTRONICO (PROBAR)