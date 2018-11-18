import AuthReducers from './AuthReducers';
import ProjectReducers from './ProjectReducers';
import {combineReducers} from 'redux';




const RootReducers = combineReducers({

  auth: AuthReducers,
  project:ProjectReducers

})


export default RootReducers;