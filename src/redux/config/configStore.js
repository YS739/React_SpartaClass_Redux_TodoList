import { createStore } from "redux";
import { combineReducers } from "redux";

const rootReducer = combineReducers({
  todo,
});
const store = createStore(rootReducer);

export default store;
