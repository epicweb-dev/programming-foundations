// Understanding Type Inference
// When to let TypeScript infer vs. when to be explicit

// TypeScript infers the return type here
function multiply(a: number, b: number) {
	return a * b
}

// 🐨 Hover over `multiply` - what's the inferred return type?

// This function has a bug - can you spot it?
// 🐨 Add an explicit return type `: number` to catch the bug
function divide(a: number, b: number) {
	if (b === 0) {
		return 'Cannot divide by zero' // 😱 Returns string!
	}
	return a / b
}

// 🐨 Fix the bug by throwing an error instead of returning a string:
// 💰 throw new Error('Cannot divide by zero')

// 🐨 Create a function `isEven` that returns true if a number is even
// Let TypeScript infer the return type
// 💰 return n % 2 === 0

// ✅ Test
console.log(multiply(4, 5)) // 20
console.log(divide(10, 2)) // 5
// console.log(isEven(4)) // true
// console.log(isEven(7)) // false

export {}
