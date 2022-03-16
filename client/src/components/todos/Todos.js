import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import axios from 'axios';
import TodoList from './TodoList';
import TodoForm from './TodoForm';

const Todos = () => {
  const { listId } = useParams()
  const [todos, setTodos] = useState([])

  useEffect( () => {
    axios.get(`/api/lists/${listId}/todos`)
      .then( res => setTodos(res.data))
      .catch( err => console.log(err))
  }, [])

  const addTodo = (todo) => {
    axios.post(`/api/lists/${listId}/todos`, { todo })
      .then( res => setTodos([...todos, res.data]))
      .catch( err => console.log(err))
  }

  const updateTodo = (id, todo) => {
    axios.put(`/api/lists/${listId}/todos/${id}`, { todo })
      .then( res => {
        const newUpdateTodos = todos.map( t => {
          if (t.id === id) {
            return res.data
          }
          return t
        })
        setTodos(newUpdateTodos)
      })
      .catch( err => console.log(err))
  }

  const deleteTodo = (id) => {
    axios.delete(`/api/lists/${listId}/todos/${id}`)
      .then( res => setTodos(todos.filter( t => t.id !== id )) )
      .catch( err => console.log(err))
  }

  return(
    <>
      <TodoForm addTodo={addTodo} />
      <h1>All Todos</h1>
      <TodoList 
        todos={todos} 
        updateTodo={updateTodo}
        deleteTodo={deleteTodo}
      />
    </>
  )
}

export default Todos;