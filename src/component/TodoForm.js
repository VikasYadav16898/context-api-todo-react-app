import React, { useContext, useState } from "react";
import { FormGroup, Input, Button, Form, InputGroup } from "reactstrap";
import { v4 } from "uuid";
import { todoContext } from "../context/todoContext";
import { ADD_TODO } from "../context/action.types";

const TodoForm = () => {
  const [todoString, setTodoString] = useState("");
  const { dispatch } = useContext(todoContext);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (todoString === "") {
      return alert("Please Enter the Todo..");
    }

    //! new
    const todo = {
      todoString,
      id: v4(),
    };
    dispatch({
      type: ADD_TODO,
      payload: todo,
    });

    setTodoString("");
  };

  return (
    <Form onSubmit={handleSubmit}>
      <FormGroup>
        <InputGroup>
          <Input
            type="text"
            name="todo"
            id="todo"
            placeholder="Your next Todo."
            value={todoString}
            onChange={(e) => setTodoString(e.target.value)}
          />
          <Button type="submit" color="warning">
            Add
          </Button>
        </InputGroup>
      </FormGroup>
    </Form>
  );
};

export default TodoForm;
