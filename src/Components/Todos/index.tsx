import React, { useEffect, useState } from 'react';
import api from '../../services/api';

// import { Container } from './styles';

const Todos: React.FC = () => {
  const [todos, setTodos] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    let consultaApi = async () => {
      await api.get('/todos')
        .then((response) => {
          setTodos(response.data)
          setLoading(false);
        })
    }
    if (loading) {
      consultaApi();
      console.count("Carregou")
    }
  }, [todos])
  //  yarn create vite teste --template react-ts
  return (<>
    <div className="todos_container">
      {todos.map(todo => (<div key={todo.id} className="todo">
        <span>{todo.title}</span> - <a>{
          todo.completed ? 'Concluido' : 'Incompleto'
        }</a>
      </div>))}
    </div>
  </>);
}

export default Todos;