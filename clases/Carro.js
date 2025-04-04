/* Crear una clase base Vehiculo que tenga un constructor con parámetros de
peso y velocidad máxima, e implemente un método mover() que imprima un
mensaje genérico. Luego, crear dos subclases Carro y Bicicleta */

class Vehiculo {
    constructor(peso,VelocidadMax){
        this.peso = peso;
        this.VelocidadMax = VelocidadMax
    }

    mover(){
        console.log("El vehiculo se esta moviento");
    }
}

class Carro extends Vehiculo{
    constructor(peso,VelocidadMax,marca){
        super(peso, VelocidadMax);
        this.marca = marca;
    }

    mover(){
        console.log(`la velocidad maxima del ${this.marca} es de ${this.VelocidadMax}km/h`);
    }
}

class Bicicleta extends Vehiculo{
    constructor(peso,VelocidadMax,marca,color){
        super(peso,VelocidadMax);
        this.marca = marca;
        this.color = color
    }

    mover(){
        console.log(`la velocidad maxima de la bicicleta ${this.marca} de color ${this.color} es de ${this.VelocidadMax}km/h`);
    }
}

export{Vehiculo,Carro,Bicicleta}


