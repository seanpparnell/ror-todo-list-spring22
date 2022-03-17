import { useState, useEffect } from 'react';
import { useParams, useLocation } from 'react-router-dom';
import axios from 'axios';
import NoteList from './NoteList';
import NoteForm from './NoteForm';

const Notes = () => {
  const [notes, setNotes] = useState([])
  const { todoId } = useParams();

  // const { state } = useLocation()
  // const { todoId, todoTitle } = state

  useEffect( () => {
    axios.get(`/api/todos/${todoId}/notes`)
      .then( res => setNotes(res.data) )
      .catch( err => console.log(err) )
  }, [])

  const addNote = (note) => {
    axios.post(`/api/todos/${todoId}/notes`, { note })
      .then( res => setNotes([ ...notes, res.data ]))
      .catch( err => console.log(err) )
  }

  const updateNote = (id, note) => {
    axios.put(`/api/todos/${todoId}/notes/${id}`, { note } )
      .then( res => {
        const newUpdatedNotes = notes.map( n => {
          if (n.id === id) {
            return res.data
          }
          return n
        })
        setNotes(newUpdatedNotes)
      })
      .catch( err => console.log(err) )
  }

  return (
    <>
      <NoteForm addNote={addNote} />
      <h1>All Notes for Todo # {todoId} </h1>
      {/* <p>{todoId}</p>
      <p>{todoTitle}</p> */}
      <NoteList 
        notes={notes}
        updateNote={updateNote}
      />
    </>
  )
}

export default Notes;