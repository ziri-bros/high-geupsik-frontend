import axios from 'axios';

export const getBoards = async boardReqDTO => {
  const response = await axios({
    url: `${process.env.REACT_APP_API_BASE_URL}/boards`,
    params: { region: boardReqDTO.region, keyword: boardReqDTO.keyword },
    method: 'get',
    headers: {
      Authorization: `Bearer ${localStorage.getItem('ACCESS_TOKEN')}`,
    },
  });
  return response.data;
};
