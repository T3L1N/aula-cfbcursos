//const filtroMaior18 = (valor, indice, arr) => {
const filtroMaior18 = (valor) => {
    if(valor >= 18)
    return  valor
}

const idd = [10, 20, 14, 15, 18,49, 51]
const maior = idd.filter(filtroMaior18)

console.log(idd)
console.log(maior)