/* 2. Crear una clase Escuela con un atributo estático numEstudiantes que se
incremente cada vez que se cree un nuevo objeto Estudiante */

class Escuela{
    static numEstudiante = 0;
    constructor(){
      Escuela.numEstudiante++
    }
    static consultarRegistro(){
       return console.log(`el numero de estudiantes registrados es de ${Escuela.numEstudiante}`);
        
    }
}

export default Escuela;

