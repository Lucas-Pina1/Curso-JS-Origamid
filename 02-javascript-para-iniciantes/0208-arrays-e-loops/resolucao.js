// Crie uma array com os anos que o Brasil ganhou a copa
// 1959, 1962, 1970, 1994, 2002
const brazilWin = [1959, 1962, 1970, 1994, 2002]

// Interaja com a array utilizando um loop, para mostrar
// no console a seguinte mensagem, `O brasil ganhou a copa de ${ano}`
for (let i = 0; i < brazilWin.length; i++) {
  console.log(`O brasil ganhou a copa de ${brazilWin[i]}`)
}

// Interaja com um loop nas frutas abaixo e pare ao chegar em Pera
var frutas = ['Banana', 'Maçã', 'Pera', 'Uva', 'Melância']

for (let fruta = 0; fruta < frutas.length; fruta++) {
  console.log(frutas[fruta])
  if (frutas[fruta] === 'Pera') {
    break
  }
}

// Coloque a última fruta da array acima em uma variável,
// sem remover a mesma da array.
var lastFrutas = frutas[frutas.length - 1]
