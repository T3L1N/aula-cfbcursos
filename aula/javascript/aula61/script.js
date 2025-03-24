const Pnome = document.querySelector('#fnome')
const Pidade = document.querySelector('#fidade')
const btnADD = document.querySelector('#btnADD')
const res = document.querySelector('.res')

btnADD.addEventListener('click', (evt) => {
    nm = Pnome.value
    idd = Pidade.value
    
    res.innerHTML += `${nm}: ${idd} <br>`
})