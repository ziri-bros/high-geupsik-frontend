import axios from 'axios';

export const getBoards = async boardReqDTO => {
  const response = await axios({
    url: `${process.env.REACT_APP_API_BASE_URL}/boards`,
    params: { region: '서울특별시', keyword: boardReqDTO.keyword },
    method: 'get',
    headers: {
      Authorization: `Bearer ${localStorage.getItem('ACCESS_TOKEN')}`,
    },
  });
  return response.data;
};

// export const getTimetable = async () => {
//   const response = await axios({
//     url: `${process.env.REACT_APP_API_BASE_URL}/schedules`,
//     method: 'get',
//     headers: {
//       Authorization: `Bearer ${localStorage.getItem('ACCESS_TOKEN')}`,
//     },
//   });
//   return response.data;
// };
