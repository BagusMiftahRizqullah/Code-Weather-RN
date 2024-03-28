import {SEARCH_ACTION} from './Search.Action';

const initialState = {
  isLoading: false,
  data_contry: [],
};

const searchReducer = (state = initialState, action) => {
  switch (action.type) {
    case SEARCH_ACTION.GET_DATA_COUNTRY:
      return {
        ...state,
        data_contry: action.payload,
      };

    default:
      return state;
  }
};

export default searchReducer;
