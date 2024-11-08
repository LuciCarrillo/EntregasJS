import "./style.css";

import{
    muestraPuntuacion,
    handlePideCartaClick,
    handlePlantarseClick,
    reanudarPartida,
    handleAdivinaFuturo
} from "./ui";

const botonplantarse = document.getElementById("plantarse");
const botonnuevapartida = document.getElementById("nuevapartida");
const botondamecarta = document.getElementById("damecarta");
const botonadivinafuturo = document.getElementById("adivinafuturo");


document.addEventListener("DOMContentLoaded", muestraPuntuacion);


if (botondamecarta && botondamecarta instanceof HTMLButtonElement) {
    botondamecarta.addEventListener("click", handlePideCartaClick);
} else {
    console.log('Error')
}

if (botonplantarse && botonplantarse instanceof HTMLButtonElement) {
    botonplantarse.addEventListener("click", handlePlantarseClick);
} else {
    console.log('Error')
}

if (botonnuevapartida && botonnuevapartida instanceof HTMLButtonElement) {
    botonnuevapartida.addEventListener("click", reanudarPartida);
} else {
    console.log('Error')
}

if (botonadivinafuturo && botonadivinafuturo instanceof HTMLButtonElement) {
    botonadivinafuturo.addEventListener("click", handleAdivinaFuturo);
} else {
    console.log('Error')
}