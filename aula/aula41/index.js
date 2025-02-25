const cx1 = document.querySelector('#cx1')
const btn_c1 = document.querySelector('#c1')
const cursos = ['HTML', 'CSS', 'JavaScript', 'PHP', 'REACT', 'ReactNative']

cursos.map((el, chave) => {
    const novoElemento = document.createElement('div')
    novoElemento.setAttribute('id', 'c'+chave)
    novoElemento.setAttribute('class', 'curso c1')
    novoElemento.innerHTML = el

    const lixeira = document.createElement('img')
    lixeira.setAttribute('src', 'assets/lixeira.png')
    lixeira.setAttribute('class', 'lixeira')
    lixeira.addEventListener('click', (evt) => {
        cx1.removeChild(evt.target.parentNode)
    })
    
    novoElemento.appendChild(lixeira)
    cx1.appendChild(novoElemento)
})