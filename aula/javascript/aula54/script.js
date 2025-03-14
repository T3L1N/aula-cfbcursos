const caixa = document.querySelector('#caixa')

let mapa = new Map()

mapa.set('curso', 'JavaScript')
mapa.set(10, 'Teles')
mapa.set(2, 'Jao')
mapa.set('joao', 20)

mapa.delete('')

console.log(mapa)

let pes = 2
let res = ''

if(mapa.has(pes)) {
    res = `A chave existe na coleção com o valor: ${mapa.get(pes)}`
} else {
    res = `A chave NÃO está na coleção`
}

res += `<br> O tamanho da coleção é ${mapa.size}`
caixa.innerHTML = res

mapa.forEach((el) => {
    console.log(el)
})