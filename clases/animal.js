class Animal {
    constructor(animal){
        this.animal = animal;
    }

    hacersonido(){
        console.log(`sonido de animal`);
        
    }
}

class Perro extends Animal {
    constructor(nombre,raza){
        super(nombre);
        this.raza = raza;
    }

    hacersonido(){
        console.log("Guau Guau");
    }
    

    ladrando(){
        console.log("El perro esta ladrando");
        
    }
}

class Gato extends Animal {
    constructor(nombre,raza){
        super(nombre);
        this.raza = raza;
    }

    hacersonido(){
        console.log("Miau Miau");
    }
    

    ronronear(){
        console.log("El gato está ronroneando");
        
    }
}

export{Animal,Perro,Gato}