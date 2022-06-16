const saldo_conta = [100, 500, 200, 450];
/* .reduce = faz a soma de todos os itens do Array.*/
const total = saldo_conta.reduce((acumulador, valor) => acumulador + valor);
console.log(total);