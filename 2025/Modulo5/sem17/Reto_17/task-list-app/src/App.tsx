import React from 'react';
import './App.css';
import TaskList from './TaskList';

const App: React.FC = () => {
  const tareasIniciales = [
    { id: 1, name: 'Estudiar React', completed: false },
    { id: 2, name: 'Tomar agua', completed: false }
  ];

  return (
    <div className="App">
      <h1>Mi Aplicación de Tareas</h1>
      <TaskList initialTasks={tareasIniciales} />
    </div>
  );
};

export default App;
