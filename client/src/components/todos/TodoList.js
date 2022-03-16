import Todo from './Todo';

const TodoList = ({ todos, updateTodo }) => (
  <>
    { todos.map( t =>
      <Todo
        key={t.id}
        {...t}
        updateTodo={updateTodo}
      />
    )}
  </>
)

export default TodoList;