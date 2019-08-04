import { combineReducers } from "redux";
import createTodo from "./createTodo";

const rootReducer = combineReducers({
    todos: createTodo
});
export default rootReducer;
