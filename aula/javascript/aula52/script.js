const caixa = document.querySelector('#caixa')

let cursos = ['HTML', 'CSS', 'JavaScript']

// console.log(cursos[0])

cursos.push('C++')
cursos.unshift('Python')
cursos.shift()


cursos.map((el) => {
    let p = document.createElement('p')
    p.innerHTML = el
    caixa.appendChild(p)
})