import { getDateInAString } from "./common.mjs";

//test example
describe("getDateInAString", () => {
  test("should calculate correct revision dates for a given topic and start date", () => {
    const r = getDateInAString(1);
    console.log(r);
    expect(r).toBe('1970-01-01')
  });
});
