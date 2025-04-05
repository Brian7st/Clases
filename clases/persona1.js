/* Crear una clase Persona con un atributo privado edad y una subclases
Empleado que acceda al método público setEdad() de Persona para
modificar edad
 */

class Persona {
    #edad
    constructor(nombre,edad){
        this.nombre = nombre
        this.#edad = edad
    }
    getEdad (){
        return this.#edad 
    }
    setEdad(nuevaEdad){
        if(nuevaEdad > 0 && typeof nuevaEdad === "number" ){
            this.#edad = nuevaEdad
            return console.log("se modifico la edad")
        }else{
        console.log("valores invalidos");
        }
    }
}


class Empleado extends Persona {
    constructor(nombre,edad,salario){
        super(nombre,edad)
        this.salario = salario
    }

    modificarNuevaEdad(nuevaEdad){
        this.setEdad(nuevaEdad)
    }
    mostrarInformacion() {
        console.log(`Nombre: ${this.nombre}, Edad: ${this.getEdad()}, Salario: $${this.salario}`);
}
}