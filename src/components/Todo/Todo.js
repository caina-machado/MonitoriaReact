import Checkbox from "../Checkbox/Checkbox";
import { Container } from "./styles";

const Todo = ({ children, todos, setTodos }) => {
  const handleDelete = () => {
    const todosAtualizado = todos.filter((todo) => {
      return todo !== children;
    });

    setTodos(todosAtualizado);
  };

  return (
    <Container>
      <Checkbox />
      <p>{children}</p>
      <button onClick={handleDelete}>Deletar</button>
    </Container>
  );
};

export default Todo;
