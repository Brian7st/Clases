// Clase Libro
class Libro {
    constructor(titulo, autor, año) {
        this.titulo = titulo;
        this.autor = autor;
        this.año = año;
        this.disponible = true; // Por defecto, el libro está disponible
    }

    prestar() {
        if (this.disponible) {
            this.disponible = false;
            console.log(`📖 El libro "${this.titulo}" ha sido prestado.`);
        } else {
            console.log(`❌ El libro "${this.titulo}" no está disponible.`);
        }
    }

    devolver() {
        this.disponible = true;
        console.log(`✅ El libro "${this.titulo}" ha sido devuelto.`);
    }

    mostrarInfo() {
        console.log(`📘 Título: ${this.titulo}, Autor: ${this.autor}, Año: ${this.año}, Disponible: ${this.disponible ? "Sí" : "No"}`);
    }
}

// Clase Usuario
class Usuario {
    constructor(nombre, id) {
        this.nombre = nombre;
        this.id = id;
        this.librosPrestados = [];
    }

    prestarLibro(libro) {
        if (libro.disponible) {
            libro.prestar();
            this.librosPrestados.push(libro);
        } else {
            console.log(`⚠️ ${this.nombre} no puede prestar el libro "${libro.titulo}" porque no está disponible.`);
        }
    }

    devolverLibro(libro) {
        const index = this.librosPrestados.indexOf(libro);
        if (index !== -1) {
            libro.devolver();
            this.librosPrestados.splice(index, 1);
        } else {
            console.log(`⚠️ ${this.nombre} no tiene el libro "${libro.titulo}".`);
        }
    }

    mostrarLibrosPrestados() {
        console.log(`📚 Libros prestados por ${this.nombre}:`);
        if (this.librosPrestados.length > 0) {
            this.librosPrestados.forEach(libro => libro.mostrarInfo());
        } else {
            console.log("No tiene libros prestados.");
        }
    }
}

// Clase Biblioteca
class Biblioteca {
    constructor() {
        this.libros = [];
    }

    agregarLibro(libro) {
        this.libros.push(libro);
        console.log(`📕 Se ha agregado el libro "${libro.titulo}" a la biblioteca.`);
    }

    mostrarLibrosDisponibles() {
        console.log("📖 Libros disponibles en la biblioteca:");
        this.libros.filter(libro => libro.disponible).forEach(libro => libro.mostrarInfo());
    }
}

// 📌 Prueba del código
const biblioteca = new Biblioteca();
const libro1 = new Libro("El Principito", "Antoine de Saint-Exupéry", 1943);
const libro2 = new Libro("Cien años de soledad", "Gabriel García Márquez", 1967);
const usuario1 = new Usuario("Juan", 1);

biblioteca.agregarLibro(libro1);
biblioteca.agregarLibro(libro2);

biblioteca.mostrarLibrosDisponibles();

usuario1.prestarLibro(libro1);
usuario1.mostrarLibrosPrestados();
biblioteca.mostrarLibrosDisponibles();

usuario1.devolverLibro(libro1);
biblioteca.mostrarLibrosDisponibles();
