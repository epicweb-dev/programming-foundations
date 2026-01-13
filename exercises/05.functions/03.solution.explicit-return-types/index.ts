// Functions with Explicit Return Types
// Practicing clear function contracts

function getFullName(firstName: string, lastName: string): string {
	return `${firstName} ${lastName}`
}

function parseAge(ageString: string): number {
	return parseInt(ageString, 10)
}

function isValidEmail(email: string): boolean {
	return email.includes('@')
}

// ✅ Test your functions
console.log(getFullName('John', 'Doe')) // "John Doe"
console.log(parseAge('25')) // 25
console.log(isValidEmail('test@example.com')) // true
console.log(isValidEmail('invalid-email')) // false

export { getFullName, parseAge, isValidEmail }

// 🦉 Alternative: Inference-first approach
// In practice, many developers prefer to let TypeScript infer return types.
// This reduces redundancy since TypeScript can figure out the return type:
//
// function getFullName(firstName: string, lastName: string) {
//   return `${firstName} ${lastName}`  // TypeScript infers: string
// }
//
// Explicit return types are most valuable when:
// - The function is exported as part of a public API
// - You want to catch implementation mistakes early
// - The inferred type would be too wide (e.g., string | number vs string)
