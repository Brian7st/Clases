/* Crear una clase Universidad con un atributo estático numEstudiantes y un
método estático registrarEstudiante() */
class Registro {
    static numEstudiantes = 0;

    registrarEstudiante() {
        Registro.numEstudiantes++;
    }

    consulta() {
        return Registro.numEstudiantes;
    }
}

export default Registro;

