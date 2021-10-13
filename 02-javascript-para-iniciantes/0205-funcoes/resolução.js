// Crie uma função para verificar se um valor é Truthy

function itsTrue(x) {
  return !!x
}

// Crie uma função matemática que retorne o perímetro de um quadrado
// lembrando: perímetro é a soma dos quatro lados do quadrado

function perimetroDoQuadrado(lado) {
  return lado + lado + lado + lado
}

// Crie uma função que retorne o seu nome completo
// ela deve possuir os parâmetros: nome e sobrenome

function nomeCompleto(nome, sobreNome) {
  return `seu completo é ${nome} ${sobreNome}`
}

// Crie uma função que verifica se um número é par

function ePar(numero) {
  if (numero % 2 === 0) {
    return true
  } else {
    return false
  }
}

// Crie uma função que retorne o tipo de
// dado do argumento passado nela (typeof)

function tipoDoDado(dado) {
  return console.log(typeof dado)
}

// addEventListener é uma função nativa do JavaScript
// o primeiro parâmetro é o evento que ocorre e o segundo o Callback
// utilize essa função para mostrar no console o seu nome completo
// quando o evento 'click' ocorrer.

addEventListener('click', function () {
  console.log('seu nome completo é Lucas Pina')
})

// Corrija o erro abaixo
var totalPaises = 193

function precisoVisitar(paisesVisitados) {
  return `Ainda faltam ${totalPaises - paisesVisitados} países para visitar`
}
function jaVisitei(paisesVisitados) {
  return `Já visitei ${paisesVisitados} do total de ${totalPaises} países`
}

precisoVisitar(20)
