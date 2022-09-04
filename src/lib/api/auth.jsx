import axios from 'axios';

export const signUp = async userReqDTO => {
  await axios({
    url: `${process.env.REACT_APP_API_BASE_URL}/users`,
    data: userReqDTO,
    method: 'patch',
    headers: {
      Authorization: `Bearer ${localStorage.getItem('ACCESS_TOKEN')}`,
    },
  });
};

export const imageUploader = async imageList => {
  const response = await axios({
    url: `${process.env.REACT_APP_API_BASE_URL}/images`,
    data: imageList,
    method: 'post',
    headers: {
      'Content-Type': 'multipart/form-data',
      Authorization: `Bearer ${localStorage.getItem('ACCESS_TOKEN')}`,
    },
  });
  return response.data;
};

export const getCurrentUserInfo = async () => {
  const response = await axios({
    url: `${process.env.REACT_APP_API_BASE_URL}/users`,
    method: 'get',
    headers: {
      Authorization: `Bearer ${localStorage.getItem('ACCESS_TOKEN')}`,
    },
  });
  return response;
};

export const updateUserInfo = async userReqDTO => {
  const response = await axios({
    url: `${process.env.REACT_APP_API_BASE_URL}/users`,
    method: 'patch',
    data: userReqDTO,
    headers: {
      Authorization: `Bearer ${localStorage.getItem('ACCESS_TOKEN')}`,
    },
  });
  return response;
};

export const getSchoolByRegion = async data => {
  const response = await axios({
    url: `${process.env.REACT_APP_API_BASE_URL}/schools`,
    method: 'get',
    params: { region: data },
    headers: {
      Authorization: `Bearer ${localStorage.getItem('ACCESS_TOKEN')}`,
    },
  });
  return response;
};
