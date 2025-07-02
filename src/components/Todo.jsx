import { useState } from "react";

const DeleteButton = ({ todo, setTaskList }) => {
  return (
    <button
      onClick={() => {
        setTaskList((prev) => {
          return prev.filter((el) => el.id !== todo.id);
        });
      }}
    >
      삭제
    </button>
  )
}

const StartEditButton = ({ setIsEditing }) => {
  return (
    <button onClick={() => setIsEditing(true)}>
      수정
    </button>
  )
}

const EditSection = ({ todo, setTaskList, setIsEditing }) => {
  const [inputValue, setInputValue] = useState(todo.content);
  return (
    <>
      <input
      className="long"
        value={inputValue}
        onChange={(event) => setInputValue(event.target.value)}
      />

      <button
        onClick={() => {
          setTaskList((prev) =>
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


const Todo = ({ todo, setTaskList }) => {
  const [isEditing, setIsEditing] = useState(false)

  const handleCheck = () => {
    setTaskList((prev) => {
      const newTaskList = prev.map(
        (el) => el.id === todo.id ? { ...el, isDone: !el.isDone } : el
      )
      return newTaskList
    })
  }

  if (isEditing) {
    return (
      <li>
        <EditSection todo={todo} setTaskList={setTaskList} setIsEditing={setIsEditing} />
      </li>
    )
  }

  return (
    <li>
      <input type="checkbox" checked={todo.isDone} onChange={handleCheck}></input>
      <p className="content" onClick={() => console.log(todo.isDone)}>{todo.content}</p>
      <StartEditButton setIsEditing={setIsEditing} />
      <DeleteButton todo={todo} setTaskList={setTaskList} />
    </li>
  );
}

export default Todo