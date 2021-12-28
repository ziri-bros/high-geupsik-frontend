import { createAction, handleActions } from 'redux-actions';

const GET_SCHOOLFOOD_INFO = 'schoolfood/GET_SCHOOLFOOD_INFO';

export const getSchoolFoodInfo = createAction(GET_SCHOOLFOOD_INFO);

const initialState = {};

const schoolFood = handleActions(
  {
    [GET_SCHOOLFOOD_INFO]: (state, { payload: { type, data } }) => ({
      ...state,
      [type]: data,
    }),
  },
  initialState,
);

export default schoolFood;
