// Arrow Functions
// Converting between function forms and using implicit returns

// Arrow function with implicit return
const double = (n: number) => n * 2

// Arrow function with implicit return (template literal)
const greet = (name: string) => `Hello, ${name}!`

// Arrow function with explicit return (multiple lines)
const calculateTotal = (prices: number[], taxRate: number) => {
	const subtotal = prices.reduce((sum, price) => sum + price, 0)
	const tax = subtotal * taxRate
	return subtotal + tax
}

// Arrow function with implicit return
const isEven = (n: number) => n % 2 === 0

// Function using arrow function callbacks
function processNumbers(numbers: number[]) {
	return {
		doubled: numbers.map((n) => n * 2),
		evens: numbers.filter((n) => n % 2 === 0),
		sum: numbers.reduce((acc, n) => acc + n, 0),
	}
}

// Test
console.log(double(5)) // 10
console.log(greet('Alice')) // "Hello, Alice!"
console.log(calculateTotal([10, 20, 30], 0.1)) // 66
console.log(isEven(4)) // true
console.log(processNumbers([1, 2, 3, 4, 5]))
// { doubled: [2, 4, 6, 8, 10], evens: [2, 4], sum: 15 }

export { double, greet, calculateTotal, isEven, processNumbers }
