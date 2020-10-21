console.log(`Pacotes de Viagem`);


const listaDeLugares = new Array(
    `São Paulo`,
    `Rio de Janeiro`,
    `Salvador`,
    `Fortaleza`,
    `Porto Alegre`,
);

//var idadeComprador = 21;

var idadeComprador = 15;
//var estaAcompanhada = false;
var estaAcompanhada = true;
//var passagemComprada = false;
var passagemComprada = true;

if(idadeComprador >= 18 || estaAcompanhada){
    console.log(`-----DESTINOS-----`);
    console.log(listaDeLugares);
} else{
        console.log("Infelizmente, não podemos vender pacotes de viagem para menores de idade");
}

if(idadeComprador >= 18 || estaAcompanhada && passagemComprada){
    console.log("Boa viagem")
} else{
        console.log("Viagem não permitida");
}




