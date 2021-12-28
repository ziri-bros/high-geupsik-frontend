import { createAction, handleActions } from 'redux-actions';

const GET_SCHOOLFOOD_INFO = 'schoolFoodList/GET_SCHOOLFOOD_INFO';

export const getSchoolFoodList = createAction(GET_SCHOOLFOOD_INFO);

const initialState = {};

const schoolFoodList = handleActions(
  {
    [GET_SCHOOLFOOD_INFO]: (state, { payload: { type, data } }) => ({
      ...state,
      [type]: data,
    }),
  },
  initialState,
);

export default schoolFoodList;
