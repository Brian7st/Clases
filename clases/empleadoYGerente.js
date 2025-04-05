/* Crear una clase Empleado y una subclase Gerente que sobrescriba un
método trabajar() */

class Empleado1 {
    constructor(nombre,salario){
        this.nombre = nombre;
        this.salario = salario;
    }
    trabajar(){
        console.log(`El empleado ${this.nombre} esta trabajando`);
        
    }
}

class Gerente extends Empleado1{
    constructor(nombre,salario,departamento){
        super(nombre,salario);
        this.departamento = departamento
    }
    trabajar(){
        console.log(`El gerente ${this.nombre} esta supervisando el departamento ${this.departamento}`);
    }
}
export{Empleado1,Gerente}

const miEmpleado = new Empleado1("jhovanny",2000)
miEmpleado.trabajar()
const miGerente = new Gerente("jhojan", 3000,"cultivo")
miGerente.trabajar()