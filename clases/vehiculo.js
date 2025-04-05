/* Crear una clase Vehiculo con un atributo privado modelo, un atributo público
marca, y un método privado encenderMotor() que sea usado en el método
público arrancar(). */

class  Vehiculo2 {
    constructor(modelo,marca){
        this._modelo = modelo;
        this.marca = marca
    }
    _encenderMotor(){
        console.log("motor encendido");
    }
    arracar(){
        this._encenderMotor()
        console.log("el carro puede arrancar")
    }

}

export default Vehiculo2;