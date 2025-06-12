
export function sortDatesAscending(dates) {
  return [...dates].sort((a, b) => new Date(a) - new Date(b));
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
  const month = d.toLocaleString("default", { month: "long" });
  const year = d.getFullYear();

  const suffix =
    day % 10 === 1 && day !== 11
      ? "st"
      : day % 10 === 2 && day !== 12
      ? "nd"
      : day % 10 === 3 && day !== 13
      ? "rd"
      : "th";

  return `${day}${suffix} ${month} ${year}`;
}
