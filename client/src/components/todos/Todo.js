import { useState } from 'react';
import TodoForm from './TodoForm';

const Todo = ({ id, title, complete, updateTodo, deleteTodo }) => {
  const [editing, setEdit] = useState(false)
  const [todo, setTodo] = useState({ title: title, complete: complete })

  const handleComplete = () => {
    setTodo({ ...todo, complete: !complete })
    updateTodo(id, todo)
  }

  return (
    <>
      {
        editing ?
          <>
            <TodoForm
              id={id}
              title={title}
              complete={complete}
              updateTodo={updateTodo}
              setEdit={setEdit}
            />
            <button
              onClick={() => setEdit(false)}
            >
              Cancel
            </button>
          </>
        :
        <>
          <h3>Todo# {id} {title}</h3>
          <p>{complete ? "Completed" : "Not Completed"}</p>
          <button
            onClick={() => setEdit(true)}
          >
            Edit
          </button>
          <button
            onClick={() => handleComplete()}
          >
            Toggle Complete
          </button>
          <button
            onClick={() => deleteTodo(id)}
          >
            Delete
          </button>
        </>
      }
    </>
  )
}

export default Todo;