import { useParams } from 'react-router-dom';

const Todos = () => {
  const { listId } = useParams()

  return(
    <>
      <h1>All Todos</h1>
      <p>List Id: {listId}</p>
    </>
  )
}

export default Todos;