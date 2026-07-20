// JSDoc Documentation
// Writing documentation comments that enhance IDE support and code clarity

// 🐨 Add a JSDoc comment above this function that includes:
// - A description of what the function does
// - @param tag documenting the `a` parameter
// - @param tag documenting the `b` parameter
// - @returns tag documenting what the function returns
// 💰 JSDoc uses a block comment that starts with /**
function add(a: number, b: number): number {
	return a + b
}

// 🐨 Add a JSDoc comment for this function that includes:
// - A description
// - @param tag for the `name` parameter
// - @returns tag
// - @example tag showing how to use the function
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

// 🐨 Create `clamp(value, min, max)` that returns value constrained to [min, max]
// - Below min → return min
// - Above max → return max
// - Otherwise → return value
// - Add complete JSDoc: description, @param, @returns, @example

// 🐨 Export add, greet, calculateCompoundInterest, and clamp
// export { add, greet, calculateCompoundInterest, clamp }
