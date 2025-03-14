const caixa = document.querySelector('#caixa')

let musicas = new Set(['musica 1', 'musica boa', 'musica 10'])

musicas.add('Make It Bun Dem')
musicas.add('Classica')
musicas.add('Eletronica')
musicas.add('Eletronica')

musicas.delete('Eletronica')
// musicas.clear()

console.log(musicas)

// musicas.forEach((el) => {
//     caixa.innerHTML += `${el} <br> `
// })

for (let m of musicas) {
    caixa.innerHTML += `${m} <br>`
}