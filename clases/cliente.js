/* . Crear una clase Cliente con un atributo privado saldo y un método privado
calcularDescuento() que se utilice dentro de un método público
aplicarDescuento() */

class Cliente {
    #saldo;
    constructor(nombre,saldo){
        this.nombre = nombre;
        this.#saldo = saldo;
    }

    #calcularDescuento(){
        console.log("Al cliente se le va hacer un descuento");  
    }

    aplicarDescuento(){
        this.#calcularDescuento()
        console.log("se aplico el descuento exitosamente");
    }
    getSaldo(){
        return this.#saldo
    }
}

