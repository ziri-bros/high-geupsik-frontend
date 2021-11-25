import axios from 'axios';
import { API_BASE_URL } from '../../constants';

export const getUserCardList = async (pageNumber = 1) => {
  const response = await axios.get(`${API_BASE_URL}/admin/cards?page=${pageNumber}`, {
    headers: {
      Authorization: `Bearer ${localStorage.getItem('ACCESS_TOKEN')}`,
    },
  });
  return response.data;
};

export const deleteUserCard = async (cardId) => {
  await axios.delete(`${API_BASE_URL}/admin/cards/${cardId}`, {
    headers: {
      Authorization: `Bearer ${localStorage.getItem('ACCESS_TOKEN')}`,
    },
  });
};
