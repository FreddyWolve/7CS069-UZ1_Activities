const { divide } = require("../calculator");

describe("Calculator Error Handling", function () {
  it("should throw an error when dividing by zero", function () {
    expect(function () {
      divide(10, 0);
    }).toThrowError("Cannot divide by zero");
  });
});
