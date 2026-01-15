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
// 💰 Use implicit return: const isEven = (n: number): boolean => ...

// 🐨 Create a function `applyToNumber` that:
// - Takes a number and a transform function
// - Returns the transformed number
// 💰 function applyToNumber(value: number, transform: (n: number) => number): number

// 🐨 Create arrow functions:
// - `triple` that multiplies a number by 3
// - `square` that multiplies a number by itself
// Then call applyToNumber with each.

// 🐨 When you're done, uncomment this:
// console.log(
// 	'Results:',
// 	JSON.stringify({
// 		double: {
// 			source: double.toString(),
// 			outputs: [double(5), double(0), double(-3)],
// 		},
// 		greet: {
// 			source: greet.toString(),
// 			outputs: [greet('Alice'), greet('Bob')],
// 		},
// 		calculateTotal: {
// 			source: calculateTotal.toString(),
// 			outputs: [calculateTotal(60, 0.1), calculateTotal(100, 0.05)],
// 		},
// 		isEven: {
// 			source: isEven.toString(),
// 			outputs: [isEven(4), isEven(7), isEven(0)],
// 		},
// 		applyToNumber: {
// 			outputs: [applyToNumber(5, triple), applyToNumber(6, square)],
// 		},
// 		tripleSource: triple.toString(),
// 		squareSource: square.toString(),
// 	}),
// )
