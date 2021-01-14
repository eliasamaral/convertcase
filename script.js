const input = document.getElementById('input')
const LowCase = document.getElementById('lowcase')
const UpperCase = document.getElementById('uppercase')
const iniciaisMaiusculasDOM = document.getElementById('iniciaisMaiusculas')
const clear = document.getElementById('clear')


clear.addEventListener('click', () => {
    input.value = ''
})

LowCase.addEventListener('click', () => {
    tudoMinusculo(input.value)
})

UpperCase.addEventListener('click', () => {
    tudoMaiusculo(input.value)
})

iniciaisMaiusculasDOM.addEventListener('click', () => {
    iniciaisMaiusculas(input.value)
})



const tudoMaiusculo = (e) => {
    const out = e.toUpperCase()
    input.value = out
}

const tudoMinusculo = (e) => {
    const out = e.toLowerCase()
    input.value = out
}

const iniciaisMaiusculas = (e) => {
    const out = e.toLowerCase().replace(/(?:^|\s)\S/g, function (a) { return a.toUpperCase(); });
    input.value = out
}



