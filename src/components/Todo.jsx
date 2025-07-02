import { useState } from "react";

const DeleteButton = ({ todo, setTodoList }) => {
  <button
    onClick={() => {
      setTodoList((prev) => {
        return prev.filter((el) => el.id !== todo.id);
      });
    }}
  >
    삭제
  </button>
}

const StartEditButton = ({ setIsEditing }) => {
  return (
    <button onClick={() => setIsEditing(true)}>
      수정
    </button>
  )
}

const EditSection = ({ todo, setTodoList, setIsEditing }) => {
  const [inputValue, setInputValue] = useState("");
  return (
    <>
      <input
        value={inputValue}
        onChange={(event) => setInputValue(event.target.value)}
      />

      <button
        onClick={() => {
          setTodoList((prev) =>
            prev.map((el) =>
              el.id === todo.id ? { ...el, content: inputValue } : el
            )
          );

          setIsEditing(false)
        }}
      >
        완료
      </button>
    </>
  )
}

const Todo = ({ todo, setTodoList }) => {
  const [isEditing, setIsEditing] = useState(false)

  return (
    <li>
      {todo.content}

      {isEditing && <EditSection todo={todo} setTodoList={setTodoList} setIsEditing={setIsEditing} />}
      {!isEditing && <StartEditButton setIsEditing={setIsEditing} />}
      {!isEditing && <DeleteButton todo={todo} setTodoList={setTodoList} />}
    </li>
  );
}

export default Todo