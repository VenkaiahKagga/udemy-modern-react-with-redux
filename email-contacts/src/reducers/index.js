import { combineReducers } from 'redux';
import dataListReducer from './reducer_datalist';

const rootReducer = combineReducers({
  dataList: dataListReducer
});

export default rootReducer;
