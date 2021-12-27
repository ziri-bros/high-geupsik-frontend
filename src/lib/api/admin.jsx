import axios from 'axios';

export const getUserCardList = async (pageNumber = 1) => {
  const response = await axios({
    url: `${process.env.REACT_APP_API_BASE_URL}/admin/users?page=${pageNumber}`,
    method: 'get',
    headers: {
      Authorization: `Bearer ${localStorage.getItem('ACCESS_TOKEN')}`,
    },
  });
  return response.data;
};

export const deleteUserCard = async userId => {
  await axios({
    url: `${process.env.REACT_APP_API_BASE_URL}/admin/users/${userId}`,
    method: 'patch',
    headers: {
      Authorization: `Bearer ${localStorage.getItem('ACCESS_TOKEN')}`,
    },
  });
};

export const allowUserCard = async userId => {
  await axios({
    url: `${process.env.REACT_APP_API_BASE_URL}/admin/users/${userId}/authorize`,
    method: 'patch',
    headers: {
      Authorization: `Bearer ${localStorage.getItem('ACCESS_TOKEN')}`,
    },
  });
};
