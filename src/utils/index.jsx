const parseTime = time =>
  time
    .toString()
    .replace(/-/g, '/')
    .split('T')
    .join(' ')
    .substring(2, time.length - 3);

const getTodayDate = () => {
  const today = new Date();
  const year = today.getFullYear();
  const month = (`0${today.getMonth() + 1}`).slice(-2);
  const day = (`0${today.getDate()}`).slice(-2);

  return `${year}${month}${day}`;
};

export {
  parseTime,
  getTodayDate,
};
