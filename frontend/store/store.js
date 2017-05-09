import {createStore, applyMiddleware} from 'redux';
import rootReducer from '../reducers/root_reducer';
import thunkMiddleware from "../middleware/thunk";


function configureStore(){
  let store = createStore(rootReducer, applyMiddleware(thunkMiddleware));
  return store;
}


export default configureStore;
