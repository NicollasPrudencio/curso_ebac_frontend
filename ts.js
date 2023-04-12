"use strict";
function multiplicar(...args) {
    return args[0] * args[1];
}
function saudacao(seu_nome) {
    return "Olá, " + seu_nome;
}
console.log(multiplicar(5, 5));
console.log(saudacao("Nicollas"));
