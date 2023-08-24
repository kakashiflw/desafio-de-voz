const acessarOCorpo = document.body
function verificaChuteValido (chute) {
  const numero = +chute

  if (chuteInvalido(numero)) {
    chutarNumero.innerHTML += "<div> Por favor fale um numero </div>"
    return
  }

  if (numeroForMaiorOuMenorQueOValorPermitido(numero)) {
    chutarNumero.innerHTML += `<div> Numero ivalido, o numero secreto esta entre o ${menorValor} e o ${maiorValor} </div>`
    return
  }

  if(numero === numeroSeccreto) {
    acessarOCorpo.innerHTML = `
    <h2>Você Acertou</h2>
    <h3>O número secreto era ${numeroSeccreto}!</h3>

    <button id="jogar" class ="btn-jogar">jogar novamente</button>
    `
  } else if (numero < numeroSeccreto) {
    chutarNumero.innerHTML += `
    <div>O número secreto é maior <i class="fa-solid fa-up-long"></i></div>
    `
  } else {
    chutarNumero.innerHTML += `
    <div>O número secreto é menor <i class="fa-solid fa-down-long"></i></div>
    `
  }
}

function chuteInvalido(numero) {
    return Number.isNaN(numero)
}

function numeroForMaiorOuMenorQueOValorPermitido (numero) {
    return numero > maiorValor || numero < menorValor
}

acessarOCorpo.addEventListener('click', e => {
    if (e.target.id == 'jogar novamente') {
        window.location.reload()
    }
})