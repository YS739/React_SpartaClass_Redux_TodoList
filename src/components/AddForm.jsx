import styled from "styled-components";

import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import todoList, { showTodo } from "../redux/modules/todo";

const AddForm = () => {
  const [title, setTitle] = useState();
  const dispatch = useDispatch();

  // todoList의 title만 가져오기
  const globalTodo = useSelector((state) => state.todoList.todo);
  console.log(globalTodo);

  // todo 추가하기
  const onClickAddTodoHandler = (e) => {
    e.preventDefault();
    if (!title) return alert("제목을 입력해주세요."); //공백일 때 dispatch 하지 않음
    dispatch(showTodo({ id: todoList.length + 1, title }));
    setTitle("");
  };

  return (
    <InputContainer>
      <form onSubmit={onClickAddTodoHandler}>
        <InputBox
          type="text"
          value={title}
          placeholder="Todo 제목을 입력하세요."
          onChange={(e) => setTitle(e.target.value)}
        />
        <AddBtn>추가하기</AddBtn>
      </form>
    </InputContainer>
  );
};

// styled-components
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

export default AddForm;
