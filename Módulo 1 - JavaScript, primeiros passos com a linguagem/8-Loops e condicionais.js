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

var destino = "Salvador";
var contador = 0;

while(contador < 3){
    var destinoExiste = false;
    if(listaDeLugares[contador] == destino){
        destinoExiste = true;
        break;
    }
    contador++;
}

if(destinoExiste){
    console.log("O destino está na lista!");
} else{
    console.log("O destino não está na lista!");
}

if(idadeComprador >= 18 || estaAcompanhada && passagemComprada){
    console.log("Boa viagem")
} else{
    console.log("Viagem não permitida");
}

