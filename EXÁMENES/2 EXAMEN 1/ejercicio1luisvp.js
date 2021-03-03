function finanzasPersonales(titular, saldo, sueldo, deuda) {
    this.titular = titular;
    this.saldo = saldo;
    this.sueldo = sueldo;
    this.deuda = deuda;

    this.vector_deuda = [this.deuda];
    this.vector_saldo = [this.saldo];
    this.vector_gasto_mensual = [];
    this.vector__deuda = [];

    this.cobrar_pagar = function() {
        var gasto_mensual = Math.floor(Math.random() * (900 - 700) + 700);
        var _deuda = Math.floor(Math.random() * (400 - 100) + 100);
        this.saldo = this.saldo + this.sueldo - gasto_mensual - _deuda;
        this.deuda = this.deuda - _deuda;
        if (this.deuda < 0) {
            this.deuda = Math.abs(this.deuda);
            this.saldo = this.saldo + this.deuda;
            this.deuda = 0;
        }
        this.vector_gasto_mensual.push(gasto_mensual);
        this.vector__deuda.push(_deuda);
        this.vector_saldo.push(this.saldo);
        this.vector_deuda.push(this.deuda);
    }
}

var vector = [];
vector.push(new finanzasPersonales("Luis", 90000, 9000, 900));
// vector.push(new finanzasPersonales("Antonio", 80000, 8000, 800));
// vector.push(new finanzasPersonales("Carmen", 70000, 7000, 700));
// vector.push(new finanzasPersonales("Raquel", 60000, 6000, 600));
// vector.push(new finanzasPersonales("Jesús", 50000, 5000, 500));

var fecha = new Date();
for (var i = 0; i < vector.length; i++) {
    var objeto = vector[i];
    while (objeto.deuda != 0) {
        if (fecha.getDate() == 31) { //27
            objeto.cobrar_pagar();
            if (objeto.deuda != 0) {
                fecha.setDate(fecha.getDate() + 1);
            }
        } else {
            fecha.setDate(fecha.getDate() + 1);
        }
    }
    console.log("\n\nTITULAR -----> " + objeto.titular);
    console.log("\n\nVECTOR DEUDA:");
    console.table(objeto.vector_deuda);
    console.log("\n\nVECTOR _DEUDA (NÚMERO ALEATORIO ENTRE 100 Y 400):");
    console.table(objeto.vector__deuda);
    console.log("\n\nVECTOR SALDO:");
    console.table(objeto.vector_saldo);
    console.log("\n\nVECTOR GASTO MENSUAL (NÚMERO ALEATORIO ENTRE 700 Y 900):");
    console.table(objeto.vector_gasto_mensual);
    console.log("\n\n*****Deuda saldada en " + (objeto.vector_deuda.length - 1) + " meses");
}