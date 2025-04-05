/* Crear una clase base Empleado con un atributo estático totalEmpleados que
se incremente cada vez que se cree un Empleado o un Gerente. */

class Empleado{
    static totalEmpleados = 0;
    constructor(nombre){
        this.nombre = nombre
        Empleado.totalEmpleados++;
    }

}

class Gerente extends Empleado {
    constructor(nombre){
        super(nombre)
    }
}

const miEmpleado = new Empleado("brian")
const miEmpleado1 = new Empleado("stiven")
const miEmpleado2= new Empleado("acuña")
const miEmpleado3= new Empleado("joham")
const miEmpleado4 = new Empleado("mateo")

console.log(Empleado.totalEmpleados);
