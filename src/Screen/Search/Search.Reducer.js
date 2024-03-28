import {HOME_ACTION} from './Search.Action';

const initialState = {
  isLoading: false,
  DataWeather: [],
};

const homeReducer = (state = initialState, action) => {
  switch (action.type) {
    case HOME_ACTION.GET_DATA_HOME:
      return {
        ...state,
        DataWeather: action.payload,
      };

    default:
      return state;
  }
};

export default homeReducer;
