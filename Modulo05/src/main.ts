import "./style.css";

const botonplantarse = document.getElementById("plantarse");
const botonnuevapartida = document.getElementById("nuevapartida");
const botondamecarta = document.getElementById("damecarta");
const botonadivinafuturo = document.getElementById("adivinafuturo");

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
    if(imagencarta && imagencarta instanceof HTMLImageElement){
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

const obtenerpuntosCarta = (cartaAleatoria : number) => {
    if(cartaAleatoria > 7){
        return 0.5;
    }

    return cartaAleatoria;
}

const sumaPuntuacion = (puntuacion : number)  : number => {
    return puntuacionActual + puntuacion;
}

const actualizarPuntuacionActual = (puntosActuales : number) => {
    puntuacionActual = puntosActuales;
}

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

const reanudarPartida =  () => {
    let puntuacion = document.getElementById("puntuacion");

    if(puntuacion && puntuacion instanceof HTMLDivElement && estado && estado instanceof HTMLDivElement && imagencarta && imagencarta instanceof HTMLImageElement){
        puntuacionActual = 0;
        puntuacion.innerHTML = `Puntuación actual 0`;
        imagencarta.src = `/imagenes/cartaBocaAbajo.jpg`;
        cambiosBotonesReanudarPartida();
        cambioEstadoReanudarPartida();
    }
    
}

const handlePideCartaClick = () => {
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

const handlePlantarseClick = () => {
    comprobarPuntuacion(puntuacionActual);
    cambiosBotonesPlantarse();
}

const handleAdivinaFuturo = () => {
    handlePideCartaClick(); 
}

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

