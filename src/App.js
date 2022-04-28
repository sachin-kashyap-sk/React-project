import TodoList from "./Components/TodoList";
import "./App.css";
import AddTodo from "./Components/AddTodo";
import { useState } from "react";

const App = () => {
  // const list = [
  const [TodoGoal, SetTodoGoal] = useState([
    {
      id: "e1",
      title: "TodoOne",
    },

    {
      id: "e2",
      title: "TodoTwo",
    },
  ]);
  const addTodoHandler = (enteredText) => {
    if (enteredText.trim().length === 0) {
      return;
    }
    SetTodoGoal((prevTodo) => {
      return [
        { title: enteredText, id: Math.random().toString() },
        ...prevTodo,
      ];
    });
  };

  const DeleteTodoHandler = (id) => {
    SetTodoGoal((prevTodo) => prevTodo.filter((item) => item.id !== id));
  };

  return (
    <div className="App-Structure">
      <h2>Todo-App</h2>
      <AddTodo onAddTodo={addTodoHandler} />
      <TodoList title={TodoGoal} deleteTodo={DeleteTodoHandler} />
    </div>
  );
};

export default App;
