const parseTime = time =>
  time
    .toString()
    .replace(/-/g, '/')
    .split('T')
    .join(' ')
    .substring(2, time.length - 3);

const getWeekIdx = () => {
  const today = new Date();
  return [1 - today.getDay(), 7 - today.getDay()];
};

const getTargetDate = (target) => {
  let today = new Date();
  today = new Date(today.setDate(today.getDate() + target - 1));

  const year = today.getFullYear();
  const month = (`0${today.getMonth() + 1}`).slice(-2);
  const day = (`0${today.getDate()}`).slice(-2);

  return `${year}${month}${day}`;
};

const getTodayDate = () => {
  const today = new Date();

  const year = today.getFullYear();
  const month = (`0${today.getMonth() + 1}`).slice(-2);
  const day = (`0${today.getDate()}`).slice(-2);

  return `${year}${month}${day}`;
};

export {
  parseTime,
  getTargetDate,
  getTodayDate,
  getWeekIdx,
};
