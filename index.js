var arrayConta = []
var arrayDesejo = []

class Conta {
  constructor(nome, dataVencimento, valor){
    this.nome = nome
    this.dataVencimento = dataVencimento
    this.valor = valor
  }
}

class Desejo {
  constructor(nome, valor){
    this.nome = nome
    this.valor = valor
  }
}

function adicionaLista(){     
  var nomeConta = document.getElementById('nomeConta')
  var dataConta = document.getElementById('dataVencimentoConta')
  var valorConta = document.getElementById('valorConta')
  let conta = new Conta(nomeConta, dataConta, valorConta)
  arrayConta.push(conta) 
  console.log(arrayConta) 
  adicionaNaTabela(conta)
}

function adicionaNaTabela(conta){
  tabela = document.getElementById('tabelaConta')
  tabela.appendChild(montaTr(conta))
}

function montaTr(conta){
  var contaTr = document.createElement("tr")

  contaTr.appendChild(montaTd(conta.nome.value))
  contaTr.appendChild(montaTd(conta.dataVencimento.value))
  contaTr.appendChild(montaTd(conta.valor.value))
  return contaTr
}

function montaTd(dado){
  var contaTd = document.createElement("td")
  contaTd.textContent = dado;
  return contaTd
}

function pagar(){
  let ultimoFilho = tabela.lastChild
  ultimoFilho.remove()
  arrayConta.pop()
  console.log(arrayConta)
}

function pagarTudo(){
  arrayConta = []
  console.log(arrayConta)
  let informacaoTabela = document.querySelector("#tabelaConta")
  console.log(informacaoTabela)
  informacaoTabela.innerHTML = " ";
}

