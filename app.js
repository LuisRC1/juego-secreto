let numeroSecreto = 0;
let intentos = 0;
let listaNumerosSorteados = [];
let numeroMaximo = 10;

function asignarTextoElemeto(elemento, texto) {
    let elementoHTML = document.querySelector(elemento);
    elementoHTML.innerHTML = texto;
    return;
}

function verificarIntento() {
    let numeroUsuario = parseInt(document.getElementById('valorUsuario').value);
    if (numeroUsuario === numeroSecreto) {
        asignarTextoElemeto('p', `Acertaste el número en ${intentos} ${intentos === 1 ? 'intento' : 'intentos'}`);
        document.getElementById('reiniciar').removeAttribute('disabled');
    } else {
        //El usuario no acertó.
        if (numeroUsuario > numeroSecreto) {
            asignarTextoElemeto('p', 'El número secreto es menor');
        } else {
            asignarTextoElemeto('p', 'El número secreto es mayor');
        }
        intentos++;
        limpiarCaja();
    }
    return;
}

function limpiarCaja() {
    /*let valorCaja = document.querySelector('#valorUsuario');
    valorCaja.value = '';*/
    document.querySelector('#valorUsuario').value = '';
}

//Funcion con recursividad
function generarNumeroSecreto() {
    let numeroGenerado =  Math.floor(Math.random() * numeroMaximo) + 1;
    console.log(numeroGenerado);
    console.log(listaNumerosSorteados);
    //Ya sorteamos todos los numeros?
    if (listaNumerosSorteados.length == numeroMaximo) {
        asignarTextoElemeto('p', 'Ya se sortearon todos los números posibles');
    } else {
        /*if numeroGenerado is in listaNumerosSorteados*/
        if (listaNumerosSorteados.includes(numeroGenerado)) {
            return generarNumeroSecreto();
        } else {
            listaNumerosSorteados.push(numeroGenerado);
            return numeroGenerado;
        }
    } 
}

function condicionesIniciales() {
    asignarTextoElemeto('h1', 'Juego del número secreto');
    asignarTextoElemeto('p', `Elige un número del 1 al ${numeroMaximo}`);
    numeroSecreto = generarNumeroSecreto();
    intentos = 1;
}

function reiniciarJuego() {
    //Limpiar la caja
    limpiarCaja();
    //Indicar mensaje de inicio (intervalo de números)
    //Generar el número aleatorio (nuevamente)
    //Inicializar el número de intentos
    condicionesIniciales();
    //Deshabilitar el botón de nuevo juego
    document.querySelector('#reiniciar').setAttribute('disabled', 'true');
}

condicionesIniciales();