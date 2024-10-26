import React from 'react';
import Tarefa from './Tarefa';

function ListaTarefas({ tarefas, marcarConcluida, removerTarefa }) {
  return (
    <div>
      {tarefas.map((tarefa) => (
        <Tarefa 
          key={tarefa.id} 
          tarefa={tarefa} 
          marcarConcluida={marcarConcluida} 
          removerTarefa={removerTarefa} 
        />
      ))}
    </div>
  );
}

export default ListaTarefas;