const fechaInicio = new Date("2025-02-14T00:00:00");

function actualizarContador(){

    const ahora = new Date();

    let diferencia = ahora - fechaInicio;

    const dias =
    Math.floor(
    diferencia /
    (1000*60*60*24)
    );

    const años =
    Math.floor(dias / 365);

    const meses =
    Math.floor((dias % 365) / 30);

    const diasRestantes =
    (dias % 365) % 30;

    document.getElementById("timer")
    .innerHTML = `
        ${años} año(s)<br>
        ${meses} mes(es)<br>
        ${diasRestantes} día(s)
    `;
}

setInterval(actualizarContador,1000);

actualizarContador();

function abrirHistoria(){

    document
    .getElementById("historia")
    .classList
    .remove("hidden");

    document
    .getElementById("historia")
    .scrollIntoView({
        behavior:"smooth"
    });
}

function mostrarFinal(){

    document
    .getElementById("mensajeFinal")
    .classList
    .remove("hidden");

    lanzarCorazonesMasivos();
}

function toggleMusic(){

    const musica =
    document.getElementById("musica");

    if(musica.paused){

        musica.play();

    }else{

        musica.pause();
    }
}

const frases = [

"Mi chiquita ❤️",
"Mi bichito ❤️",
"Mi amor ❤️",
"Mi niña ❤️",
"Mi tesoro ❤️",
"Te amo ❤️",
"Sos mi persona favorita ❤️",
"Gracias por elegirme ❤️",
"Mi lugar favorito sos vos ❤️",
"Siempre vos ❤️",
"Haces mis días mejores ❤️",
"Te volvería a elegir ❤️",
"Qué suerte haberte conocido ❤️"
];

function crearCorazon(){

    const elemento =
    document.createElement("div");

    elemento.classList.add("heart");

    if(Math.random() < 0.7){

        elemento.innerHTML = "❤️";

    }else{

        elemento.innerHTML =
        frases[
            Math.floor(
            Math.random()*frases.length
            )
        ];
    }

    elemento.style.left =
    Math.random()*100 + "vw";

    elemento.style.fontSize =
    (15 + Math.random()*20)
    + "px";

    const duracion =
    5 + Math.random()*8;

    elemento.style.animationDuration =
    duracion + "s";

    document
    .getElementById("hearts-container")
    .appendChild(elemento);

    setTimeout(()=>{

        elemento.remove();

    },duracion*1000);
}

setInterval(crearCorazon,350);

function lanzarCorazonesMasivos(){

    for(let i=0;i<120;i++){

        setTimeout(()=>{

            crearCorazon();

        },i*50);
    }
}