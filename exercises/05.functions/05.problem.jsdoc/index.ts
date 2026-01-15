// JSDoc Documentation
// Writing documentation comments that enhance IDE support and code clarity

// 🐨 Add a JSDoc comment above this function that includes:
// - A description of what the function does
// - @param tag documenting the `a` parameter
// - @param tag documenting the `b` parameter
// - @returns tag documenting what the function returns
// 💰 JSDoc comments start with /** and end with */
function add(a: number, b: number): number {
	return a + b
}

// 🐨 Add a JSDoc comment for this function that includes:
// - A description
// - @param tag for the `name` parameter
// - @returns tag
// - @example tag showing how to use the function
// 💰 @example tags let you show usage:
// @example
// const result = greet('Alice')
// console.log(result) // "Hello, Alice!"
function greet(name: string): string {
	return `Hello, ${name}!`
}

// 🐨 Add a JSDoc comment for this function that includes:
// - A description explaining what the function calculates
// - @param tag for `principal` (the initial amount)
// - @param tag for `rate` (annual interest rate as decimal)
// - @param tag for `years` (number of years)
// - @returns tag explaining the result
// - @example tag showing typical usage
function calculateCompoundInterest(
	principal: number,
	rate: number,
	years: number,
): number {
	return principal * Math.pow(1 + rate, years)
}

// 🐨 Create a function called `clamp` that:
// - Takes a value, min, and max
// - Returns the value constrained between min and max
// - Has a complete JSDoc comment with description, @param, @returns, and @example
// 💰 Math.max(min, Math.min(max, value)) will clamp a value

// 🐨 When you're done, uncomment this:
// console.log(
// 	'Results JSON:',
// 	JSON.stringify({
// 		add: [add(2, 3), add(-1, 1)],
// 		greet: [greet('Alice'), greet('World')],
// 		calculateCompoundInterest: [
// 			calculateCompoundInterest(1000, 0.05, 10),
// 			calculateCompoundInterest(100, 0.1, 1),
// 		],
// 		clamp: [
// 			clamp(15, 0, 10),
// 			clamp(-5, 0, 10),
// 			clamp(5, 0, 10),
// 			clamp(0, 0, 10),
// 			clamp(10, 0, 10),
// 		],
// 	}),
// )
