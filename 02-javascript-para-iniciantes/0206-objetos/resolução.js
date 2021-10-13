// Crie um objeto com os seus dados pessoais
// Deve possuir pelo menos duas propriedades nome e sobrenome

const dadosPessoais = {
  nome: 'Lucas',
  sobrenome: 'Pina',
  idade: 26,
  cidade: 'Belém'
}

// Crie um método no objeto anterior, que mostre o seu nome completo

dadosPessoais.nomeCompleto = function () {
  return `${this.nome} ${this.sobrenome}`
}

// Modifique o valor da propriedade preco para 3000

var carro = {
  preco: 1000,
  portas: 4,
  marca: 'Audi'
}

carro.preco = 3000

// Crie um objeto de um cachorro que represente um labrador,
// preto com 10 anos, que late ao ver um homem

var dog = {
  raca: 'Labrador',
  pelo: 'Preto',
  idade: 10,

  latirr(pessoa) {
    if (pessoa === 'homem') {
      return 'latir'
    } else {
      return 'nada acontece'
    }
  }
}
