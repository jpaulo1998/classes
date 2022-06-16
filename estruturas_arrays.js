const redes_sociais = ['tiktok', 
'instagram', 
'facebook', 
'orkut', 
'link'];

/* .indexOf() = descobrir a posição do item na lista
const orkut = redes_sociais.indexOf('orkut');
console.log(orkut);
console.log(redes_sociais.includes('youtube')); //.includes = ver se um item esta na lista
*/

//Laços de repetição

// aparece todos os itens da lista 
for (let i = 0; i < redes_sociais.length; i++){
  console.log(redes_sociais[i]);
}
// aparece todos os itens da lista e seus indices
for (const i in redes_sociais){
  console.log(`${i}: ${redes_sociais[i]}`);
}
// aparece todos os itens da lista 
for(const valor of redes_sociais){
  console.log(valor);
}

redes_sociais.forEach((valor, indice, redes) => {
  console.log(valor);
  console.log(indice);
  console.log(redes);
});

// while
let i = 0;
while (i < redes_sociais.length){
  console.log(redes_sociais[i]);
  i++;
}
// Do while
let i = 0;
do{
  console.log(redes_sociais[i]);
  i++;
}
while (i < redes_sociais.length)