// Retorne no console todas as imagens do site
const img = document.querySelectorAll('img');
console.log(img);

// Retorne no console apenas as imagens que começaram com a palavra imagem
const comecaComImagem = document.querySelectorAll('img[src^="img/imagem"]');
console.log(comecaComImagem);

// Selecione todos os links internos (onde o href começa com #)
const linksInternos = document.querySelectorAll('[href^="#"]');
console.log(linksInternos);

// Selecione o primeiro h2 dentro de .animais-descricao
const primeiroH2 = document.querySelector('.animais-descricao h2');
console.log(primeiroH2);

// Selecione o último p do site
const allParagrafos = document.querySelectorAll('p');
console.log(allParagrafos[allParagrafos.length - 1]);