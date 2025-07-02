import { useState } from "react";
import "./App.css";
import TodoList from "./components/TodoList";
import TodoInput from "./components/TodoInput";
import Header from "./components/Header"
import Divider from "./components/Divider"

const App = () => {
  const [taskList, setTaskList] = useState([
    { id: 0, content: "123", isDone: false },
    { id: 1, content: "코딩 공부하기", isDone: false },
    { id: 2, content: "잠 자기", isDone: false },
  ])

  const todoList = taskList.filter((task) => !task.isDone)
  const doneList = taskList.filter((task) => task.isDone)

  console.log("---- re-rendered:", taskList)
  return (
    <div id="app-boundary">
      <Header />
      <main>
        {doneList.length > 0 && <Divider text="완료" />}
        <TodoList todoList={doneList} setTaskList={setTaskList} />
        <Divider text="할 것" />
        <TodoList todoList={todoList} setTaskList={setTaskList} />
      </main>
      <Divider />
      <TodoInput setTaskList={setTaskList} />
    </div>
  );
}


export default App;
