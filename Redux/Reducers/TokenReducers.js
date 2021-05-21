import { combineReducers } from "redux";

const INITIAL_STATE = {
  token: null,
};

export const tokenReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case "SET_TOKEN":
      // console.log(action);
      return { token: action.payload };
      break;
    default:
      return state;
  }
};

export default combineReducers({
  token: tokenReducer,
});
