console.log("Olá mundo!")

const semaforo = "amarelo";
const promessa = new Promise((aceitar, rejeitar) => {
    if(semaforo == "verde"){
        aceitar("Siga em frente");
    } else {
        rejeitar("Pare");
    }
})
.then((aceitar) => console.log(`${aceitar} pois o sinal está ${semaforo}`))
.catch((rejeitar) => console.log(`${rejeitar} pois o sinal está ${semaforo}`))

const chalk = require("chalk");