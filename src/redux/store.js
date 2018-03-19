import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { restaurantsDataReducer } from './reducers';

const INITIAL_STATE = {
  restaurantsDataReducer: { restaurants: [] },
};

const rootReducer = combineReducers({
  restaurantsDataReducer,
});

const store = createStore(rootReducer, INITIAL_STATE, applyMiddleware(thunk));

export default store;
