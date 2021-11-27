import { createAction, handleActions } from 'redux-actions';

const GET_USER_INFO = 'userInfo/GET_USER_INFO';

export const getUserInfo = createAction(GET_USER_INFO);

const initialState = {
  info: null,
};

const userInfo = handleActions({
  [GET_USER_INFO]: (state, { payload: info }) => ({
    ...state,
    info,
  }),
}, initialState);

export default userInfo;
