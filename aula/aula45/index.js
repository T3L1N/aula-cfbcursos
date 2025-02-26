const cxCursos = document.querySelector('#cxCursos')
const btn_c = [...document.querySelectorAll('.curso')]
const c1_2 = document.querySelector('#c1_2')
const cursos = ['HTML', 'CSS', 'JavaScript', 'PHP', 'REACT', 'ReactNative']
const btnCS = document.querySelector('#btnCS')
const btnRC = document.querySelector('#btnRC')
const btnADA = document.querySelector('#adAntes')
const btnADD = document.querySelector('#adDepois')
const nomeCurso = document.querySelector("#nomeCurso")

var indice = 0

const criarNC = (curso) => {
    const novoElemento = document.createElement('div')
    novoElemento.setAttribute('id', 'c'+indice)
    novoElemento.setAttribute('class', 'curso c1')
    novoElemento.innerHTML = curso

    const comandos = document.createElement('div')
    comandos.setAttribute('class', 'comandos')

    const rb = document.createElement('input')
    rb.setAttribute('type', 'radio')
    rb.setAttribute('name', 'rb_curso')

    comandos.appendChild(rb)

    novoElemento.appendChild(comandos)

    return novoElemento
}

cursos.map((el, chave) => {
    const novoElemento = criarNC(el)
    cxCursos.appendChild(novoElemento)
    indice++
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
    try {
        const cursoSelecionado = rs.parentNode.previousSibling.textContent
        alert(`Curso selecionado: ${cursoSelecionado}`)
    } catch(ex) {
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

btnADA.addEventListener('click', (evt) => {
    const rs = radioSelecionado()
    try {
        if(nomeCurso.value  !== ""){
        const cursoSelecionado = rs.parentNode.parentNode
        const novoCurso = criarNC(nomeCurso.value)
        cxCursos.insertBefore(novoCurso, cursoSelecionado)
        } else {
            alert('Digite o nome do curso')
        }
    } catch(ex) {
        alert('Selecione um curso')
    }
})

btnADD.addEventListener('click', (evt) => {
    const rs = radioSelecionado()
    try {
        if(nomeCurso.value  !== ""){
        const cursoSelecionado = rs.parentNode.parentNode
        const novoCurso = criarNC(nomeCurso.value)
        cxCursos.insertBefore(novoCurso, cursoSelecionado.nextSibling)
        } else {
            alert('Digite o nome do curso')
        }
    } catch(ex) {
        alert('Selecione um curso')
    }
})

// parentNode
// childNodes [nodenumber]
// firstChild
// lastChild
// nextSibling
// previousSibling