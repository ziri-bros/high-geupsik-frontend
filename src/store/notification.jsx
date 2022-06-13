import { createAction, handleActions } from 'redux-actions';

const GET_NOTIFICATION_COUNT = 'notification/GET_NOTIFICATION_COUNT';

export const getNotificationCount = createAction(GET_NOTIFICATION_COUNT);

const initialState = {};

const notification = handleActions(
  {
    [GET_NOTIFICATION_COUNT]: (state, { payload: notificationCount }) => ({
      ...state,
      notificationCount,
    }),
  },
  initialState,
);

export default notification;
