import axios from 'axios';
import { API_BASE_URL } from '../../constants';

export const getUserCardList = async (pageNumber = 1) => {
  const response = await axios({
    url: `${API_BASE_URL}/admin/cards?page=${pageNumber}`,
    method: 'get',
    headers: {
      Authorization: `Bearer ${localStorage.getItem('ACCESS_TOKEN')}`,
    },
  });
  return response.data;
};

export const deleteUserCard = async (cardId) => {
  await axios({
    url: `${API_BASE_URL}/admin/cards/${cardId}`,
    method: 'delete',
    headers: {
      Authorization: `Bearer ${localStorage.getItem('ACCESS_TOKEN')}`,
    },
  });
};

export const allowUserCard = async (cardId) => {
  await axios({
    url: `${API_BASE_URL}/admin/cards/${cardId}`,
    method: 'patch',
    headers: {
      Authorization: `Bearer ${localStorage.getItem('ACCESS_TOKEN')}`,
    },
  });
};
