let Coche = {
    marca: "Fiat",
    modelo: "esmeralda",
    matricula: "N6384BG",
};
let Casa = {
    codPostal: 31003,
    calle: "Virgen de la Cabeza",
    portal: 13,
    piso: 3,
};
let FullStackDeveloper = {
    lenguajes: ["inglés","español"],
    proyectos: ["Middle-Earth","otros"],
};
let Perro = {
    nombre: "Max", 
    raza: "Husky", 
    color: "negro y blanco", 
    edad: 2, 
    ladrar: function () {console.log("Guau!!")},
    popo: function () {
        return Math.random() * 3;
    },
}
var marcaPortatil = Portatil.marca;
var marcaPortatil2 = Portatil["marca"];
var grupos = Concierto.grupos;
var RGB = [];
RGB.push(Led.rojo);
RGB.push(Led.verde);
RGB.push(Led.azul);
Portatil.modelo = "P345";
Concierto.cartelera.push("Guns N' Roses");
Concierto.fecha = new Date();
let impresion = {
    nombreArchivo: undefined,
    copias: undefined,
    numPaginas: undefined,
};
Impresora.imprimiendo = impresion;
let Noticia = {
    titular: undefined,
    cuerpo: undefined,
};
let Persona = {
    nombre: undefined,
    apellidos: undefined,
    edad: undefined,
};
let Avion = {
    numPasajeros: undefined,
    despegar: function () { console.log("despegando")},
    volar: function () { console.log("llegando al destino")},
    aterrizar: function () { console.log("aterrizando")},
};
let Paquete = {
    contenido: [undefined, undefined, undefined],
};
let Pais = {
    numHabitantes: undefined,
    continente: undefined,
    gentilicio: undefined,
};
var codError = O_Error.codigo;
var integrantes = Grupo.integrantes;
var nivelesTinta = Impresora.tinta;
var pixeles = Pantalla.pixeles;
var especificaciones = Movil["especificaciones"];
Grupo.numIntegrantes = 5;
Pantalla.dimensiones = "1920x1080";
Led.encendido = !Led.encendido;
Movil.temperatura = "20º";
    