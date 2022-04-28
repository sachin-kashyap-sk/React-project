import TodoItems from "./TodoItems";

import "./TodoList.css";
const TodoList = (props) => {
  return (
    <div className="todo-List">
      <div></div>
      {props.title.map((item) => (
        <TodoItems title={item} deleteTodo={props.deleteTodo} />
      ))}
    </div>
  );
};

export default TodoList;
