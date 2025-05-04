function adicionarTarefa(){
    const titulo_tarefa = document.getElementById('titulo-tarefa').value;
    const data_tarefa = document.getElementById('data-tarefa').value;
    const urgencia_tarefa = document.getElementById('urgencia-tarefa').value;

    const novaTarefa = {
        titulo_tarefa,
        data_tarefa,
        urgencia_tarefa,
    }
}

console.log(novaTarefa.titulo_tarefa)
console.log(novaTarefa.data_tarefa)
console.log(novaTarefa.urgencia_tarefa)
