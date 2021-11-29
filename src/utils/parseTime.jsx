export const parseTime = time =>
  time
    .toString()
    .replace('20', '')
    .replace('T', ' ')
    .replace(/-/g, '/')
    .substr(0, time.length - 5);
