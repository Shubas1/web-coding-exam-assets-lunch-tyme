import {
  GET_RESTAURANT_DATA_SUCCESS,
  GET_RESTAURANT_DATA_FAILURE,
  NEW_RESTAURANT_SELECTED,
} from './constants';

const restaurantsDataFetchSuccess = (data) => {
  return {
    type: GET_RESTAURANT_DATA_SUCCESS,
    payload: data
  }
}

const restaurantsDataFetchFailure = () => {
  return {
    type: GET_RESTAURANT_DATA_FAILURE
  }
}

const fetchRestaurantsData = () => {
    return (dispatch) => {
        fetch('https://s3.amazonaws.com/br-codingexams/restaurants.json')
            .then((response) => {
                if (!response.ok) {
                    throw Error(response.statusText);
                }

                return response;
            })
            .then((response) => response.json())
            .then((items) => dispatch(restaurantsDataFetchSuccess(items.restaurants)))
            .catch(() => dispatch(restaurantsDataFetchFailure()));
    };
}

const newRestaurantSelected = (index) => {
  return {
    type: NEW_RESTAURANT_SELECTED,
    payload: index
  }
}

export {
  fetchRestaurantsData,
  newRestaurantSelected,
}
