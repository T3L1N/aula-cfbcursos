const res = document.querySelector('#res')
const soma = document.querySelector('#soma')
const sub = document.querySelector('#sub')
const mult = document.querySelector('#mult')
const divi = document.querySelector('#divi')

const op = [ 
    () => {
        const val = [document.querySelector('#val1').value, document.querySelector('#val2').value]
        res.innerHTML = Number(val[0]) + Number(val[1])
    },
    () => {
        const val = [document.querySelector('#val1').value, document.querySelector('#val2').value]
        res.innerHTML = Number(val[0]) - Number(val[1])
    },
    () => {
        const val = [document.querySelector('#val1').value, document.querySelector('#val2').value]
        res.innerHTML = Number(val[0]) * Number(val[1])
    },
    () => {
        const val = [document.querySelector('#val1').value, document.querySelector('#val2').value]
        res.innerHTML = Number(val[0]) / Number(val[1])
    }
]

soma.addEventListener('click', op[0])
sub.addEventListener('click', op[1])
mult.addEventListener('click', op[2])
divi.addEventListener('click', op[3])

console.log(res.innerHTML)