/* Crear una clase Producto con un atributo privado precio y métodos públicos
setPrecio() y getPrecio() para acceder y modificar el precio */

class Producto{
    #precio;
    constructor(precio){
        this.#precio = precio
    }

    get precio(){
       return this.#precio;
    }

    set precio (nuevoPrecio){
        if(nuevoPrecio > 0 && typeof nuevoPrecio === "number"){
            this.#precio = nuevoPrecio;
            console.log("el precio ha sido modificado")
        }else{
            console.log("el valor es invalido");
        }
    }

}

const nuevoProducto = new Producto (200)
console.log(nuevoProducto.precio);
nuevoProducto.precio = 100;
console.log(nuevoProducto.precio); 

nuevoProducto.precio = -15;
console.log(nuevoProducto.precio); 
