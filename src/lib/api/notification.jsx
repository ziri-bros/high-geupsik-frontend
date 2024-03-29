import axios from 'axios';

export const getNotifications = async (page = 0) => {
  const response = await axios({
    url: `${process.env.REACT_APP_API_BASE_URL}/notifications?page=${page}`,
    method: 'get',
    headers: {
      Authorization: `Bearer ${localStorage.getItem('ACCESS_TOKEN')}`,
    },
  });

  return response.data;
};

export const putNotifications = async notificationId => {
  await axios({
    url: `${process.env.REACT_APP_API_BASE_URL}/notifications/${notificationId}`,
    method: 'put',
    headers: {
      Authorization: `Bearer ${localStorage.getItem('ACCESS_TOKEN')}`,
    },
  });
};
