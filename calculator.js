/**
 * Adds two numbers together.
 * @param {number} a first number.
 * @param {number} b second number.
 * @returns {number} sum of a and b.
 */
function add(a, b) {
  return a + b;
}

/**
 * Subtracts the second number from the first.
 * @param {number} a base number.
 * @param {number} b number to subtract.
 * @returns {number} difference between a and b.
 */
function subtract(a, b) {
  return a - b;
}

/**
 * Divides the first number by the second. Throws an error if dividing by zero.
 * @param {number} a Numerator.
 * @param {number} b Denominator.
 * @returns {number} Quotient of a and b.
 * @throws {Error} If b is equal to zero.
 */
function divide(a, b) {
  if (b === 0) {
    throw new Error("Cannot divide by zero");
  }
  return a / b;
}

// Export the functions so they can be imported and tested in Jasmine spec files
module.exports = { add, subtract, divide };
