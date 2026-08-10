// calculator.test.js
const test = require("node:test");
const assert = require("node:assert");
const { add, subtract, multiply, divide } = require("./calculator.js");

test("adds two numbers correctly", () => {
  assert.strictEqual(add(2, 3), 5);
  assert.strictEqual(add(-1, 1), 0);
});

test("subtracts two numbers correctly", () => {
  assert.strictEqual(subtract(5, 2), 3);
  assert.strictEqual(subtract(2, 5), -3);
});

test("multiplies two numbers correctly", () => {
  assert.strictEqual(multiply(3, 4), 12);
  assert.strictEqual(multiply(-2, 3), -6);
});

test("divides two numbers correctly", () => {
  assert.strictEqual(divide(10, 2), 5);
  assert.throws(() => divide(5, 0), /Cannot divide by zero/);
});
