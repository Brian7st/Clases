/* Crear una clase Empleado con atributos nombre y salario. Que implemente
un método trabajar(). Implemente encapsulación. */


class Empleado {
    constructor(nombre,salario){
        this._nombre = nombre;
        this._salario = salario;
    }
    get nombre() {
        return this._nombre;
    }
    set nombre(nuevoNombre){
        if(typeof nuevoNombre === "string"){
            this._nombre = nuevoNombre;
        }else{
            console.log("el formato no es el correcto");
        }
    }
    get salario(){
        return this._salario
    }
    set salario(nuevoSalario){
        if(typeof nuevoSalario === "number" && nuevoSalario > 0){
            this._salario = nuevoSalario;
        }else{
            console.log("el numero debe de ser positivo");
            
        }
    }
    trabajar(){
        console.log("el empleado esta trabajanjdo");
        
    }
}
export default Empleado;


