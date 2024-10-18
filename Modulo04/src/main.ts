import "./style.css";

document.addEventListener("DOMContentLoaded", () => {
    const botonsiguiente = document.getElementById("botonsiguiente") as HTMLButtonElement | null;
    const botonanterior = document.getElementById("botonanterior") as HTMLButtonElement | null;
    const botonreset = document.getElementById("botonreset") as HTMLButtonElement | null;
    const numeroactual = document.getElementById("turnoactual") as HTMLHeadingElement | null;
    const numeroinput = document.getElementById("actualizaturno") as HTMLInputElement| null;
    const botonactualizar = document.getElementById("botonactualizar") as HTMLButtonElement | null;

    // Función que obtiene el siguiente número y actualiza el valor de "turnoactual"
    function siguienteNumero():void {
        if(numeroactual !== null && numeroactual !== undefined){
            const actual = parseInt(numeroactual.innerHTML)|| 0;
            numeroactual.innerHTML = String(actual+1).padStart(2, '0');
        }
    }
    // Función que obtiene el número anterior y actualiza el valor de "turnoactual"
    function anteriorNumero():void {
        if(numeroactual !== null && numeroactual !== undefined){
            const actual = parseInt(numeroactual.innerHTML) || 0;
            numeroactual.innerHTML = String(Math.max(actual - 1, 0)).padStart(2, '0');
        }
    }

    // Función que hace reset del valor de "turnoactual"
    function resetNumero(): void {
        if(numeroactual !== null && numeroactual !== undefined){
            numeroactual.innerHTML = String(0).padStart(2, '0');
        }
    }

    // Función que actualiza el valor de "turnoactual" al introducido en el input
    function actualizaNumero(): void {
        if(numeroactual !== null && numeroactual !== undefined && numeroinput !== null && numeroinput !== undefined){
            const numeroactualizar = parseInt(numeroinput.value) || 0;
            if(numeroactualizar >= 0){
                numeroactual.innerHTML = String(numeroactualizar).padStart(2, '0');
            }
        }
    }

    // Agregar el evento al botón "Siguiente"
    if (botonsiguiente) {
        botonsiguiente.addEventListener("click", siguienteNumero);
    }

    // Agregar el evento al botón "Anterior"
    if (botonanterior) {
        botonanterior.addEventListener("click", anteriorNumero);
    }

    // Agregar el evento al botón "Reset"
    if (botonreset) {
        botonreset.addEventListener("click", resetNumero);
    }

    // Agregar el evento al botón "Actualizar"
    if (botonactualizar) {
        botonactualizar.addEventListener("click", actualizaNumero);
    }
});


