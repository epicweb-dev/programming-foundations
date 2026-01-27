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
// 💰 Short functions can be written more concisely

// 🐨 Create a function `applyToNumber` that:
// - Takes a number and a transform function
// - Returns the transformed number
// 💰 Functions can accept other functions as parameters

// 🐨 Create arrow functions:
// - `triple` that multiplies a number by 3
// - `square` that multiplies a number by itself
// Then call applyToNumber with each.

// 🐨 Export your functions so we can verify your work
// export { double, greet, calculateTotal, isEven, applyToNumber, triple, square }
