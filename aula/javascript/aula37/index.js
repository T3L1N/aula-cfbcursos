const cx1 = document.querySelector('#cx1')
const btn_c1 = document.querySelector('#c1')
const cursos = [...document.querySelectorAll('.curso')]

cx1.addEventListener('click', (evt) => {
    console.log('clicou')
    console.log(evt)
})

cursos.map((el) => {
    el.addEventListener('click', (evt) => {
        evt.stopPropagation()
    })
})

btn_c1.addEventListener('click', (evt) => {
    evt.stopPropagation()
})