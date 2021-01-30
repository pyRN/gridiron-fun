import { combineReducers } from "redux";

//Reducers
import userReducer from "./userReducer";
// import currentUserCollectionReducer from './currentUserCollectionReducer'
// import currentUserReducer from './currentUserReducer'
// import dirtyFlagReducer from './dirtyFlagReducer'
// import displayedCardsReducer from './displayedCardsReducer'
// import expansionsListReducer from './expansionsListReducer'
// import registeredReducer from './registeredReducer'

//The keys in the rootReducer are the entities that are call with useSelector Hook
const rootReducer = combineReducers({
  oUserReducer: userReducer
  // oCurrentUserCollectionReducer: currentUserCollectionReducer,
  // oCurrentUserReducer: currentUserReducer,
  // oDirtyFlagReducer: dirtyFlagReducer,
  // oDisplayedCardsReducer: displayedCardsReducer,
  // oExpansionsListReducer: expansionsListReducer,
  // oRegisteredReducer: registeredReducer
});

export default rootReducer;
