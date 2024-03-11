import React, { useEffect, useState } from 'react';
import api from '../../services/api';

interface Todo {
  id: number;
  title: string;
  completed: boolean;
}

const Todos: React.FC = () => {
  const [todos, setTodos] = useState<Todo[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await api.get('/todos');
        setTodos(response.data);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching todos:', error);
      }
    };

    if (loading) {
      fetchData();
    }
  }, [loading]);

  return (
    <div className="todos_container">
      {todos.map(todo => (
        <div key={todo.id} className="todo">
          <span>{todo.title}</span> - <a>{todo.completed ? 'Concluido' : 'Incompleto'}</a>
        </div>
      ))}
    </div>
  );
}

export default Todos;
