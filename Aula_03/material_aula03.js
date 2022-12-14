
const frutas = ['Banana', 'Uva', 'morango']
//index vazios servem para pular elementos dentro de um array
const [fruta1,,fruta2] = frutas


console.log(frutas);
console.log(fruta1);
console.log(fruta2);

const {nome, sobrenome} = {nome: "Gregório", sobrenome: "Silva"};
console.log(`${nome}\n ${sobrenome}`);

const objComplicado = {
    arrayProp: [
    "Resilia",
    { ramo: "Educação" }
    ]
   }
   const { arrayProp: [primeiro, segundo ] } = objComplicado

