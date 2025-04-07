/* 1. Clase Vehiculo
Atributos: marca, modelo, año, precio.

Métodos:

mostrarInfo(): Muestra los detalles del vehículo.

aplicarDescuento(porcentaje): Aplica un descuento al precio del vehículo.

2. Clase Auto (hereda de Vehiculo)
Atributo adicional: tipo (Sedán, SUV, Deportivo).

Método adicional: mostrarTipo(): Indica el tipo de auto.

3. Clase Moto (hereda de Vehiculo)
Atributo adicional: cilindrada (en cc).

Método adicional: mostrarCilindrada(): Muestra la cilindrada de la moto.

4. Clase Concesionario
Atributo: Lista de vehículos en venta.

Métodos:

agregarVehiculo(vehiculo): Agrega un vehículo a la lista.

mostrarInventario(): Muestra todos los vehículos disponibles.

buscarPorMarca(marca): Muestra todos los vehículos de una marca específica. */


class Vehiculo{
    constructor(marca,modelo,año,precio){
        this.marca = marca;
        this.modelo = modelo;
        this.año = año;
        this.precio= precio;
        this.disponible = true
    }
    mostrarInfo(){
        console.log(`El vehiculo es de marca: ${this.marca} el modelo: ${this.modelo} el año: ${this.año} y el precio total es de ${this.precio}`);
    }
    aplicarDescuento(descuento){
        this.precio -= this.precio *(descuento/100)
        console.log(`el descuento aplicado es: ${descuento}% el nuevo precio es de ${this.precio}`)
    }
}

class Auto extends Vehiculo{
    constructor(marca,modelo,año,precio,tipo){
        super(marca,modelo,año,precio)
        this.tipo =tipo;
    }
    tipoAuto(){
        console.log(`el tipo de auto es ${this.tipo}`);
        
    }
}

class Moto extends Vehiculo{
    constructor(marca,modelo,año,precio,cilindrada){
        super(marca,modelo,año,precio)
        this.cilindrada = cilindrada
    }
    cilindraje(){
        console.log(`el cilindraje de la moto es de ${this.cilindrada}`);
        
    }
}

class Concesionario {
    constructor(){
        this.listaVehiculo = [];
    }
    aggVehiculo(vehiculo){
        this.listaVehiculo.push(vehiculo);
        console.log(`se agg el vehiculo ${Vehiculo.marca}`);
    }
    mostrarInventario(){
        console.log("inventario de carros");
        if(this.listaVehiculo.length === 0){
            console.log("No hay vehiculo registrados");
        }else{
            this.listaVehiculo.forEach((vehiculo,i)=>{
            console.log(`${i + 1}. ${vehiculo.marca} ${vehiculo.modelo} - Año: ${vehiculo.año} - Precio: $${vehiculo.precio}`);
            })
        }
    }
    buscarPorMarca(marca){
        console.log( `buscar veiculo por la marca ${marca}`);
        const resultado = this.listaVehiculo.filter(vehiculo => vehiculo.marca.toLowerCase() === marca.toLowerCase())
        if(resultado.length === 0){
            console.log("Resultado no encontrado");
        }else{
            resultado.forEach((vehiculo,i)=>{
                console.log(`${i + 1}.  ${vehiculo.marca} ${vehiculo.modelo} año:${vehiculo.año} -precio ${vehiculo.precio}`);
                
            })
        }
    }
}