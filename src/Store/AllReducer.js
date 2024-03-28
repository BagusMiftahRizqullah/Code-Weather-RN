import {combineReducers} from 'redux';
import homeReducer from '../Screen/Home/Home.Reducer';
import GlobalReducer from './GlobalReducer';
import searchReducer from '../Screen/Search/Search.Reducer';
export const combinedReducers = combineReducers({
  homeReducer: homeReducer,
  GlobalReducer: GlobalReducer,
  searchReducer: searchReducer,
});
