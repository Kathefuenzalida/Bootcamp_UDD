import React, { useState } from 'react';

type Task = {
  id: number;
  name: string;
  completed: boolean;
};

type TaskListProps = {
  initialTasks: Task[];
};

const TaskList: React.FC<TaskListProps> = ({ initialTasks }) => {
  const [tasks, setTasks] = useState<Task[]>(initialTasks);
  const [newTask, setNewTask] = useState<string>('');
  const [showForm, setShowForm] = useState<boolean>(false);

  const handleComplete = (id: number) => {
    setTasks(tasks.map(task =>
      task.id === id ? { ...task, completed: !task.completed } : task
    ));
  };

  const handleDelete = (id: number) => {
    setTasks(tasks.filter(task => task.id !== id));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (newTask.trim() === '') return;
    const newTaskObj: Task = {
      id: Date.now(),
      name: newTask,
      completed: false
    };
    setTasks([...tasks, newTaskObj]);
    setNewTask('');
    setShowForm(false);
  };

  return (
    <div>
      <h2>Lista de Tareas</h2>
      <ul>
        {tasks.map(task => (
          <li key={task.id} style={{ textDecoration: task.completed ? 'line-through' : 'none' }}>
            {task.name}
            <button onClick={() => handleComplete(task.id)}>
              {task.completed ? 'Deshacer' : 'Completar'}
            </button>
            <button onClick={() => handleDelete(task.id)}>Eliminar</button>
          </li>
        ))}
      </ul>

      <button onClick={() => setShowForm(!showForm)}>
        {showForm ? 'Cancelar' : 'Agregar tarea'}
      </button>

      {showForm && (
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            value={newTask}
            onChange={e => setNewTask(e.target.value)}
            placeholder="Nueva tarea"
          />
          <button type="submit">Agregar</button>
        </form>
      )}
    </div>
  );
};

export default TaskList;
