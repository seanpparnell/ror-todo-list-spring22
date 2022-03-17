import { useState } from 'react';

const NoteForm = ({ addNote }) => {
  const [note, setNote] = useState({ subject: '', body: '' })

  const handleSubmit = (e) => {
    e.preventDefault()
    addNote(note)
    setNote({ subject: '', body: '' })
  }

  return (
    <>
      <h1>Create Note</h1>
      <form onSubmit={handleSubmit}>
        <input
          name='subject'
          value={note.subject}
          onChange={(e) => setNote({ ...note, subject: e.target.value })}
          required
          placeholder='Subject'
        />
        <textarea
          name='body'
          value={note.body}
          onChange={(e) => setNote({ ...note, body: e.target.value })}
          required
          placeholder='Body'
        ></textarea>
        <button type='submit'>Submit</button>
      </form>
    </>
  )
}

export default NoteForm;