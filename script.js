const MINIMO = 1;  // minimo e massimo sono inclusivi
const MASSIMO = 1000;

const output = document.getElementById("output");
const bottone = document.getElementById("bottone");
const piu = document.getElementById("piu");
const giusto = document.getElementById("giusto");
const meno = document.getElementById("meno");

var tentativo;
var tentativi = 0;
var max = MASSIMO;
var min = MINIMO;

output.innerHTML = `pensa ad un numero da ${MINIMO} a ${MASSIMO}`;

document.addEventListener("click", (e) => {

    switch (e.target.id) {

        case "bottone":

            bottone.style.display = "none";
            piu.style.display = giusto.style.display = meno.style.display = "flex";

            break;

        case "piu":
            min = tentativo + 1;
            break;

        case "meno":
            max = tentativo - 1;
            break;

        case "giusto":
            fine();
            break;

        case "ricarica":
            location.reload();
            break;

        default:
            break;

    } 

    if (e.target.id === "bottone" || e.target.id === "meno" || e.target.id === "piu") {
        //tentativo = Math.floor((max + min) * 0.5); // tentativo più ottimale (per minimizzare il numero di tentativi)
        tentativo = Math.floor(Math.random() * (max - min + 1)) + min; // tentativo random
        ++tentativi;
        output.innerHTML = `${min} ≤ il numero ${tentativo} ≤ ${max}`;
    }
    
    if (min === max) {
        fine();
    }

});

function fine() {

    piu.style.display = meno.style.display = "none";
    output.innerHTML = `mitico, il tuo computer ha indovinato in ${tentativi}° tentativi!`; 
    giusto.id = giusto.innerHTML = "ricarica";

}
