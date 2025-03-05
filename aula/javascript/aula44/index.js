const cxCursos = document.querySelector('#cxCursos')
const btn_c = [...document.querySelectorAll('.curso')]
const c1_2 = document.querySelector('#c1_2')
const cursos = ['HTML', 'CSS', 'JavaScript', 'PHP', 'REACT', 'ReactNative']
const btnCS = document.querySelector('#btnCS')
const btnRC = document.querySelector('#btnRC')

cursos.map((el, chave) => {
    const novoElemento = document.createElement('div')
    novoElemento.setAttribute('id', 'c'+chave)
    novoElemento.setAttribute('class', 'curso c1')
    novoElemento.innerHTML = el

    const comandos = document.createElement('div')
    comandos.setAttribute('class', 'comandos')

    const rb = document.createElement('input')
    rb.setAttribute('type', 'radio')
    rb.setAttribute('name', 'rb_curso')

    comandos.appendChild(rb)

    novoElemento.appendChild(comandos)

    cxCursos.appendChild(novoElemento)
})

const radioSelecionado = () => {
    const tdsRadios = [...document.querySelectorAll('input[type = radio]')]
    const radioSelecionado = tdsRadios.filter((ele, ind, arr) => {
        return ele.checked
    })
    return radioSelecionado[0]
}

btnCS.addEventListener('click', (evt) => {
    const rs = radioSelecionado()
    if (rs !== undefined) {
        const cursoSelecionado = rs.parentNode.previousSibling.textContent
        alert(`Curso selecionado: ${cursoSelecionado}`)
    } else {
        alert('Selecione um curso')
    }
})

btnRC.addEventListener('click', (evt) => {
    const rs = radioSelecionado()
    if (rs !== undefined) {
        const cursoSelecionado = rs.parentNode.parentNode
        cursoSelecionado.remove()
    } else {
        alert('Selecione um curso para remove-lo')
    }
})

// parentNode
// childNodes [nodenumber]
// firstChild
// lastChild
// nextSibling
// previousSibling