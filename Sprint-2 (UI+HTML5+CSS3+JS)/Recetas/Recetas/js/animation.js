"use strict"

const ul = document.querySelector("ul");

function frames(){
    const animacion = ul.animate([
        //keyframes
        {transform: "translateY(0px)"},
        {transform: "translateY(-100px)"}
    ], {
        //opciones
        easing: "linear",
        iterations: 1,
        duration: 200 //milisegundos
    });

    return animacion.finished;

}

function displace(){
    frames()
    .then((res)=>{
        console.log(res);
        ul.appendChild(document.querySelectorAll("ul > li")[0])
    })
}

setInterval(() => {
    displace()
}, 1000);