const cx1 = document.querySelector('div#cx1')
const cx2 = document.querySelector('div#cx2')
const btn = document.querySelector('button#copiar')
const todosCursos = [...document.querySelectorAll('.curso')]

todosCursos.map((el) => {
    el.addEventListener("click", (evt) => {
        const curso = evt.target
        curso.classList.toggle('selecionado')
    })
})

btn.addEventListener('click', () => {
    const selecionado = [...document.querySelectorAll('.selecionado')]
    selecionado.map((el) => {
        cx2.appendChild(el)
    })
})