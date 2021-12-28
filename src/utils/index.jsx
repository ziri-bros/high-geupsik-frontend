export const parseTime = time =>
  time
    .toString()
    .replace(/-/g, '/')
    .split('T')
    .join(' ')
    .substring(2, time.length - 3);

export const getWeekIdx = () => {
  const today = new Date();
  return [1 - today.getDay(), 7 - today.getDay()];
};

export const getWeek = target => {
  let today = new Date();
  today = new Date(today.setDate(today.getDate() + target - 1));

  const day = `${today.getDay()}`;

  switch (day) {
    case '0':
      return '일';
    case '1':
      return '월';
    case '2':
      return '화';
    case '3':
      return '수';
    case '4':
      return '목';
    case '5':
      return '금';
    default:
      return '토';
  }
};

export const getTargetDate = target => {
  let today = new Date();
  today = new Date(today.setDate(today.getDate() + target - 1));

  const year = today.getFullYear();
  const month = `0${today.getMonth() + 1}`.slice(-2);
  const day = `0${today.getDate()}`.slice(-2);

  return `${year}${month}${day}`;
};

export const getTodayDate = () => {
  const today = new Date();

  const year = today.getFullYear();
  const month = `0${today.getMonth() + 1}`.slice(-2);
  const day = `0${today.getDate()}`.slice(-2);

  return `${year}${month}${day}`;
};
