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
function calculateTotal(subtotal: number, taxRate: number): number {
	const tax = subtotal * taxRate
	return subtotal + tax
}

// 🐨 Create an arrow function `isEven` that returns true if a number is even
// 💰 A number is even when dividing by 2 leaves no remainder

// 🐨 Create `applyToNumber(value, transform)` that:
// - Takes a number and a transform function `(n: number) => number`
// - Returns the result of calling transform with that number

// 🐨 Create arrow functions:
// - `triple` that multiplies a number by 3
// - `square` that multiplies a number by itself
// Then you can call applyToNumber with each.

// 🐨 Export double, greet, calculateTotal, isEven, applyToNumber, triple, square
// export { double, greet, calculateTotal, isEven, applyToNumber, triple, square }
