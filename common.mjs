export function getUserIDs() {
  return ["1", "2", "3", "4", "5"];
}

export function generateSpacedDates(startDate) {
  const result = [];

  const addDays = (date, days) => {
    const d = new Date(date);
    d.setDate(d.getDate() + days);
    return d;
  };

  const addMonths = (date, months) => {
    const d = new Date(date);
    d.setMonth(d.getMonth() + months);
    return d;
  };

  const addYears = (date, years) => {
    const d = new Date(date);
    d.setFullYear(d.getFullYear() + years);
    return d;
  };

  result.push(addDays(startDate, 7));         
  result.push(addMonths(startDate, 1));       
  result.push(addMonths(startDate, 3));       
  result.push(addMonths(startDate, 6));       
  result.push(addYears(startDate, 1));        

  return result;
}
