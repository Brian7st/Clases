/* Crear una clase Empleado con atributos nombre y salario. Que implemente
un método trabajar(). Implemente encapsulación. */


class Empleado {
    #nombre
    #salario
    constructor(nombre,salario){
        this.#nombre = nombre;
        this.#salario = salario;
    }
    get nombre() {
        return this.#nombre;
    }
    set nombre(nuevoNombre){
        if(typeof nuevoNombre === "string"){
            this.#nombre = nuevoNombre;
        }else{
            console.log("el formato no es el correcto");
        }
    }
    get salario(){
        return this.#salario
    }
    set salario(nuevoSalario){
        if(typeof nuevoSalario === "number" && nuevoSalario > 0){
            this.#salario = nuevoSalario;
        }else{
            console.log("el numero debe de ser positivo");
            
        }
    }
    trabajar(){
        console.log("el empleado esta trabajanjdo");
        
    }
}
export default Empleado;


