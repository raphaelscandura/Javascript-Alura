console.log(`Trabalhando com Listas`);

const listaDeLugares = new Array(
    `São Paulo`,
    `Rio de Janeiro`,
    `Salvador`,
    `Fortaleza`,
);

console.log(listaDeLugares);

listaDeLugares.push(`Porto Alegre`); //Adicionando um item no array

console.log(listaDeLugares);

console.log(listaDeLugares[1]); //Identificando posição dos elementos no array

listaDeLugares.splice(1,1); //Removendo um elemento do array de acordo com a posição dele

console.log(listaDeLugares);

