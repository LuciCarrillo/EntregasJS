import{
    partida
} from "./modelo";

import {
    dameCarta,
    dameNumAleatorio,
    sumaPuntuacion
} from "./motor";

const imagencarta = document.getElementById("imagen");

const botonplantarse = document.getElementById("plantarse") as HTMLButtonElement;
const botondamecarta = document.getElementById("damecarta") as HTMLButtonElement;
const botonadivinafuturo = document.getElementById("adivinafuturo") as HTMLButtonElement;

export const pideCarta = (cartaAleatoria : number) => {

    if(imagencarta !== null && imagencarta !== undefined && imagencarta instanceof HTMLImageElement){
        const cartaDada = cartaAleatoria;
        imagencarta.src = `/imagenes/${cartaDada}.jpg`;
    }else{
        return console.error("ERROR"); 
    }
}

export const muestraPuntuacion = () => {
    let puntuacion = document.getElementById("puntuacion");
    if(puntuacion){
        puntuacion.innerHTML = `Puntuación actual ${partida.puntuacionActual}`;
    }else{
        console.error("muestraPuntuacion: No se ha encontrado el elemento con id puntuacion");
    }
}

let estado = document.getElementById("estado");

const gestionarGanarPerder = (puntuacionActual : number) => {
    if(estado!== null && estado !== undefined){
        if(puntuacionActual < 7.5){
            estado.innerHTML = ``;
        }else if(puntuacionActual === 7.5){
            estado.classList.remove('ocultarestado');
            estado.classList.add('mostrarestado');
            estado.innerHTML = `¡Enhorabuena, lo has clavado!`;
            botondamecarta.disabled = true;
            botonplantarse.disabled = true;
            botonadivinafuturo.disabled = true;
        } else if(puntuacionActual > 7.5){
            estado.innerHTML = `¡GAME OVER!`;
            estado.classList.remove('ocultarestado');
            estado.classList.add('mostrarestado');
            botondamecarta.disabled = true;
            botonplantarse.disabled = true;
            botonadivinafuturo.disabled = true;
        }else{
            console.error("Error");
        }
    }
}

const comprobarPuntuacion = (puntuacionTotal : number) => {
    if(estado!== null && estado !== undefined){
        estado.classList.remove('ocultarestado');
        estado.classList.add('mostrarestado');

        if(puntuacionTotal <= 4.5){
            estado.innerHTML = `¡Has sido muy conservador!`;
        }else if (puntuacionTotal === 5 || puntuacionTotal === 5.5) {
            estado.innerHTML = `Te ha entrado el canguelo eh?`;
        }else if (puntuacionTotal === 6 || puntuacionTotal === 6.5) {
            estado.innerHTML = `Casi casi...`;
        }else if (puntuacionTotal === 7) {
            estado.innerHTML = `Casi casi...`;
        }else if (puntuacionTotal === 7.5) {
            estado.innerHTML = `¡ Lo has clavado! ¡Enhorabuena!`;
        }
    }
}

export const reanudarPartida =  () => {
    let puntuacion = document.getElementById("puntuacion");

    if(puntuacion!== null && puntuacion !== undefined && estado!== null && estado !== undefined && imagencarta !== null && imagencarta !== undefined && imagencarta instanceof HTMLImageElement){
        partida.puntuacionActual = 0;
        puntuacion.innerHTML = `Puntuación actual 0`;
        imagencarta.src = `/imagenes/cartaBocaAbajo.jpg`;
        botondamecarta.disabled = false;
        botonplantarse.disabled = false;
        botonadivinafuturo.disabled = true;
        estado.classList.remove('mostrarestado');
        estado.classList.add('ocultarestado');
    }
    if(estado!== null && estado !== undefined){
        estado.innerHTML = "";
        }
}

export const handlePideCartaClick = () => {
    const cartaAleatoria = dameCarta(dameNumAleatorio());
    pideCarta(cartaAleatoria);
    const puntuacion = sumaPuntuacion(cartaAleatoria);
    muestraPuntuacion();
    gestionarGanarPerder(puntuacion);
}

export const handlePlantarseClick = () => {
    comprobarPuntuacion(partida.puntuacionActual);
    botondamecarta.disabled = true;
    botonplantarse.disabled = true;
    botonadivinafuturo.disabled = false;
}

export const handleAdivinaFuturo = () => {
    const cartaAleatoria = dameCarta(dameNumAleatorio());
    pideCarta(cartaAleatoria);
    const puntuacion = sumaPuntuacion(cartaAleatoria);
    muestraPuntuacion();
    gestionarGanarPerder(puntuacion);
}