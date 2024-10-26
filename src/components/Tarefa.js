import React from 'react';

function Tarefa({ tarefa, marcarConcluida, removerTarefa }) {
  return (
    <div style={{ textDecoration: tarefa.concluida ? 'line-through' : 'none' }}>
      <input
        type="checkbox"
        checked={tarefa.concluida}
        onChange={() => marcarConcluida(tarefa.id)}
      />
      {tarefa.texto}
      <button onClick={() => removerTarefa(tarefa.id)}>Remover</button>
    </div>
  );
}

export default Tarefa;