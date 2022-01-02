import {createStore} from "redux";
import todoReducer from "./redux/reducers/todoReducer";


export default createStore(todoReducer)