const cx1 = document.querySelector('#cx1')
const btn_c1 = document.querySelector('#c1')
const cursos = ['HTML', 'CSS', 'JavaScript', 'PHP', 'REACT', 'ReactNative']

cursos.map((el, chave) => {
    console.log(chave)
    const novoElemento = document.createElement('div')
    novoElemento.setAttribute('id', 'c'+chave)
    novoElemento.setAttribute('class', 'curso c1')
    novoElemento.innerHTML = el
    cx1.appendChild(novoElemento)
})