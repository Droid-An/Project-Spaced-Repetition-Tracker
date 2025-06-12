export function getUserIDs() {
  return ["1", "2", "3", "4", "5"];
}


export function isFutureDate(date) {
  const today = new Date();
  today.setHours(0, 0, 0, 0); 

  const inputDate = new Date(date);
  inputDate.setHours(0, 0, 0, 0); 

  return inputDate >= today;
}

export function formatDate(date) {
  const d = new Date(date);
  const day = d.getDate();
  const month = d.toLocaleString('default', { month: 'long' });
  const year = d.getFullYear();

  const suffix =
    day % 10 === 1 && day !== 11
      ? 'st'
      : day % 10 === 2 && day !== 12
      ? 'nd'
      : day % 10 === 3 && day !== 13
      ? 'rd'
      : 'th';

  return `${day}${suffix} ${month} ${year}`;
}
