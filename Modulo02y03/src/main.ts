import "./style.css";

/*Entrega Modulo02
     Cena de cumpleaños entre amigos
*/

let numAmigos = 6;

let cenaTotal = 120;

let bebibas = 18;

let cenaSinBebidas = cenaTotal - bebibas;

let precioPorPersona = cenaSinBebidas/numAmigos;

console.log(`Cada amigo tiene que pagar ${precioPorPersona}€ `); 

/* Entrega Modulo03
*/
const genero1 = "🎵 Pop Rock";
const genero2 = "🎸 Rock";
const genero3 = "🤘 Hard Rock";
const genero4 = "🎼 Clásica";

interface GrupoMusical{
    nombre: string;
    año: number;
    activo: boolean;
    genero: string;
}

const grupo1: GrupoMusical = {
    nombre: "The Beatles",
    año: 1960,
    activo: true,
    genero: genero1,
}

const grupo2: GrupoMusical = {
    nombre: "Queen",
    año: 1970,
    activo: true,
    genero: genero2,
}

const grupo3: GrupoMusical = {
    nombre: "AC DC",
    año: 1973,
    activo: true,
    genero: genero3,
}

const grupo4: GrupoMusical = {
    nombre: "Ludwig van Beethoven",
    año: 1770,
    activo: false,
    genero: genero4,
}
const grupo5: GrupoMusical = {
    nombre: "The Rolling Stones",
    año: 1962,
    activo: true,
    genero: genero2,
}

console.log(`%cEl nombre del grupo1 es ${grupo1.nombre}, se fundó en el año ${grupo1.año}, es del género musical ${grupo1.genero} y que estén en activo es ${grupo1.activo}`, "font-weight: bold; font-size: 16px; background-color: green; color: white;");
console.log(`%cEl nombre del grupo1 es ${grupo2.nombre}, se fundó en el año ${grupo2.año}, es del género musical ${grupo2.genero} y que estén en activo es ${grupo2.activo}`, "font-weight: bold; font-size: 16px; background-color: green; color: white;");
console.log(`%cEl nombre del grupo1 es ${grupo3.nombre}, se fundó en el año ${grupo3.año}, es del género musical ${grupo3.genero} y que estén en activo es ${grupo3.activo}`, "font-weight: bold; font-size: 16px; background-color: green; color: white;");
console.log(`%cEl nombre del grupo1 es ${grupo4.nombre}, se fundó en el año ${grupo4.año}, es del género musical ${grupo4.genero} y que estén en activo es ${grupo4.activo}`, "font-weight: bold; font-size: 16px; background-color: green; color: white;");
console.log(`%cEl nombre del grupo1 es ${grupo5.nombre}, se fundó en el año ${grupo5.año}, es del género musical ${grupo5.genero} y que estén en activo es ${grupo5.activo}`, "font-weight: bold; font-size: 16px; background-color: green; color: white;");
