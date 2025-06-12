export function getUserIDs() {
  return ["1", "2", "3", "4", "5"];
}


export function sortDatesAscending(dates) {
  return [...dates].sort((a, b) => new Date(a) - new Date(b));
}
