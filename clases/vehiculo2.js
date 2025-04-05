/* Crear una clase base Vehiculo con un método mover(), y subclases Coche y
Bicicleta que implementen este método de forma diferente. */

class Vehiculo2 {
    constructor(modelo){
        this.modelo = modelo
    }
    mover1(){
        console.log("el vehiculo este en movimiento");
    }
}

class Coche1 extends Vehiculo2{
    constructor(modelo,color){
        super(modelo);
        this.color = color;
    }
    mover1(){
        console.log(`el coche de color ${this.color}este en movimiento`);
    }
}

class Bicicleta1 extends Vehiculo2{
    constructor(modelo,color){
        super(modelo);
        this.color = color
    }
    mover1(){
        console.log(`la bicicleta de color ${this.color}este en movimiento por la montaña`);
    }
}


