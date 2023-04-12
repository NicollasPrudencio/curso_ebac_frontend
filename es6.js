// Array de objetos de alunos com nome e nota
let alunos = [
    { nome: "Nicollas", nota: 7 },
    { nome: "Laise", nota: 5 },
    { nome: "Guilherme", nota: 8 },
    { nome: "Everson", nota: 6 },
    { nome: "Carlos", nota: 4 },
    { nome: "Julia", nota: 9 }
    ];

  // Função que retorna apenas os alunos com nota maior ou igual a 6
    function verificaraprovados(alunos) {
        return alunos.filter(aluno => aluno.nota >= 6);
    }