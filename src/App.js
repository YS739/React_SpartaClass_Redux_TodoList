import { useSelector } from "react-redux";
import styled from "styled-components";

const InputBox = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`;

const App = () => {
  const todoStore = useSelector((state) => state);
  console.log(todoStore);
  return (
    <div>
      <InputBox>
        <input type="text" placeholder="Todo의 제목을 입력하세요" />
        <button>추가하기</button>
      </InputBox>
      <div>
        <div>
          <p>제목</p>
        </div>
      </div>
    </div>
  );
};

export default App;
