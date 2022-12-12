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
const initialState = "React로 Todo List 만들기";

// Reducer
const todoList = (state = initialState, action) => {
  switch (action.type) {
    case SHOW_TODO:
      return {
        todoList: action.payload,
      };

    default:
      return state;
  }
};

export default todoList;
