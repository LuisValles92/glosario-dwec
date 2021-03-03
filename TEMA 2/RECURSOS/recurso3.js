function Estudiante(nombre) {
    this.nombre = nombre;
    this.modulos_primero = {
        0: {
            nombre: "Lenguaje de marcas",
            nota: 0,
            horas: 4
        },
        1: {
            nombre: "Sistemas informáticos",
            nota: 0,
            horas: 6
        },
        2: {
            nombre: "Bases de datos",
            nota: 0,
            horas: 6
        },
        3: {
            nombre: "Programación",
            nota: 0,
            horas: 8
        },
        4: {
            nombre: "Entornos de desarrollo",
            nota: 0,
            horas: 3
        },
        5: {
            nombre: "Formación y Orientación Laboral",
            nota: 0,
            horas: 3
        }
    };
    this.modulos_segundo = {
        0: {
            nombre: "Desarrollo web en entorno cliente",
            nota: 0,
            horas: 8
        },
        1: {
            nombre: "Desarrollo web en entorno servidor",
            nota: 0,
            horas: 9
        },
        2: {
            nombre: "Despliegue de aplicaciones web",
            nota: 0,
            horas: 4
        },
        3: {
            nombre: "Diseño de interfaces web",
            nota: 0,
            horas: 6
        },
        4: {
            nombre: "Empresa e iniciativa emprendedora",
            nota: 0,
            horas: 3
        }
    };
    this.año_inicio = 2019;
    this.años_cursados = 1;

    var flag_primero = false;
    var flag_pendientes_primero = false;
    var flag_segundo = false;
    this.examinar = function() {

        this.consultar = function() {

            //FUNCIONES DE RECORRIDO POR MÓDULOS
            this.recorrer_modulo_primero = function() {
                for (x in this.modulos_primero) {
                    console.log(this.modulos_primero[x]);
                }
            }

            this.recorrer_modulo_segundo = function() {
                for (x in this.modulos_segundo) {
                    console.log(this.modulos_segundo[x]);
                }
            }

            //INICIO DE CONSULTAR()
            console.log("***********\n");
            console.log("NOMBRE: " + this.nombre + "\nAÑOS: " + this.año_inicio + " - " + (this.año_inicio + this.años_cursados));
            console.log("\nMÓDULOS DE PRIMERO:\n");
            this.recorrer_modulo_primero();
            console.log("\nMÓDULOS DE SEGUNDO:\n");
            this.recorrer_modulo_segundo();
            console.log("\n***********");
        };

        if (!flag_primero) {
            var horas_totales = 0;
            for (x in this.modulos_primero) {
                if (this.modulos_primero[x].nota < 5) {
                    this.modulos_primero[x].nota = Math.floor(Math.random() * (11 - 1) + 1); //1 de 3
                    if (this.modulos_primero[x].nota < 5) {
                        this.modulos_primero[x].nota = Math.floor(Math.random() * (11 - 1) + 1); //2 de 3
                        if (this.modulos_primero[x].nota < 5) {
                            this.modulos_primero[x].nota = Math.floor(Math.random() * (11 - 1) + 1); //3 de 3
                            if (this.modulos_primero[x].nota < 5) {
                                var horas_aux = this.modulos_primero[x].horas;
                                horas_totales += horas_aux;
                                if (horas_totales > 10) {
                                    flag_primero = false;

                                    this.consultar();

                                    ++this.años_cursados;
                                    this.examinar();
                                    return;
                                } else {
                                    flag_primero = true;
                                    flag_pendientes_primero = true;
                                }
                            } else {
                                flag_primero = true;
                            }
                        } else {
                            flag_primero = true;
                        }
                    } else {
                        flag_primero = true;
                    }
                } else {
                    flag_primero = true;
                }
            }
        }

        this.consultar();

        ++this.años_cursados; //Problemilla 1 de 2

        if (flag_pendientes_primero) {
            for (x in this.modulos_primero) {
                if (this.modulos_primero[x].nota < 5) {
                    this.modulos_primero[x].nota = Math.floor(Math.random() * (11 - 1) + 1); //1 de 2
                    if (this.modulos_primero[x].nota < 5) {
                        this.modulos_primero[x].nota = Math.floor(Math.random() * (11 - 1) + 1); //2 de 2
                        if (this.modulos_primero[x].nota < 5) {
                            flag_pendientes_primero = true;
                            this.examinar(); //Problemilla 2 de 2
                            return;
                        } else {
                            flag_pendientes_primero = false;
                        }
                    } else {
                        flag_pendientes_primero = false;
                    }
                } else {
                    flag_pendientes_primero = false;
                }
            }
        }

        if (!flag_segundo) {
            for (x in this.modulos_segundo) {
                if (this.modulos_segundo[x].nota < 5) {
                    this.modulos_segundo[x].nota = Math.floor(Math.random() * (11 - 1) + 1); //1 de 2
                    if (this.modulos_segundo[x].nota < 5) {
                        this.modulos_segundo[x].nota = Math.floor(Math.random() * (11 - 1) + 1); //2 de 2
                        if (this.modulos_segundo[x].nota < 5) {
                            flag_segundo = false;
                            this.examinar();
                            return;
                        } else {
                            flag_segundo = true;
                        }
                    } else {
                        flag_segundo = true;
                    }
                } else {
                    flag_segundo = true;
                }
            }
        }

        console.log("=====>GRADO SUPERIOR COMPLETADO<=====")
        this.consultar();

    };

}
/*
var estudiante_0 = new Estudiante("Mercedes");
estudiante_0.examinar();
*/

var estudiante_1 = new Estudiante("Luis");
var estudiante_2 = new Estudiante("Carmen");
var estudiante_3 = new Estudiante("Antonio");
var array_estudiantes = new Array();
array_estudiantes.push(estudiante_1);
array_estudiantes.push(estudiante_2);
array_estudiantes.push(estudiante_3);
for (let i = 0; i < array_estudiantes.length; i++) {
    array_estudiantes[i].examinar();
}