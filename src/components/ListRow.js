import "./listRow.css";
function List(props) {
  return (
    <div className="list-items">
      <p className="todo-detail">{props.todo}</p>
      <button
        className="delete"
        onClick={() => {
          console.log("deleted");
          let detail = props.todo;
          let oldArray = props.todos;
          let newArray = oldArray.filter((entry) => entry !== detail);
          props.setTodos(newArray);
        }}
      >
        X
      </button>
    </div>
  );
}
export default List;
