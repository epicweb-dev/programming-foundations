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

// 🐨 Fix the bug by throwing an Error with message "Cannot divide by zero"
// instead of returning a string

// 🐨 Create `isEven(n: number)` that returns true for even numbers
// 💰 Let TypeScript infer the boolean return type
// 💰 A number is even when dividing by 2 leaves no remainder

// ✅ Test
console.log(multiply(4, 5)) // 20
console.log(divide(10, 2)) // 5
// console.log(isEven(4)) // true
// console.log(isEven(7)) // false

// 🐨 Export multiply, divide, and isEven
// export { multiply, divide, isEven }
