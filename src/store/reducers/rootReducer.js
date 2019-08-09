import { combineReducers } from "redux";
import getTodo from "./todoReducer";
import { firestoreReducer } from 'redux-firestore'

const rootReducer = combineReducers({
    firestoreGoals: firestoreReducer,
    getTodo: getTodo
   })

   export default rootReducer
