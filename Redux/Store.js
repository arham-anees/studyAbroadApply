import { createStore } from "redux";
import tokenReducers from "./Reducers/TokenReducers";

const store = createStore(tokenReducers);

export default store;
