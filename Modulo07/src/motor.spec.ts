import {vi} from "vitest";
import {actualizarPuntuacionActual, dameCarta, dameNumAleatorio, obtenerpuntosCarta, sumaPuntuacion} from './motor';
import {partida} from './modelo';

describe ("sumaPuntuacion", () => {
    it("El jugador ha ganado la partida", () => {
        // Arrange
        const puntosSiguienteCarta = 0.5;
        vi.spyOn(partida, "puntuacionActual", "get").mockReturnValue(7);

        // Act
        const resultado = sumaPuntuacion(puntosSiguienteCarta);

        // Assert
        expect(resultado).toBe(7.5);
    });

    it("El jugador se ha pasado de 7.5 puntos", () => {
        // Arrange
        const puntosSiguienteCarta = 2;
        vi.spyOn(partida, "puntuacionActual", "get").mockReturnValue(7);

        // Act
        const resultado = sumaPuntuacion(puntosSiguienteCarta);

        // Assert
        expect(resultado).toBe(9);
    });

    it("El jugador se ha quedado corto de 7.5 puntos", () => {
        // Arrange
        const puntosSiguienteCarta = 2;
        vi.spyOn(partida, "puntuacionActual", "get").mockReturnValue(2);

        // Act
        const resultado = sumaPuntuacion(puntosSiguienteCarta);

        // Assert
        expect(resultado).toBe(4);
    });
});

describe("dameNumAleatorio", () => {
    it("Devuelve 0 cuando Math.random() es 0", () => {
        // Arrange
        vi.spyOn(Math, "random").mockReturnValue(0);

        // Act
        const resultado = dameNumAleatorio();

        // Assert
        expect(resultado).toBe(0);
    });

    it("Devuelve 9 cuando Math.random() es 0.99999", () => {
        // Arrange
        vi.spyOn(Math, "random").mockReturnValue(0.99999);

        // Act
        const resultado = dameNumAleatorio();

        // Assert
        expect(resultado).toBe(9);
    });

    it("Devuelve un valor intermedio correcto (ej: random=0.5 -> 5)", () => {
        // Arrange
        vi.spyOn(Math, "random").mockReturnValue(0.5);

        // Act
        const resultado = dameNumAleatorio();

        // Assert
        expect(resultado).toBe(5);
    });
});


describe("dameCarta", () => {
    it("Devuelve la carta correspondiente al índice", () => {
        // Arrange
        const indice = 9;

        // Act
        const resultado = dameCarta(indice);

        // Assert
        expect(resultado).toBe(12);
    });
});

    describe("obtenerpuntosCarta", () => {
        it("Devuelve 0.5 si la carta es mayor que 7", () => {
            // Arrange
            const cartaAleatoria = 12;

            // Act
            const resultado = obtenerpuntosCarta(cartaAleatoria);

            // Assert
            expect(resultado).toBe(0.5);
    });

        it("Devuelve el valor de la carta si es 7 o menor", () => {
            // Arrange
            const cartaAleatoria = 5;

            // Act
            const resultado = obtenerpuntosCarta(cartaAleatoria);

            // Assert
            expect(resultado).toBe(5);
        });
});

describe("actualizarPuntuacionActual", () => {
    it("Actualiza correctamente la puntuación del jugador", () => {
        // Arrange
        const setSpy = vi.spyOn(partida, "puntuacionActual", "set");

        // Act
        actualizarPuntuacionActual(7);

        // Assert
        expect(setSpy).toHaveBeenCalledWith(7);
    });
});

