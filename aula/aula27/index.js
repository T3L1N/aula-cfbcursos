// EXEMPLO 1

/*function* cores() {
    yield 'preto'
    yield 'azul'
    yield 'amarelo'
}

const itc = cores()

console.log(itc.next().value) //executa ate achar o primeiro yield
console.log(itc.next().value) //executa de onde parou ate o proximo yield
console.log(itc.next().value) //mesma coisa do console.log acima */


// EXEMPLO 2

/*function* perguntas() {
    const nome = yield 'Qual é o seu nome?'
    const esporte =  yield 'Qual o seu esporte favorito?'
    return `Seu nome é ${nome}, seu esporte favorito é ${esporte}`
}

const itp = perguntas()
console.log(itp.next().value)
console.log(itp.next('Teles').value)
console.log(itp.next('Futzin').value)*/


// EXEMPLO 3

function* contador() {
    var i = 0
    while(true) {
        yield i++
        if(i > 5)
            break
    }
}

const itc = contador()

for(c of itc) {
    console.log(c)
}