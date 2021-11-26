import axios from 'axios';
import { API_BASE_URL } from '../../constants';

export const signUp = async (schoolInfoDTO) => {
  await axios({
    url: `${API_BASE_URL}/login/cards`,
    data: schoolInfoDTO,
    method: 'post',
    headers: {
      Authorization: `Bearer ${localStorage.getItem('ACCESS_TOKEN')}`,
    },
  });
};

export const imageUploader = async (imageList) => {
  const response = await axios({
    url: `${API_BASE_URL}/images`,
    data: imageList,
    method: 'post',
    headers: {
      'Content-Type': 'multipart/form-data',
      Authorization: `Bearer ${localStorage.getItem('ACCESS_TOKEN')}`,
    },
  });
  return response.data;
};
