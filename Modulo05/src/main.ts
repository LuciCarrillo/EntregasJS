import "./style.css";

const botonplantarse = document.getElementById("plantarse") as HTMLButtonElement;
const botonnuevapartida = document.getElementById("nuevapartida") as HTMLButtonElement;
const botondamecarta = document.getElementById("damecarta") as HTMLButtonElement;
const botonadivinafuturo = document.getElementById("adivinafuturo") as HTMLButtonElement;

const imagencarta = document.getElementById("imagen");
const cartas = [1, 2, 3, 4, 5, 6, 7, 10, 11, 12];

let estado = document.getElementById("estado");
let puntuacionActual = 0;

const dameNumAleatorio = () : number => {
    const min = 0;
    const max = 9;
    return Math.floor(Math.random() * (max - min + 1) + min);
}

const dameCarta = (numAleatorio : number) : number => {
    return cartas[numAleatorio];
}

const pideCarta = (cartaAleatoria : number) => {
    if(imagencarta !== null && imagencarta !== undefined && imagencarta instanceof HTMLImageElement){
        const cartaDada = cartaAleatoria;
        imagencarta.src = `/imagenes/${cartaDada}.jpg`;
    }else{
        return console.error("ERROR"); 
    }
}

const muestraPuntuacion = () => {
    let puntuacion = document.getElementById("puntuacion");
    if(puntuacion){
        puntuacion.innerHTML = `Puntuación actual ${puntuacionActual}`;
    }else{
        console.error("muestraPuntuacion: No se ha encontrado el elemento con id puntuacion");
    }
}

document.addEventListener("DOMContentLoaded", muestraPuntuacion);

const sumaPuntuacion = (valorCarta : number)  : number => {
    let puntuacion = document.getElementById("puntuacion");

    if (puntuacion === null) {
        console.error("Error");
    }

    if(valorCarta && valorCarta<= 7){
        puntuacionActual = puntuacionActual + valorCarta;
    } else{
        puntuacionActual = puntuacionActual + 0.5;
    }
    return puntuacionActual;
}

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

const reanudarPartida =  () => {
    let puntuacion = document.getElementById("puntuacion");

    if(puntuacion!== null && puntuacion !== undefined && estado!== null && estado !== undefined && imagencarta !== null && imagencarta !== undefined && imagencarta instanceof HTMLImageElement){
        puntuacionActual = 0;
        puntuacion.innerHTML = `Puntuación actual 0`;
        imagencarta.src = `/imagenes/cartaBocaAbajo.jpg`;
        botondamecarta.disabled = false;
        botonplantarse.disabled = false;
        estado.classList.remove('mostrarestado');
        estado.classList.add('ocultarestado');
    }
    if(estado!== null && estado !== undefined){
        estado.innerHTML = "";
        }
}

const handlePideCartaClick = () => {
    const cartaAleatoria = dameCarta(dameNumAleatorio());
    pideCarta(cartaAleatoria);
    const puntuacion = sumaPuntuacion(cartaAleatoria);
    muestraPuntuacion();
    gestionarGanarPerder(puntuacion);
}

const handlePlantarseClick = () => {
    comprobarPuntuacion(puntuacionActual);
    botondamecarta.disabled = true;
    botonplantarse.disabled = true;
    botonadivinafuturo.disabled = false;
}

const handleAdivinaFuturo = () => {
    const cartaAleatoria = dameCarta(dameNumAleatorio());
    pideCarta(cartaAleatoria);
    const puntuacion = sumaPuntuacion(cartaAleatoria);
    muestraPuntuacion();
    gestionarGanarPerder(puntuacion);
}

botondamecarta.addEventListener("click", handlePideCartaClick);
botonplantarse.addEventListener("click", handlePlantarseClick);
botonnuevapartida.addEventListener("click", reanudarPartida);
botonadivinafuturo.addEventListener("click", handleAdivinaFuturo);