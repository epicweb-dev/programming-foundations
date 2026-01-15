// Understanding Type Inference
// When to let TypeScript infer vs. when to be explicit

// TypeScript infers the return type here
function multiply(a: number, b: number) {
	return a * b
}

// With explicit return type, TypeScript catches the bug!
function divide(a: number, b: number): number {
	if (b === 0) {
		throw new Error('Cannot divide by zero')
	}
	return a / b
}

// TypeScript infers boolean from the comparison
function isEven(n: number) {
	return n % 2 === 0
}

// ✅ Test
console.log(multiply(4, 5)) // 20
console.log(divide(10, 2)) // 5
console.log(isEven(4)) // true
console.log(isEven(7)) // false
let divideError: string | null = null
try {
	divide(10, 0)
} catch (error) {
	divideError = error instanceof Error ? error.message : 'Unknown error'
}

console.log(
	'Results JSON:',
	JSON.stringify({
		multiply: [multiply(4, 5), multiply(3, 7), multiply(-2, 4)],
		divide: [divide(10, 2), divide(15, 3), divide(7, 2)],
		divideError,
		isEven: [isEven(4), isEven(2), isEven(0), isEven(7), isEven(3), isEven(1)],
	}),
)
