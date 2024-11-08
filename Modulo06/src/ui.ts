import{
    partida
} from "./modelo";

import {
    dameCarta,
    dameNumAleatorio,
    obtenerpuntosCarta,
    sumaPuntuacion,
    actualizarPuntuacionActual

} from "./motor";

const imagencarta = document.getElementById("imagen");

const botonplantarse = document.getElementById("plantarse") as HTMLButtonElement;
const botondamecarta = document.getElementById("damecarta") as HTMLButtonElement;
const botonadivinafuturo = document.getElementById("adivinafuturo") as HTMLButtonElement;

export const pideCarta = (cartaAleatoria : number) => {
    if(imagencarta && imagencarta instanceof HTMLImageElement){
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

const mostrarMensajePartida = (mensaje: string) => {
    const elemento = document.getElementById('estado');

    if (elemento && elemento instanceof HTMLDivElement) {
        elemento.innerHTML = mensaje;
    }
}

const cambiosEstadoYBotonesAlGanar = () => {
    if(estado && estado instanceof HTMLDivElement && botondamecarta && botondamecarta instanceof HTMLButtonElement && botonplantarse && botonplantarse instanceof HTMLButtonElement && botonadivinafuturo && botonadivinafuturo instanceof HTMLButtonElement){
        estado.classList.remove('ocultarestado');
        estado.classList.add('mostrarestado');
        botondamecarta.disabled = true;
        botonplantarse.disabled = true;
        botonadivinafuturo.disabled = true;
    }
}

const cambiosEstadoYBotonesAlPerder = () => {
    if(estado && estado instanceof HTMLDivElement && botondamecarta && botondamecarta instanceof HTMLButtonElement && botonplantarse && botonplantarse instanceof HTMLButtonElement && botonadivinafuturo && botonadivinafuturo instanceof HTMLButtonElement){
        estado.classList.remove('ocultarestado');
        estado.classList.add('mostrarestado');
        botondamecarta.disabled = true;
        botonplantarse.disabled = true;
        botonadivinafuturo.disabled = true;
    }
}

const gestionarGanarPerder = (puntuacionActual : number) => {
    if(estado && estado instanceof HTMLDivElement){
        if(puntuacionActual < 7.5){
            estado.innerHTML = ``;
        }else if(puntuacionActual === 7.5){
            cambiosEstadoYBotonesAlGanar();
            mostrarMensajePartida(`¡Enhorabuena, lo has clavado!`);
            
        } else if(puntuacionActual > 7.5){
            cambiosEstadoYBotonesAlPerder();
            mostrarMensajePartida(`¡GAME OVER!`);
        }else{
            console.error("Error");
        }
    }
}

const cambioEstadoComprobarPuntuacion = () => {
    if(estado && estado instanceof HTMLDivElement){
        estado.classList.remove('ocultarestado');
        estado.classList.add('mostrarestado');
    }
}

const comprobarPuntuacion = (puntuacionTotal : number) => {
    cambioEstadoComprobarPuntuacion();
    
    if(puntuacionTotal <= 4.5){
        mostrarMensajePartida(`¡Has sido muy conservador!`);
    }else if (puntuacionTotal === 5 || puntuacionTotal === 5.5) {
        mostrarMensajePartida(`Te ha entrado el canguelo eh?`);
    }else if (puntuacionTotal === 6 || puntuacionTotal === 6.5) {
        mostrarMensajePartida(`Casi casi...`);
    }else if (puntuacionTotal === 7) {
        mostrarMensajePartida(`Casi casi...`);
    }else if (puntuacionTotal === 7.5) {
        mostrarMensajePartida(`¡ Lo has clavado! ¡Enhorabuena!`);
    }
}

const cambiosBotonesReanudarPartida = () => {
    if(botondamecarta && botondamecarta instanceof HTMLButtonElement && botonplantarse && botonplantarse instanceof HTMLButtonElement){
        botondamecarta.disabled = false;
        botonplantarse.disabled = false;
    }
}

const cambioEstadoReanudarPartida = () => {
    if(estado && estado instanceof HTMLDivElement){
        estado.classList.remove('mostrarestado');
        estado.classList.add('ocultarestado');
        estado.innerHTML = "";
    }
}

export const reanudarPartida =  () => {
    let puntuacion = document.getElementById("puntuacion");

    if(puntuacion && puntuacion instanceof HTMLDivElement && estado && estado instanceof HTMLDivElement && imagencarta && imagencarta instanceof HTMLImageElement){
        partida.puntuacionActual = 0;
        puntuacion.innerHTML = `Puntuación actual 0`;
        imagencarta.src = `/imagenes/cartaBocaAbajo.jpg`;
        cambiosBotonesReanudarPartida();
        cambioEstadoReanudarPartida();
    }
    
}

export const handlePideCartaClick = () => {
    const numeroAleatorio = dameNumAleatorio();
    const cartaAleatoria = dameCarta(numeroAleatorio);
    pideCarta(cartaAleatoria);
    const puntosCarta = obtenerpuntosCarta(cartaAleatoria);
    const puntuacion = sumaPuntuacion(puntosCarta);
    actualizarPuntuacionActual(puntuacion);
    muestraPuntuacion();
    gestionarGanarPerder(puntuacion);
}

const cambiosBotonesPlantarse = () => {
    if(botondamecarta && botondamecarta instanceof HTMLButtonElement && botonplantarse && botonplantarse instanceof HTMLButtonElement && botonadivinafuturo && botonadivinafuturo instanceof HTMLButtonElement){
        botondamecarta.disabled = true;
        botonplantarse.disabled = true;
        botonadivinafuturo.disabled = false;
    }
}

export const handlePlantarseClick = () => {
    comprobarPuntuacion(partida.puntuacionActual);
    cambiosBotonesPlantarse();
}

export const handleAdivinaFuturo = () => {
    handlePideCartaClick(); 
}