import React, { useState } from 'react';
import FormularioTarefa from './components/FormularioTarefa';
import ListaTarefas from './components/ListaTarefas';

function App() {
  const [tarefas, setTarefas] = useState([]);

  const adicionarTarefa = (texto) => {
    const novaTarefa = { id: Date.now(), texto, concluida: false };
    setTarefas([...tarefas, novaTarefa]);
  };

  const marcarConcluida = (id) => {
    setTarefas(
      tarefas.map((tarefa) => 
        tarefa.id === id ? { ...tarefa, concluida: !tarefa.concluida } : tarefa
      )
    );
  };

  const removerTarefa = (id) => {
    setTarefas(tarefas.filter((tarefa) => tarefa.id !== id));
  };

  return (
    <div className="App">
      <h1>Lista de Tarefa</h1>
      <FormularioTarefa adicionarTarefa={adicionarTarefa} />
      <ListaTarefas 
        tarefas={tarefas} 
        marcarConcluida={marcarConcluida} 
        removerTarefa={removerTarefa} 
      />
      <p>Tarefas Pendentes: {tarefas.filter(tarefa => !tarefa.concluida).length}</p>
      <p>Tarefas Concluídas: {tarefas.filter(tarefa => tarefa.concluida).length}</p>
    </div>
  );
}

export default App;