import axios from 'axios';

export const loadTimetable = async ({ data }) => {
  const response = await axios({
    url: `https:open.neis.go.kr/hub/hisTimetable?Type=json&pIndex=1&pSize=100&ATPT_OFCDC_SC_CODE=${data.regionCode}&SD_SCHUL_CODE=${data.code}&ALL_TI_YMD=${data.date}&GRADE=${data.grade}&CLASS_NM=${data.classNum}`,
    method: 'get',
  });
};
