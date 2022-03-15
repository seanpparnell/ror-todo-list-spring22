import { useState, useEffect } from 'react';

const ListForm = ({ addList, id, title, desc, updateList, setEdit }) => {
  const [list, setList] = useState({ title: '', desc: '' })

  useEffect( () => {
    if (id) {
      setList({ title, desc })
    }
  }, [])

  const handleSubmit = (e) => {
    e.preventDefault()
    if (id) {
      updateList(id, list)
      setEdit(false)
    } else {
      addList(list)
    }
    setList({ title: '', desc: '' })
  }

  return(
    <>
      <h4>{ id ? "Edit" : "Create" } List</h4>
      <form onSubmit={handleSubmit}>
        <input 
          name='title'
          value={list.title}
          onChange={(e) => setList({ ...list, title: e.target.value })}
          required
          placeholder='List Name'
        />
        <textarea
          name='desc'
          value={list.desc}
          onChange={(e) => setList({ ...list, desc: e.target.value })}
          required
          placeholder='Desc'
        ></textarea>
        <button type='submit'>{ id ? "Update" : "Submit"}</button>
      </form>
    </>
  )
}

export default ListForm;