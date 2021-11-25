import axios from 'axios';
import { API_BASE_URL } from '../../constants';

export const signUp = (schoolInfoDTO) => {
  axios.post(`${API_BASE_URL}/login/schoolInfo`, schoolInfoDTO, {
    headers: {
      Authorization: `Bearer ${localStorage.getItem('ACCESS_TOKEN')}`,
    },
  });
};

export const imageUploader = async (imageList) => {
  const response = await axios.post(`${API_BASE_URL}/images`, imageList, {
    headers: {
      'Content-Type': 'multipart/form-data',
      Authorization: `Bearer ${localStorage.getItem('ACCESS_TOKEN')}`,
    },
  });
  return response.data;
};
