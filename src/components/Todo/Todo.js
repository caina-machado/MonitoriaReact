import Checkbox from "../Checkbox/Checkbox";

import "./Todo.css";

const Todo = ({ children, handleClick }) => {
  return (
    <div className="container">
      <Checkbox />
      <p>{children}</p>
      <button onClick={handleClick}>Deletar</button>
    </div>
  );
};

export default Todo;
