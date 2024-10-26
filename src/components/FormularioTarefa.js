import React, { useState } from 'react';

function FormularioTarefa({ adicionarTarefa }) {
  const [texto, setTexto] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (texto.trim()) {
      adicionarTarefa(texto);
      setTexto('');
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={texto}
        onChange={(e) => setTexto(e.target.value)}
        placeholder="Nova tarefa"
      />
      <button type="submit">Adicionar</button>
    </form>
  );
}

export default FormularioTarefa;