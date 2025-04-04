/* Crear una clase Coche con un método privado encenderMotor() y un método
público conducir() que llame al método privado. */

class Coche {
    #encenderMotor(){
        console.log("el motor esta encendido");
    }
    conducir(){
        console.log(`preparando para conducir`);
        this.#encenderMotor
        console.log("el carro esta listo para conducirlo")
    }
}

export default Coche;

