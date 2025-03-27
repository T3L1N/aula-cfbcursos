const militar = document.querySelector('#ftipoMilitar')
const normal = document.querySelector('#ftipoNormal')
const blindagem = document.querySelector('#fblindagem')
const municao = document.querySelector('#fmunicao')
const carros = document.querySelector('.carros')
const btnADDCarro = document.querySelector('#btnAddCarro')
const fnome = document.querySelector('#fnome')
const fportas = document.querySelector('#fportas')

let veiculos = []

ftipoMilitar.addEventListener('click', (evt) => {
    blindagem.removeAttribute('disabled')
    municao.removeAttribute('disabled')
})

ftipoNormal.addEventListener('click', (evt) => {
    blindagem.value = 0
    municao.value = 0
    blindagem.setAttribute('disabled', 'disabled')
    municao.setAttribute('disabled', 'disabled')
})

const gerenciarExibicaoCarros = () => {
    carros.innerHTML = ''
    veiculos.forEach((c) => {
        const div = document.createElement('div')
        div.setAttribute('class', 'carro')
        div.innerHTML = c.nome
        carros.appendChild(div)
    })
}

btnADDCarro.addEventListener('click', () => {
    if (normal.checked) {
        const c = new Carro(fnome.value, fportas.value)
        veiculos.push(c)
    }
    gerenciarExibicaoCarros()
})

class Carro { //Classe PAI / BASE
    constructor (nome, portas) {
        this.nome = nome
        this.portas = portas
        this.ligado = false
        this.vel = 0
        this.cor = ''
    }
    ligar = function() {
        this.ligado = true
    }
    desligar = function() {
        this.ligado =false
    }
    setCor = function(cor) {
        this.cor = cor
    }
}

class Militar extends Carro { //class FILHO
    constructor(nome, portas, blindagem, municao) {
        super(nome, portas)
        this.blindagem = blindagem
        this.municao = municao
        this.setCor('Verde')
    }
    atirar = function() {
        if(this.municao > 0) {
            this.municao--
        }
    }
}

class Utilitario extends Carro {
    constructor(nome, portas, lugares) {
        super(nome, portas)
        this.lugares = lugares
    }
}

const c1 = new Carro('Civic', 4)
c1.ligar()
c1.setCor('Preto')

const c2 = new Militar('Lutador', 6, 100, 50)

const c3 = new Utilitario('Prisma', 4, 5)
c3.setCor('Preto')
