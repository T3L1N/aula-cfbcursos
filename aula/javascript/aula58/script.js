class Carro {
    canal = 'Junin das Quebrada'
    constructor(pnome, ptipo) {
        this.nome = pnome
        if (ptipo == 1) {
            this.tipo = 'Esportivo'
            this.velmax = 300
        } else if (ptipo == 2) {
            this.tipo = 'SUV'
            this.velmax = 200
        } else if (ptipo == 3) {
            this.tipo = 'Caminhonete'
            this.velmax = 160
        } else {
            this.tipo = 'Militar'
            this.velmax = 100
        }
    }

    getNome() {
        return this.nome
    }

    getTipo() {
        return this.tipo
    }

    getVelMax() {
        return this.velmax
    }

    getInfo() {
        return [this.nome, this.tipo, this.velmax]
    }

    setNome(nome) {
        this.nome = nome
    }

    setTipo(tipo) {
        this.tipo = tipo
    }

    setVelMax(velmax) {
        this.velmax = velmax
    }
    info() {
        console.log(`Nome: ${this.nome}`)
        console.log(`Tipo: ${this.tipo}`)
        console.log(`Velocidade Máxima: ${this.velmax}`)
        console.log('========================================')
    }
}

let c1 = new Carro('RAM', 3)
let c2 = new Carro('Urus', 2)
let c3 = new Carro('Civic', 1)
let c4 = new Carro('Tanque', 5)

// c1.info()
// c2.info()

c3.setNome('Civicao')
c3.setTipo('Coisa Linda')
c3.setVelMax(450)

c3.info()

// console.log(c1.getInfo()[0])