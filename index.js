class Conta {
  constructor(nome,dataVencimento,valor){
    this.nome = nome;
    this.dataVencimento = dataVencimento;
    this.valor = valor;
  }
}

function push(){     
var nomeConta = document.getElementById('nomeConta');
conta = new Conta(nomeConta)
console.log(nomeConta.value);
}