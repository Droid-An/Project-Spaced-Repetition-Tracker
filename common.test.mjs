import { getDateInAString, getUserIDs } from "./common.mjs";

describe("getDateInAString", () => {
  test("should calculate correct revision dates for a given topic and start date", () => {
    const r = getDateInAString(1);
    console.log(r);
    expect(r).toBe('1970-01-01')
  });
});

describe("default", ()=> {
  test("User count is correct", () => {
    expect(getUserIDs()).toHaveLength(5);
  });
});