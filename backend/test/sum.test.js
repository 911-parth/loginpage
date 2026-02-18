const sum = require("../sum");

test("2 + 2 should equal 4", () => {
  expect(sum(2, 2)).toBe(4);
});
test("2 + 2 should equal 4", () => {
  expect(sum(1, 2)).toBe(3);
});
test("2 + 2 should equal 4", () => {
  expect(sum(2, 3)).toBe(5);
});
