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

export const obtenerpuntosCarta = (cartaAleatoria : number) => {
    if(cartaAleatoria > 7){
        return 0.5;
    }

    return cartaAleatoria;
}

export const sumaPuntuacion = (puntuacion : number)  : number => {
    return partida.puntuacionActual + puntuacion;
}

export const actualizarPuntuacionActual = (puntosActuales : number) => {
    partida.puntuacionActual = puntosActuales;
}