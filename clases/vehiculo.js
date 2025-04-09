/* Crear una clase Vehiculo con un atributo privado modelo, un atributo público
marca, y un método privado encenderMotor() que sea usado en el método
público arrancar(). */

class  Vehiculo2 {
    #modelo
    constructor(modelo,marca){
        this.#modelo = modelo;
        this.marca = marca
    }
    #encenderMotor(){
        console.log("motor encendido");
    }
    arracar(){
        this.#encenderMotor()
        console.log("el carro puede arrancar")
    }

}

export default Vehiculo2;