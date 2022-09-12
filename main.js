
novaTarefa = '';

$(document).ready(function (){

    $('form').on('submit', function (e) {

        e.preventDefault();
        const inputnomeTarefa = $('#nova-tarefa').val();
        console.log(inputnomeTarefa);
        const novaTarefa = $('<li></li>');
        $(`${inputnomeTarefa}`).appendTo(novaTarefa);
        $(novaTarefa).appendTo('ul');


    })
    


})



/*
const form = document.;
const novaTarefa = [];

let linhas = '';



form.addEventListener('submit', function (e) {

    e.preventDefault();

    adicionaLinhas();

})


function adicionaLinhas() {

    const inputNovaTarefa = document.getElementById('nova-tarefa');

    if (novaTarefa.includes(inputNovaTarefa.value)) {
        alert(`O contato: ${inputNovaTarefa.value} já foi inserido na lista!`);
    }

    else {
        novaTarefa.push(inputNovaTarefa.value); //adiciona mais elementos ao final de um array e retorna o novo comprimento desse array, no caso em questão valores inserios pelo usuário

        let linha = '<ul>';

        linha += `<li>${inputNovaTarefa.value}</li>`;
        linha += '</ul>';

        linhas += linha;
    }
    inputNovaTarefa.value = '';

}*/