
$(document).ready(function () {

    $('form').on('submit', function (e) {

        e.preventDefault();
        const inputnomeTarefa = $('#nova-tarefa').val();
        const novaTarefa = $('<li ></li>');

            $(novaTarefa).html(inputnomeTarefa)  ;
            $(novaTarefa).appendTo("ol");

                $('#nova-tarefa').val('');
        
                $(novaTarefa).click(function () {
    
                    $("li").css("text-decoration", "line-through");
                })
    })
    })


