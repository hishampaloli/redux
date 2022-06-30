
import { createStore , combineReducers, applyMiddleware} from "redux";
import testMiddleware from "./middleware/testMiddlewire";

const initialState = {
    value: 0,
    showLabel: true
  };

  const appReducer = combineReducers({
    value : valueReducer,
    showLabel: ShowLabelReducer
  });
  

  function valueReducer(prevState = 0, action) {
    switch (action.type) {
        case "increment":
          return  prevState+1
          break;
        case "decrement":
          return prevState - 1
          break;
    
        default:
          return prevState;
  }
}

  function ShowLabelReducer(prevState = true, action) {
    switch (action.type) {
        case "showLabel":
          return  action.payload;
          break;
       
        default:
          return prevState;
  }
  }


  function showLabel(payload) {
    return {
        type: 'showLabel',
        payload: payload
    }
  }
  
 const store = createStore(appReducer);

export default store;
 export { showLabel}