var aula = {}; //Es un objeto vacío
console.log(aula);
console.log(typeof(aula));
Object.defineProperty(aula, "numeroPupitres", { value: 16, enumerable: true });
aula.numeroAlumnos = 12;
Object.defineProperties(aula, {
    superficie: { value: 60, enumerable: true },
    nombre: { value: "informatica2", enumerable: false }
});
console.log(aula);