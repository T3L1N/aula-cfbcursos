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

const tirarSelecao = () => {
    const cursoSelecionado = [...document.querySelectorAll('.selecionado')]
    cursoSelecionado.map((el) => {
        el.classList.remove('selecionado')
    })
}

const criarNC = (curso) => {
    const novoElemento = document.createElement('div')
    novoElemento.setAttribute('id', 'c' + indice)
    novoElemento.setAttribute('class', 'curso c1')
    novoElemento.innerHTML = curso
    novoElemento.addEventListener('click', (evt) => {
        tirarSelecao()
        evt.target.classList.toggle('selecionado')
    })

    return novoElemento
}

cursos.map((el, chave) => {
    const novoElemento = criarNC(el)
    cxCursos.appendChild(novoElemento)
    indice++
})

const cursoSelecionado = () => {
    const cursoSelecionado = [...document.querySelectorAll('.selecionado')]
    return cursoSelecionado[0]
}

btnCS.addEventListener('click', (evt) => {
    try {
        alert(`Curso selecionado: ${cursoSelecionado().innerHTML}`)
    } catch (ex) {
        alert('Selecione um curso')
    }
})

btnRC.addEventListener('click', (evt) => {
    const cs = cursoSelecionado()
    if (cs !== undefined) {
        cs.remove()
    } else {
        alert('Selecione um curso para remove-lo')
    }
})

btnADA.addEventListener('click', (evt) => {
    try {
        if (nomeCurso.value !== "") {
            const novoCurso = criarNC(nomeCurso.value)
            cxCursos.insertBefore(novoCurso, cursoSelecionado())
        } else {
            alert('Digite o nome do curso')
        }
    } catch (ex) {
        alert('Selecione um curso')
    }
})

btnADD.addEventListener('click', (evt) => {
    try {
        if (nomeCurso.value !== "") {
            const novoCurso = criarNC(nomeCurso.value)
            cxCursos.insertBefore(novoCurso, cursoSelecionado().nextSibling)
        } else {
            alert('Digite o nome do curso')
        }
    } catch (ex) {
        alert('Selecione um curso')
    }
})

// parentNode
// childNodes [nodenumber]
// firstChild
// lastChild
// nextSibling
// previousSibling