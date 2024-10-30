import "./style.css";

import{
    muestraPuntuacion,
    handlePideCartaClick,
    handlePlantarseClick,
    reanudarPartida,
    handleAdivinaFuturo
} from "./ui";

const botonnuevapartida = document.getElementById("nuevapartida") as HTMLButtonElement;
const botonplantarse = document.getElementById("plantarse") as HTMLButtonElement;
const botondamecarta = document.getElementById("damecarta") as HTMLButtonElement;
const botonadivinafuturo = document.getElementById("adivinafuturo") as HTMLButtonElement;


document.addEventListener("DOMContentLoaded", muestraPuntuacion);

botondamecarta.addEventListener("click", handlePideCartaClick);
botonplantarse.addEventListener("click", handlePlantarseClick);
botonnuevapartida.addEventListener("click", reanudarPartida);
botonadivinafuturo.addEventListener("click", handleAdivinaFuturo);