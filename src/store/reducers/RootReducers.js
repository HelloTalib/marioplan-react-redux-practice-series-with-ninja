import AuthReducers from './ProjectReducers';
import ProjectReducers from './ProjectReducers';
import {combineReducers} from 'redux';
import {firestoreReducer} from 'redux-firestore';
const RootReducers = combineReducers({
  auth:AuthReducers,
  project: ProjectReducers,
  firestore: firestoreReducer
})


export default RootReducers;
