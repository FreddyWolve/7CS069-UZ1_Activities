// Import the addition and subtraction functions from the parent directory
const { add, subtract } = require("../calculator");

describe("Calculator Functions", function () {
  // Test - verifying standard addition
  it("should add two numbers correctly", function () {
    expect(add(2, 3)).toBe(5);
  });

  // Test - verifying standard subtraction
  it("should subtract two numbers correctly", function () {
    expect(subtract(5, 2)).toBe(3);
  });

  // Test - verifying negative matchers using .not.toBe()
  it("should not return incorrect sums", function () {
    expect(add(2, 2)).not.toBe(5);
  });
});
