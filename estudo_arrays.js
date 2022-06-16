/*Tipos diferentes de chmar Array*/
let meuArray = ['João', 'Bruna'];
let meuArray2 = new Array();
let meuArray3 = new Array('Paulo');
//.push = adiciona um novo valor no final da lista
meuArray.push('Ana');
// .table = gera a lista em forma de tabela
//.unshift = adiciona um novo valor no inicio da lista
meuArray.unshift('breno');
meuArray.pop(); //.pop = apaga o ultimo item da lista
meuArray.shift(); // apaga o primeiro item da lista
meuArray.splice(1, 1); //.splice = apaga um item do meio d lista .splice(index, numero de itens  a apagar), mas se colocar um terceiro item pode substituir o valor.
meuArray.splice(2, 2, 'Pedro');

console.table(meuArray.length); //.length = mostra o tamanho da lista
console.log(meuArray2);
console.log(meuArray3);
