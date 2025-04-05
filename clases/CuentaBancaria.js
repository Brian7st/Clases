
class CuentaBancaria {
    #titular;
    #saldo;
  constructor(titular, saldoInicial) {
    this.#titular = titular;
    this.#saldo = saldoInicial;
  }

  depositar(cantidad) {
    if (cantidad > 0) {
      this.#saldo += cantidad;
      this.#mostrarSaldo();
    } else {
      console.log("La cantidad a depositar debe ser positiva.");
    }
  }

  retirar(cantidad) {
    if (cantidad > 0 && cantidad <= this.#saldo) {
      this.#saldo -= cantidad;
      this.#mostrarSaldo();
    } else {
      console.log("Fondos insuficientes o cantidad inválida.");
    }
  }

  #mostrarSaldo() {
    console.log(`Saldo actual de ${this.#titular}: $${this.#saldo}`);
  }

  getTitular() {
    return this.#titular;
  }
}

export default CuentaBancaria;
