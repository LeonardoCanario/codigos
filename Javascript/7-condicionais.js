console.log(`Trabalhando com Condicionais`);
const listaDeDestinos = new Array(
    `Savaldor`,
    `São Paulo`,
    `Rio de Janeiro`,

);


const idadeComprador = 18;
const estaAcompanhada = false;
const temPassagemComprada = true;

console.log("Destinos possíveis: ");
console.log(listaDeDestinos);


// if (idadeComprador >= 18) {

//     console.log("Comprador Maior de Idade");

//     listaDeDestinos.splice(1, 1);//removendo itens de uma lista 

// }
// else if (estaAcompanhada) {

//     console.log("Comprador está acompanhada");

//     listaDeDestinos.splice(1, 1);

// }
// else {
//     console.log("Não é maior de idade não posso vender");

// }


// console.log(idadeComprador >18);
// console.log(idadeComprador <18);
// console.log(idadeComprador >=18);
// console.log(idadeComprador <=18);
// console.log(idadeComprador ==18);



if (idadeComprador >= 18 || estaAcompanhada == true) {


    listaDeDestinos.splice(0, 1);//removendo itens de uma lista 

}

else {
    console.log("Não é maior de idade não posso vender");
    console.log(listaDeDestinos);
}



console.log("Embarque: \n\n");
if(idadeComprador>=18 && temPassagemComprada){

    console.log("Boa Viagem ! !");

}

else {

    console.log("Você não pode embarcar");
}


console.log(listaDeDestinos);