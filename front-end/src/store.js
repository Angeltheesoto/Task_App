// import { ReactReduxContext } from "react-redux";
import {
  legacy_createStore as createStore,
  combineReducers,
  applyMiddleware,
} from "redux";
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";

const reducer = combineReducers({
  // this will contain our reducers
});

const initialState = {};

const middleware = [thunk];

const store = createStore(
  reducer,
  initialState,
  composeWithDevTools(applyMiddleware(...middleware))
);

export default store;

// "react-redux": "^7.2.2"
// "redux": "^4.0.5"
// "redux-devtools-extension": "^2.13.8"
// "redux-thunk": "^2.3.0"
