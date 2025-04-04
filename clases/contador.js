class Contador {
    static estatico = 0;

    static incrementar() { 
        Contador.estatico++;
    }
    static obtenerCuenta() {
        return Contador.estatico; 
    }
}

export default Contador;