//Desafio 
const nome_cartao = "João Paulo";
const numero_cartao = 19981975;
const codigo_verificacao = 998;

function verificar_dados(nome, cartao, codigo)
{
const nome_correto = nome === nome_cartao;
if(nome_correto){
  console.log("nome correto")
}
else{
  console.log("Nome incorreto")
}

const numero_correto = cartao === numero_cartao;
if(numero_correto){
  console.log("Numero do cartão está correto")
}
else{
  console.log("Numero do cartão está incorreto")
}

const codigo_de_verificacao_correto = codigo === codigo_verificacao;
if(codigo_de_verificacao_correto){
  console.log("Código correto")
}
else{
  console.log("Código incorreto")
}

const todos_dados_corretos = nome_correto && numero_correto && codigo_de_verificacao_correto;
return todos_dados_corretos;
}

verificar_dados('João Paulo', 19981975, 998)
