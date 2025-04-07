// Clase Libro
class RecursoBiblioteca{
    constructor(titulo,autor,codigo){
        this.titulo = titulo;
        this.autor = autor;
        this.codigo = codigo
        this.disponible = true
    }
    prestar(){
        if(this.disponible){
            this.disponible=false;
            console.log(`El libro ${this.titulo} ha sido prestado`);
        }else{
            console.log(`El libro no esta disponible`);
        }
    }
    devolver(){
        if(this.disponible){
            this.disponible= true;
            console.log(`El libro ${this.titulo} ha sido devuelto`);
        }
    }
    mostrarInfo(){
        console.log(`Titulo: ${this.titulo}. Autor: ${this.autor}. Codigo ${this.codigo}`);
    }
}

class libro extends RecursoBiblioteca{
    constructor(titulo,autor,codigo,isbn){
        super(titulo,autor,codigo);
        this.isbn = isbn;
    }
    mostrarInfo(){
        console.log(`Titulo: ${this.titulo}. Autor: ${this.autor}. Codigo ${this.codigo} El isbn: ${this.isbn}`);
    }
}

class Revista extends RecursoBiblioteca{
    constructor(titulo,autor,codigo,numero){
        super(titulo,autor,codigo);
        this.numero = numero;
    }
    mostrarInfo(){
        console.log(`Titulo: ${this.titulo}. Autor: ${this.autor}. Codigo ${this.codigo} El numero: ${this.numero}`);
        
    }
}

class DVD extends RecursoBiblioteca{
    constructor(titulo,autor,codigo,duracion){
        super(titulo,autor,codigo);
        this.duracion = duracion;
    }
   
    mostrarInfo(){
            console.log(`Titulo: ${this.titulo}. Autor: ${this.autor}. Codigo ${this.codigo} La duracion: ${this.duracion}`);
     }
}

class Usuario {
    constructor(nombre,idUsuario){
        this.nombre = nombre;
        this.idUsuario = idUsuario;
        this.libroPrestados = [];
    }
    tomarPrestado(RecursoBiblioteca){
        const prestamoExitoso = RecursoBiblioteca.prestar();
            if(prestamoExitoso === ture){
                this.libroPrestados.push(RecursoBiblioteca.codigo);
                console.log(`El recurso ${RecursoBiblioteca.titulo} ha sido prestado ${this.nombre}`)
                return true;
            }else{
                console.log("el prestamo ha sido rechazado");
                return false;
            }
        }
    devolverLibro(codigoRecurso){
        const indice = this.libroPrestados.indexOf(codigoRecurso);
        if(indice != -1){
            this.libroPrestados.splice(indice,1)
            console.log(`el libro ${RecursoBiblioteca.titulo} ha sido devuelto`);
        }else{
            
        }
    }

}
