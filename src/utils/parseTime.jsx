export const parseTime = time =>
  time.toString().replace(/-/g, '/').split('T').join(' ');
