console.log(`Trabalhando com Listas`);
// const salvador = `Savaldor`;
// const saoPaulo = `São Paulo`;
// const rioDeJaneiro = `Rio de Janeiro`;

const listaDeDestinos = new Array(
    `Savaldor`,
    `São Paulo`,
    `Rio de Janeiro`,
    
);

listaDeDestinos.push(`Curitiba`); //adicionando um item a lista
console.log("Destinos possíveis: ");
console.log(listaDeDestinos);

listaDeDestinos.splice(1,1);//removendo itens de uma lista 
console.log(listaDeDestinos);
console.log(listaDeDestinos[1]);

