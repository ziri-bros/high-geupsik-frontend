import { combineReducers } from 'redux';
import schoolFoodList from './schoolFoodList';
import userInfo from './userInfo';

// 여러 리듀서들을 취합하는 코드
const rootReducer = combineReducers({
  userInfo,
  schoolFoodList,
});

export default rootReducer;
