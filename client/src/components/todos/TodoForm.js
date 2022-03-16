import { useState, useEffect } from 'react';

const TodoForm = ({ addTodo, id, title, complete, updateTodo, setEdit }) => {
  const [todo, setTodo] = useState({ title: '', complete: false })

  useEffect( () => {
    if (id) {
      setTodo({ title, complete })
    }
  }, [])

  const handleSubmit = (e) => {
    e.preventDefault()
    if (id) {
      updateTodo(id, todo)
      setEdit(false)
    } else {
      addTodo(todo)
    }
    setTodo({ title: '', complete: false })
  }

  return (
    <>
      <h3>{ id ? "Edit" : "Create" } Todo</h3>
      <form onSubmit={handleSubmit}>
        <input
          name='title'
          value={todo.title}
          onChange={(e) => setTodo({...todo, title: e.target.value })}
          placeholder="Title"
          required
        />
        {
          id ?
            <input
              type="checkbox"
              name='complete'
              checked={todo.complete}
              onChange={(e) => setTodo({...todo, complete: !todo.complete })}
            />
          :
          null
        }
        <button type='submit'>
          Submit
        </button>
      </form>
    </>
  )
}

export default TodoForm;