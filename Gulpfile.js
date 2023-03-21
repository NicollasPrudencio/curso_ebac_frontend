const gulp = require('gulp');

function default_func(callback) {
    console.log("Executando via Gulp!")
    callback();
}

exports.default = default_func;

// Processando tarefas em serie
// exports.default = gulp.series(funcao_aqui)