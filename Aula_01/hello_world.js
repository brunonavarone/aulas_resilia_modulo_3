/*const semaforo = "amarelo";
const promessa = new Promise((aceitar, rejeitar) => {
    if(semaforo == "verde"){
        aceitar("Siga em frente");
    } else {
        rejeitar("Pare");
    }
})
.then((aceitar) => console.log(`${aceitar} pois o sinal está ${semaforo}`))
.catch((rejeitar) => console.log(`${rejeitar} pois o sinal está ${semaforo}`))*/

console.log("carregou");
const Chalk = require("chalk");

//import Chalk from "chalk";
//import Fetch from "node-fetch";

const msg_ola = Chalk.blue("Olá ");
const msg_mundo = Chalk.white("mundo ");
const msg_colorido = Chalk.magenta("colorido!");

console.log(msg_ola + msg_mundo + msg_colorido);

const promessa_Comunicacao = new Promise((aceitando, recusando) => {
const random = Math.floor(Math.random() * (4 - 0) + 1);
    
    console.log(`O número sorteado foi ${random}`)
    if(random <= 2.5){
        aceitando("Ok, todos vivos na estação");
    }
    else{
        recusando("Comunicação perdida!");
    }
})
.then((aceitando) => console.log(`Sucesso: ${aceitando}`))
.catch((recusando) => console.log(`Falha: ${recusando}`))

/*const Fetch = require("node-fetch");
//import Nodefetch from "node-fetch"

Fetch("https://pokeapi.co/api/v2/pokemon")
    .then((result) => {
        console.log(result);
        /*resultado_JSN = result.JSON.parse(result)
        console.log(resultado_JSN)
    })
    .catch((erro) => {
        console.log(erro);
    })*/

