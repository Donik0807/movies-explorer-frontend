export const getTimeFromMins = (mins) => {
  let hours = Math.trunc(mins/60);
  let minutes = mins % 60;
  if (hours > 0) {
    return hours + 'ч ' + minutes + 'м';
  } else return minutes + 'м';
};