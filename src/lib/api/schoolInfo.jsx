import axios from 'axios';

export const loadSchoolInfo = async (data) => {
  const response = await axios({
    url: `https://open.neis.go.kr/hub/schoolInfo?ATPT_OFCDC_SC_CODE=${data.regionCode}&SD_SCHUL_CODE=${data.code}&SCHUL_NM=${data.name}`,
    method: 'get',
  });

  return response.data;
};
