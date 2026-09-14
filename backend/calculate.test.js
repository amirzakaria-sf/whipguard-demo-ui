const test = require("node:test");
const assert = require("node:assert/strict");
const { calculateTotal } = require("./calculate");

test("calculateTotal multiplies price by quantity for each line item", () => {
  const items = [
    { price: 10, quantity: 3 },
    { price: 5, quantity: 2 },
  ];
  // 10*3 + 5*2 = 40, not 15 (price-only, ignoring quantity).
  assert.equal(calculateTotal(items), 40);
});
