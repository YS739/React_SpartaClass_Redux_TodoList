import styled from "styled-components";

import { useSelector } from "react-redux";

const TodoListContainer = () => {
  const { todoList } = useSelector((state) => state.todoList);

  return (
    <TodoBox>
      {todoList.map((todo) => (
        <TodoCard key={todo.id}>{todo.title}</TodoCard>
      ))}
    </TodoBox>
  );
};

// styled-components
const TodoBox = styled.div`
  width: 95%;
  max-width: 1200px;
  height: 450px;

  display: flex;
  flex-direction: row;
  overflow-y: scroll;

  background-color: beige;
`;

const TodoCard = styled.div`
  width: 200px;
  height: 100px;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-left: 20px;
  margin-top: 30px;

  border: 2px solid plum;
  border-radius: 20px;
`;

export default TodoListContainer;
