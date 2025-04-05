/* Crear una clase base InstrumentoMusical con un método tocar() que debe
ser implementado por las clases hijas. */

class InstrumentoMusical{
    constructor(nombre){
        this.nombre = nombre
    }
    tocar(){
        console.log("el instrumento hace un sonido");
    }
}

class Guitarra extends InstrumentoMusical{
    constructor(nombre){
        super(nombre)
    }
    tocar(){
        console.log(`la ${this.nombre} esta sonando muy bien`);
    }
}
class Flauta extends InstrumentoMusical{
    constructor(nombre){
        super(nombre)
    }
    tocar(){
        console.log(`la ${this.nombre} suena un poco desafinada`);
    }
}

class Tambor extends InstrumentoMusical{
    constructor(nombre){
        super(nombre)
    }
    tocar(){
        console.log(`el ${this.nombre} hace bom bom `);
    }
}



const miGuitarra = new Guitarra("guitarra")
miGuitarra.tocar()