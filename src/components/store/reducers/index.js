import { combineReducers } from "redux";
import reducerMovies from "./reducerMovies";

const rootReducer = combineReducers({
    inforMovies: reducerMovies
});
 
export default rootReducer;