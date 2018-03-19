import {
  GET_RESTAURANT_DATA_SUCCESS,
  GET_RESTAURANT_DATA_FAILURE,
  NEW_RESTAURANT_SELECTED,
} from './constants';

const initialState = {
  restaurants: [],
  selectedIndex: -1
}

const restaurantsDataReducer = (state = initialState, action) => {
  switch(action.type) {
    case GET_RESTAURANT_DATA_SUCCESS:
      return {...state, restaurants: action.payload, selectedIndex: 0};
    case GET_RESTAURANT_DATA_FAILURE:
      return state;
    case NEW_RESTAURANT_SELECTED:
      return {...state, selectedIndex: action.payload}
    default:
      return state;
  }

  return state;
}



export { restaurantsDataReducer };
