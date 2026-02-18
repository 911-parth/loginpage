const sum = require("../sum");

test("2 + 2 should equal 4", () => {
  expect(sum(2, 2)).toBe(4);
});
test("3 + 1 should equal 4", () => {
  expect(sum(3, 1)).toBe(4);
});
test("3 + 1 should equal 4", () => {
  expect(sum(2, 0)).toBe(4);
});