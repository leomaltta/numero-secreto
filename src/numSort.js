const menorValor = 1;
const maiorValor = 100;

const numSecret = numRandom();

function numRandom() {
  return parseInt(Math.random() * maiorValor + 1);
}

console.log("Número secreto:", numSecret);

const elementMenorValor = document.querySelector("#menor-valor");
elementMenorValor.innerHTML = menorValor;

const elementMaiorValor = document.querySelector("#maior-valor");
elementMaiorValor.innerHTML = maiorValor;
