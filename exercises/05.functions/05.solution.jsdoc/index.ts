// JSDoc Documentation
// Writing documentation comments that enhance IDE support and code clarity

/**
 * Adds two numbers together.
 * @param a - The first number to add
 * @param b - The second number to add
 * @returns The sum of a and b
 */
function add(a: number, b: number): number {
	return a + b
}

/**
 * Creates a greeting message for a person.
 * @param name - The name of the person to greet
 * @returns A greeting string
 * @example
 * const result = greet('Alice')
 * console.log(result) // "Hello, Alice!"
 */
function greet(name: string): string {
	return `Hello, ${name}!`
}

/**
 * Calculates compound interest on a principal amount.
 * @param principal - The initial amount of money
 * @param rate - The annual interest rate as a decimal (e.g., 0.05 for 5%)
 * @param years - The number of years to compound
 * @returns The final amount after compound interest
 * @example
 * const result = calculateCompoundInterest(1000, 0.05, 10)
 * console.log(result) // 1628.89 (approximately)
 */
function calculateCompoundInterest(
	principal: number,
	rate: number,
	years: number,
): number {
	return principal * Math.pow(1 + rate, years)
}

/**
 * Constrains a value to be within a specified range.
 * @param value - The value to clamp
 * @param min - The minimum allowed value
 * @param max - The maximum allowed value
 * @returns The clamped value between min and max
 * @example
 * clamp(15, 0, 10)  // returns 10
 * clamp(-5, 0, 10)  // returns 0
 * clamp(5, 0, 10)   // returns 5
 */
function clamp(value: number, min: number, max: number): number {
	return Math.max(min, Math.min(max, value))
}

// Test the functions
console.log(add(2, 3)) // 5
console.log(greet('World')) // "Hello, World!"
console.log(calculateCompoundInterest(1000, 0.05, 10)) // ~1628.89
console.log(clamp(15, 0, 10)) // 10
console.log(
	'Results:',
	JSON.stringify({
		add: [add(2, 3), add(-1, 1)],
		greet: [greet('Alice'), greet('World')],
		calculateCompoundInterest: [
			calculateCompoundInterest(1000, 0.05, 10),
			calculateCompoundInterest(100, 0.1, 1),
		],
		clamp: [
			clamp(15, 0, 10),
			clamp(-5, 0, 10),
			clamp(5, 0, 10),
			clamp(0, 0, 10),
			clamp(10, 0, 10),
		],
	}),
)
