import { useSelector, useDispatch } from "react-redux";
import styled from "styled-components";

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

const TodoCard = styled.span`
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
  const todoStore = useSelector((state) => state);
  console.log(todoStore);

  const dispatch = useDispatch();

  const onChangeHandler = (e) => {
    const { value } = e.target;
  };

  return (
    <div>
      <InputContainer>
        <InputBox
          type="text"
          value={value}
          placeholder="Todo의 제목을 입력하세요"
          onChange={onChangeHandler}
        />
        <AddBtn onClick={() => dispatch({ type: SHOW_TODO })}>추가하기</AddBtn>
      </InputContainer>
      <TodoListContainer>
        <TodoCard>
          <p>제목</p>
        </TodoCard>
      </TodoListContainer>
    </div>
  );
};

export default App;
