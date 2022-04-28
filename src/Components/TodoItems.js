import "./TodoItems.css";

const TodoItems = (props) => {
  return (
    <div className="List-Of__Todo">
      {props.title.title}
      <button onClick={() => props.deleteTodo(props.title.id)}>Delete</button>
    </div>
  );
};

export default TodoItems;
