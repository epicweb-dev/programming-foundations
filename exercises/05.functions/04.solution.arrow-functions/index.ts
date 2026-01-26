// Arrow Functions
// Converting between function forms and using implicit returns

// Arrow function with implicit return
const double = (n: number) => n * 2

// Arrow function with implicit return (template literal)
const greet = (name: string) => `Hello, ${name}!`

// Arrow function with explicit return (multiple lines)
const calculateTotal = (subtotal: number, taxRate: number) => {
	const tax = subtotal * taxRate
	return subtotal + tax
}

// Arrow function with implicit return
const isEven = (n: number) => n % 2 === 0

// Function using arrow function callbacks
function applyToNumber(
	value: number,
	transform: (n: number) => number,
): number {
	return transform(value)
}

const triple = (n: number) => n * 3
const square = (n: number) => n * n

// Test
console.log(double(5)) // 10
console.log(greet('Alice')) // "Hello, Alice!"
console.log(calculateTotal(60, 0.1)) // 66
console.log(isEven(4)) // true
console.log(applyToNumber(5, triple)) // 15
console.log(applyToNumber(5, square)) // 25

export { double, greet, calculateTotal, isEven, applyToNumber, triple, square }
