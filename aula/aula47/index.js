const p_array = document.querySelector('#array')
const pesquisar = document.querySelector('#pesquisar')
const btnPesquisar = document.querySelector('#btnPesquisar')
const resultado = document.querySelector('#resultado')

const elementos_array = [10, 5, 8, 2, 9, 15, 20]

p_array.innerHTML = `[${elementos_array}]`

btnPesquisar.addEventListener('click', (evt) => {
    const ret = elementos_array.find((e, i) => {
        if (e == pesquisar.value) {
            resultado.innerHTML = `Valor encontrado ${e}, na posição ${i}`
            return e
        } else {
            resultado.innerHTML = `Esse valor não existe`
        }
    })
})