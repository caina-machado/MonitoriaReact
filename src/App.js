import React, { useState } from "react";

import Todo from "./components/Todo/Todo";

const App = () => {
  const [todos, setTodos] = useState([]);
  const [novoTodo, setNovoTodo] = useState("");

  const handleAdd = () => {
    setTodos([...todos, novoTodo]);
    setNovoTodo("");
  };

  const handleChange = (event) => {
    setNovoTodo(event.target.value);
  };

  const handleDelete = () => {
    console.log("Essa função foi passada como props");
  };

  return (
    <div>
      <h1>Todo List</h1>
      <input type="text" value={novoTodo} onChange={handleChange} />
      <button onClick={handleAdd}>Adicionar</button>
      {todos.map((todo) => {
        return (
          <Todo handleClick={handleDelete} key={todo}>
            {todo}
          </Todo>
        );
      })}
    </div>
  );
};

export default App;
