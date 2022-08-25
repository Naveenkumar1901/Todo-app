import Inputbar from "./components/Inputbar";
import "./app.css";
import Todos from "./components/TodoComponent";
import { useState } from "react";
export default function App() {
  const [detail, setDetail] = useState("");
  const [todos, setTodos] = useState([]);
  return (
    <div className="app">
      <div className="inner-container">
        <h1 className="title">SCHEDULE</h1>
        <Inputbar
          detail={detail}
          setDetail={setDetail}
          setTodos={setTodos}
          todos={todos}
        />
        <Todos todos={todos} setTodos={setTodos} />
      </div>
    </div>
  );
}
