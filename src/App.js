import React, { useState } from "react";

import Todo from "./components/Todo/Todo";
import "./App.css";

const App = () => {
  const [todos, setTodos] = useState([]);
  const [novoTodo, setNovoTodo] = useState("");

  const handleAdd = () => {
    if (novoTodo !== "") {
      setTodos([...todos, novoTodo]);
      setNovoTodo("");
    } else {
      alert("Escreva algo no campo para poder adicionar um 'to do'");
    }
  };

  const handleChange = (event) => {
    setNovoTodo(event.target.value);
  };

  // const handleDelete = () => {
  //   console.log("Essa função foi passada como props");
  // };

  return (
    <div className="container">
      <h1 className="title">Todo List</h1>
      <div className="form-container">
        <input
          className="input"
          placeholder="Digite um todo..."
          type="text"
          value={novoTodo}
          onChange={handleChange}
        />
        <button className="add-button" onClick={handleAdd}>
          Adicionar
        </button>
      </div>
      {todos.map((todo) => {
        return (
          <Todo key={todo} todos={todos} setTodos={setTodos}>
            {todo}
          </Todo>
        );
      })}
    </div>
  );
};

export default App;
