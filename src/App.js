import { useReducer } from "react";
import { Container } from "reactstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

import { todoContext } from "./context/todoContext";
import todoReducer from "./context/reducer";
import TodoForm from "./component/TodoForm";
import Todos from "./component/Todos";

function App() {
  const [todos, dispatch] = useReducer(todoReducer, []);
  return (
    <todoContext.Provider value={{ todos, dispatch }}>
      <Container fluid>
        <h1>Todo App with Context Api.</h1>
        <TodoForm />
        <Todos />
      </Container>
    </todoContext.Provider>
  );
}

export default App;
