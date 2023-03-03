$(document).ready(function(){

$('form button').click(function(){
   
});



$('form').on('submit',function(e){
 e.preventDefault();

const nomeDaTarefa = $('#nome-tarefa').val();
console.log(nomeDaTarefa);
const novoItem = $(`<li class="teste">${nomeDaTarefa}</li>`);
console.log(novoItem);
$(novoItem).appendTo('ul').click((event)=> $(event.target).toggleClass('riscado'));
$('#nome-tarefa').val('');

});



$('form').on('reset',function(){
    console.log('teste');
   $('#lista-tarefas').children().remove();

});


});