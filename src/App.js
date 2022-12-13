import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import styled from "styled-components";
import todoList, { showTodo } from "./redux/modules/todo";

const InputContainer = styled.div`
  width: 95%;
  max-width: 1200px;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  margin: 20px auto;
`;

const InputBox = styled.input`
  width: 250px;
  padding: 15px;
  border: 1px solid plum;

  :hover {
    border: 2px solid blue;
  }
`;

const AddBtn = styled.button`
  border: none;
  border-radius: 20px;
  padding: 10px 15px;
  margin-left: 20px;

  background-color: black;
  color: white;

  cursor: pointer;
`;

const TodoListContainer = styled.div`
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

const App = () => {
  const [title, setTitle] = useState();
  const globalTodo = useSelector((state) => state.todoList.todo);
  console.log(globalTodo);

  const dispatch = useDispatch();

  // input에 입력된 값을 받음
  const onChangeHandler = (e) => {
    const { value } = e.target;
    setTitle(value);
  };

  // todo 추가하기
  const onClickAddTodoHandler = (e) => {
    e.preventDefault();
    if (!title) return; //공백일 때 dispatch 하지 않음
    dispatch(showTodo({ id: todoList.length + 1, title }));
  };

  return (
    <div>
      <InputContainer>
        <form onSubmit={onClickAddTodoHandler}>
          <InputBox type="text" value={title} onChange={onChangeHandler} />
          <AddBtn>추가하기</AddBtn>
        </form>
      </InputContainer>
      <TodoListContainer>
        <TodoCard>{globalTodo}</TodoCard>
      </TodoListContainer>
    </div>
  );
};

export default App;
