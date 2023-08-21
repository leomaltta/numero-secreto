function verifyGuess(guess) {
    const num = +guess

    if (guessNotValid(num)) {
        elementGuess.innerHTML += '<div>Valor Inválido</div>'
        return
    }

    if (numBigSmallThanAllowed(num)) {
        elementGuess.innerHTML += `<div>Valor inválido: Fale um número entre ${menorValor} e ${maiorValor}</div>`
        return
    }

    if (num === numSecret) {
        document.body.innerHTML = `
            <h2>Você acertou!</div>
            <h3>O número secreto era ${numSecret}</h3>
            <button id="jogar-novamente" class="btn-jogar">Jogar novamente</button>
        `
    } else if (num > numSecret) {
        elementGuess.innerHTML += `
        <div class="mensagem-text" id="response">O número secreto é menor <i class="fa-solid fa-down-long"></i></div>
        `
    } else {
        elementGuess.innerHTML += `
        <div class="mensagem-text" id="response">O número secreto é maior <i class="fa-solid fa-up-long"></i></div>
        `
    }
}

function numBigSmallThanAllowed(num) {
    return num > maiorValor || num < menorValor
}

function guessNotValid(num) {
    return Number.isNaN(num)
}


document.body.addEventListener('click', e => {
    if (e.target.id == 'jogar-novamente') {
        window.location.reload()
    }
})