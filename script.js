const btn = document.querySelector('#enviar')
const tarefas = document.querySelector('#tarefas')
btn.addEventListener("click", function(event){
    event.preventDefault();
    const titulo_tarefa = document.getElementById('titulo-tarefa').value;
    const data_tarefa = document.getElementById('data-tarefa').value;
    const urgencia_tarefa = document.getElementById('urgencia-tarefa').value;

    const novaTarefa = {
        titulo_tarefa,
        data_tarefa,
        urgencia_tarefa,
    }
tarefas.innerHTML += `Título: ${novaTarefa.titulo_tarefa}, Data: ${novaTarefa.data_tarefa}, Urgência: ${novaTarefa.urgencia_tarefa}`
window.alert("Tarefa adicionada")
}
)
