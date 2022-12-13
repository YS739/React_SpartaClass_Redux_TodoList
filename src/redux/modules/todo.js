// Action Value
const SHOW_TODO = "SHOW_TODO";

// Action Creator
export const showTodo = (payload) => {
  return {
    type: SHOW_TODO,
    payload,
  };
};

// Initial State
const initialState = {
  todo: [
    { title: "Redux로 Todo List 만들기", id: 1 },
    { title: "Redux 숙련 강의 다 듣기", id: 2 },
  ],
};

// Reducer
const todoList = (state = initialState, action) => {
  switch (action.type) {
    case SHOW_TODO:
      return {
        todoList: action.payload,
        // state 써야 할 것 같은데..
      };

    default:
      return state;
  }
};

export default todoList;
