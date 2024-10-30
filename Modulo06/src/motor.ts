import{
    cartas,
    partida
} from "./modelo";

export const dameNumAleatorio = () : number => {
    const min = 0;
    const max = 9;
    return Math.floor(Math.random() * (max - min + 1) + min);
}

export const dameCarta = (numAleatorio : number) : number => {
    return cartas[numAleatorio];
}

export const sumaPuntuacion = (valorCarta : number)  : number => {
    let puntuacion = document.getElementById("puntuacion");

    if (puntuacion === null) {
        console.error("Error");
    }

    if(valorCarta && valorCarta<= 7){
        partida.puntuacionActual = partida.puntuacionActual + valorCarta;
    } else{
        partida.puntuacionActual = partida.puntuacionActual + 0.5;
    }
    return partida.puntuacionActual;
}