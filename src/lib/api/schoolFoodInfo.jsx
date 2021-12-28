import axios from 'axios';

export const mealServiceDietInfo = async data => {
  const response = await axios({
    url: `https://open.neis.go.kr/hub/mealServiceDietInfo?ATPT_OFCDC_SC_CODE=${data.regionCode}&SD_SCHUL_CODE=${data.code}&MLSV_YMD=${data.targetDate}`,
    method: 'get',
  });

  return response.data;
};
