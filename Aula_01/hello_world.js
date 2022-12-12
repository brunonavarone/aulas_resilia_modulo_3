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

const chalk = require("chalk");

const msg_ola = chalk.blue("Olá ");
const msg_mundo = chalk.white("mundo ");
const msg_colorido = chalk.magenta("colorido!");

console.log(msg_ola + msg_mundo + msg_colorido);

const promessa_Comunicacao = new Promise((aceitando, recusando) => {
    const random = Math.floor(Math.random() * (4 - 0) + 1);
    //return random === 1 ? true : false;
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