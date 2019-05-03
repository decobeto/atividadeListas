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
  console.log(ultimoFilho)
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

function adicionaListaDesejo(){     
  var nomeDesejo = document.getElementById('nomeDesejos')
  var valorDesejo = document.getElementById('valorDesejos')
  let desejo = new Desejo(nomeDesejo, valorDesejo)
  arrayDesejo.push(desejo) 
  console.log("Array Desejo:")
  console.log(arrayDesejo) 
  console.log("Array Conta:")
  console.log(arrayConta) 
  adicionaNaTabelaDesejos(desejo)
}

function adicionaNaTabelaDesejos(desejo){
  tabelaDesejo = document.querySelector('#tabelaDesejos')
  tabelaDesejo.appendChild(montaTrDesejos(desejo))
}

function montaTrDesejos(desejo){
  var contaTr = document.createElement("tr")

  contaTr.appendChild(montaTd(desejo.nome.value))
  contaTr.appendChild(montaTd(desejo.valor.value))
  return contaTr
}

function comprar(){
  let primeiroFilho = tabelaDesejo.firstElementChild
  primeiroItem = arrayDesejo[0]
  arrayConta.push(arrayDesejo[0])
  adicionaDesejosNaListaDeCompras(primeiroItem)
  arrayDesejo.shift()
  primeiroFilho.remove()
  console.log(primeiroFilho)
  console.log("Array Desejo:")
  console.log(arrayDesejo) 
  console.log("Array Conta:")
  console.log(arrayConta)
}

function adicionaDesejosNaListaDeCompras(primeiroItem){     
  let dataHoje = new Date();

  let conta = new Conta(primeiroItem.nome, dataHoje, primeiroItem.valor) 
  adicionaNaTabela(conta)
}