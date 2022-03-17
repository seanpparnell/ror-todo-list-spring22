import { useState } from 'react';
import NoteForm from './NoteForm';

const Note = ({ id, subject, body, updateNote, deleteNote }) => {
  const [editing, setEdit] = useState(false)
  
  return (
    <>
      {
        editing ?
        <>
          <NoteForm
            id={id}
            subject={subject}
            body={body}
            updateNote={updateNote}
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
          <h1>Note # {id} {subject}</h1>
          <p>{body}</p>
          <button
            onClick={() => setEdit(true)}
          >
            Edit
          </button>
          <button
            onClick={() => deleteNote(id)}
          >
            Delete
          </button>
        </>
      }  
    </>
  )
}

export default Note;