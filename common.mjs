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
