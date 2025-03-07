"use strict";
let dados = {
    nome: 'Teles',
    idade: 20,
    status: 'A',
    ola: () => { console.log('Oi'); },
    info: (p) => { console.log(p); }
};
dados.nome = 'Jao';
console.log(typeof (dados));
console.log(dados.nome);
dados.ola();
dados.info(dados.nome);
