$(document).ready(function () {

    // Mascaras de campos
    $('#telefone').mask('(00) 0 0000-0000');
    $('#cpf').mask('000.000.000-00');
    $('#cep').mask('00000-000');


    // Validações
    $('form').validate({
        rules: {
            nome: {
                required: true
            },
            email: {
                required: true,
                email: true
            },
            telefone: {
                required: true
            },
            cpf: {
                required: true
            },
            endereco: {
                required: false,
            },
            cep: {
                required: false,
            }
        },
        massages: {
            nome: 'Por favor, insira o seu nome'
        },
        submitHandler: function (form) {
            console.log(form)
        },
        invalidHandler: function (evento, validador) {
            let camposIncorretos = validador.numberOfInvalids();
            if (camposIncorretos) {
                alert(`Existem ${camposIncorretos} campos incorretos`);

            }
        }
    })



})