// persona:

import Persona from './clases/persona.js';

const persona = new Persona ("paula");
persona.caminar();

//contador :
import Contador from './clases/contador.js';

console.log("Valor inicial de la cuenta:", Contador.obtenerCuenta());

Contador.incrementar();
console.log("Valor de la cuenta después del primer incremento:", Contador.obtenerCuenta());

Contador.incrementar();
Contador.incrementar();
console.log("Valor de la cuenta después de tres incrementos:", Contador.obtenerCuenta());

//cuenta bancaria:

import CuentaBancaria from './clases/CuentaBancaria.js';

const miCuenta = new CuentaBancaria("Carlos López", 500);
miCuenta.depositar(100);
miCuenta.retirar(200);
console.log("Titular de la cuenta:", miCuenta.getTitular());
// animal y sub clases:

import { Animal,Perro,Gato } from './clases/animal.js';

const perro = new Perro("MOROCHO","Pincher");
const gato = new Gato("michu","blanco")

perro.hacersonido()
gato.hacersonido()

//bicicleta:
import { Vehiculo,Carro,Bicicleta } from './clases/Carro.js';

const miCarro = new Carro ("2 Toneladas",200,"BMW Group")
miCarro.mover()

const miBicicleta = new Bicicleta ("100 kilos",60,"Scott","rojo")
miBicicleta.mover()

//Registro de estudiantes;

import Registro from './clases/registroEstudiantes.js';
const registro1 = new Registro();
registro1.registrarEstudiante();
console.log(`Número de estudiantes después del primer registro: ${registro1.consulta()}`);

const registro2 = new Registro();
registro2.registrarEstudiante();
console.log(`Número de estudiantes después del segundo registro: ${registro2.consulta()}`);

const registro3 = new Registro();
registro3.registrarEstudiante();
console.log(`Número de estudiantes después del tercer registro: ${registro3.consulta()}`);

//Coche metodo privado
import Coche from './clases/Carro2.js';

const miCoche= new Coche()
miCoche.conducir()

// empleado
import Empleado from './clases/empleado.js';

const empleado1 = new Empleado ("brian",2000)
empleado1.trabajar()
console.log(`mi empleado se llama ${empleado1.nombre} y su salario es de ${empleado1.salario}`)
empleado1.nombre = "stiven"
console.log(`mi empleado se llama ${empleado1.nombre} y su salario es de ${empleado1.salario}`)

//empleado y gerente 
import { Empleado1,Gerente } from './clases/empleadoYGerente.js';

const miEmpleado = new Empleado1("jhovanny",2000)
miEmpleado.trabajar()
const miGerente = new Gerente("jhojan", 3000,"cultivo")
miGerente.trabajar()

//vehiculo 
import Vehiculo2 from './clases/vehiculo.js';

const miVehiculo = new Vehiculo2 (2009,"gp")
console.log(miVehiculo)
miVehiculo._encenderMotor()
miVehiculo.arracar()

//registro de nuevo estudiante 
import Escuela from './clases/nuevoEstudiante.js';

const nuevoEstudiante = new Escuela()
nuevoEstudiante.registroNuevoEstudiante()
nuevoEstudiante.registroNuevoEstudiante()
nuevoEstudiante.registroNuevoEstudiante()
nuevoEstudiante.consultarRegistro()