// Arrow Functions
// Converting between function forms and using implicit returns

// 🐨 Convert this function declaration to an arrow function with implicit return
function double(n: number): number {
	return n * 2
}

// 🐨 Convert this function declaration to an arrow function with implicit return
function greet(name: string): string {
	return `Hello, ${name}!`
}

// 🐨 Convert this to an arrow function (keep the explicit return - it has multiple lines)
function calculateTotal(prices: number[], taxRate: number): number {
	const subtotal = prices.reduce((sum, price) => sum + price, 0)
	const tax = subtotal * taxRate
	return subtotal + tax
}

// 🐨 Create an arrow function `isEven` that returns true if a number is even
// 💰 Use implicit return: const isEven = (n: number): boolean => ...

// 🐨 Create a function `processNumbers` that:
// - Takes an array of numbers
// - Returns an object with: doubled, evens, and sum
// - Use arrow functions in the callbacks (map, filter, reduce)
// 💰 {
//   doubled: numbers.map((n) => ...),
//   evens: numbers.filter((n) => ...),
//   sum: numbers.reduce((acc, n) => ..., 0)
// }

export { double, greet, calculateTotal }
