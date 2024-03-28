import {HOME_ACTION} from './Home.Action';

const initialState = {
  isLoading: false,
  DataWeather: [],
};

const homeReducer = (state = initialState, action) => {
  switch (action.type) {
    case HOME_ACTION.SUCCESS_GET_HOME:
      return {
        ...state,
        DataWeather: action.payload,
      };

    default:
      return state;
  }
};

export default homeReducer;
