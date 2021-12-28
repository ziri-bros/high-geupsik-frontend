import { combineReducers } from 'redux';
import schoolFood from './schoolFood';
import userInfo from './userInfo';

// 여러 리듀서들을 취합하는 코드
const rootReducer = combineReducers({
  userInfo,
  schoolFood,
});

export default rootReducer;
