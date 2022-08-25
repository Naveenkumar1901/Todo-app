import List from "./ListRow";
import "./todoComponenet.css";
function Todos({ todos, setTodos }) {
  return (
    <div className="todo-wrapper">
      {todos?.map((todo) => (
        <List todo={todo} setTodos={setTodos} todos={todos} />
      ))}
    </div>
  );
}
export default Todos;
