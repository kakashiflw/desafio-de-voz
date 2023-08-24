const menorValor = 1
const maiorValor = 1000
const numeroSeccreto = gerarNumeroSecreto()

function gerarNumeroSecreto() {
    return parseInt(Math.random() * maiorValor + 1);
}

const elementoMenorValor = document.getElementById('menor-valor');
elementoMenorValor.innerHTML = menorValor;

const elementoMaiorValor = document.getElementById('maior-valor');
elementoMaiorValor.innerHTML = maiorValor;

console.log(numeroSeccreto);