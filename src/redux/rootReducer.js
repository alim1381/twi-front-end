import { combineReducers } from "redux";
import loginReducer from "./register/loginReducer";

const rootReducer = combineReducers({
  loginState: loginReducer,
});

export default rootReducer;
