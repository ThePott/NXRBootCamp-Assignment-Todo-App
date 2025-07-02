import Todo from "./Todo"

const TodoList = ({ todoList, setTaskList }) => {
  return (
    <ul>
      {todoList.map((todo) => (
        <Todo key={todo.id} todo={todo} setTaskList={setTaskList} />
      ))}
    </ul>
  );
}

export default TodoList