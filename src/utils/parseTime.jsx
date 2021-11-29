export const parseTime = time =>
  time
    .toString()
    .replace(/-/g, '/')
    .split('T')
    .join(' ')
    .substring(2, time.length - 3);
