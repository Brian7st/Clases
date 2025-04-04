
class CuentaBancaria {
  constructor(titular, saldoInicial) {
    this._titular = titular;
    this._saldo = saldoInicial;
  }

  depositar(cantidad) {
    if (cantidad > 0) {
      this._saldo += cantidad;
      this._mostrarSaldo();
    } else {
      console.log("La cantidad a depositar debe ser positiva.");
    }
  }

  retirar(cantidad) {
    if (cantidad > 0 && cantidad <= this._saldo) {
      this._saldo -= cantidad;
      this._mostrarSaldo();
    } else {
      console.log("Fondos insuficientes o cantidad inválida.");
    }
  }

  _mostrarSaldo() {
    console.log(`Saldo actual de ${this._titular}: $${this._saldo}`);
  }

  getTitular() {
    return this._titular;
  }
}

export default CuentaBancaria;
