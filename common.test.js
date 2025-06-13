import { getDateInAString } from "./common.mjs";

//test example
describe("getDateInAString", () => {
  test("should calculate correct revision dates for a given topic and start date", () => {
    const r = getDateInAString(1);
    console.log(r);
    expect(r).toBe('1970-01-01')
  });
});

import { generateSpacedDates } from "./common.mjs";

describe("generateSpacedDates", () => {
  test("should return correct spaced dates from a given start date", () => {
    const start = new Date("2023-01-01");
    const spaced = generateSpacedDates(start);

    // Convert to YYYY-MM-DD for easy comparison
    const toString = (d) =>
      d.getFullYear() +
      "-" +
      String(d.getMonth() + 1).padStart(2, "0") +
      "-" +
      String(d.getDate()).padStart(2, "0");

    const actual = spaced.map(toString);

    const expected = [
      "2023-01-08", // +7 days
      "2023-02-01", // +1 month
      "2023-04-01", // +3 months
      "2023-07-01", // +6 months
      "2024-01-01", // +1 year
    ];

    expect(actual).toEqual(expected);
  });
});
