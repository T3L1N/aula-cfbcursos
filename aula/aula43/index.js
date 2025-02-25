const cxCursos = document.querySelector('#cxCursos')
const btn_c = [...document.querySelectorAll('.curso')]
const c1_2 = document.querySelector('#c1_2')
const cursos = ['HTML', 'CSS', 'JavaScript', 'PHP', 'REACT', 'ReactNative']
const btnCS = document.querySelector('#btnCS')

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

btnCS.addEventListener('click', (evt) => {
    const tdsRadios = [...document.querySelectorAll('input[type = radio]')]
    let radioSelecionado = tdsRadios.filter((ele, ind, arr) => {
        return ele.checked
    })
    radioSelecionado = radioSelecionado[0]
    // const cursoSelecionado = radioSelecionado.parentNode.parentNode.firstChild.textContent
    const cursoSelecionado = radioSelecionado.parentNode.previousSibling.textContent
    alert(`Curso selecionado: ${cursoSelecionado}`)
    // console.log(tdsRadios)
    // console.log(radioSelecionado)
    // console.log(cursoSelecionado)
})

// parentNode
// childNodes [nodenumber]
// firstChild
// lastChild
// nextSibling
// previousSibling